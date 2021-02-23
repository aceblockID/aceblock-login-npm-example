const express = require('express');
const config = require('./config/config');
const {qrCodeValues, idTokenVerification} = require('aceblock-oidc-client');
const session = require('express-session');
const crypto = require('crypto');
const cookieParser = require('cookie-parser');
const path = require('path');
const socket = require('socket.io');

// app
const port = config.app.port;
const app = express();


// Start app
const server = app.listen(port, console.log('App is running on port ' + port));

// Session handling
app.use(
    session({
        secret: crypto.randomBytes(32).toString('hex'),
        resave: false,
        saveUninitialized: false
    }));


// Add cookieParser
app.use(cookieParser());

// ejs engine and views folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Set up socket.io connection
var io = socket(server);

io.on('connection', (socket) => {    
    io.to(socket.id).emit('conn', socket.id);
    socket.on('onload', (data) => {
        socket.nonce = data.nonce;
    });   
});


//API links

// Temporary usage for testing purposes
const nonce1 = '2e7de4c4-24f1-466f-a153-bc2624614eed';

app.get('/login', async (req, res) => {
    const did = config.qrjwt.did,
    callbackUri = config.qrjwt.callbackUri,
    essClaims = config.qrjwt.essClaimFields,
    volClaims = config.qrjwt.volunClaimFields;
    const {imgTag, jwt, nonce, uri} = await qrCodeValues.create_qrcode(did, callbackUri, essClaims, volClaims);
    // console.log('jwt: ' + jwt);
    // console.log('nonce: ' + nonce1);
    // console.log('uri: ' + uri);
    res.render('login', {qrCodePlaceholder: imgTag, qrCodeContent: jwt, sessionNonce: nonce1});
});

// Token verification
const verifyIdToken = idTokenVerification.initVerIdToken(config);

// api call for token verifiaciont
app.post('/callback', verifyIdToken, (req, res) => {    
    const location = config.app.redirectUrl;
    const idToken = req.headers['id_token'];
    const tokenPayload = req.payload;
    const rnonce = tokenPayload.nonce;
    console.log(rnonce);
    let json = io.of('/').sockets;
    let socId = getSocketId(json, rnonce);
    // send info to socket for redirection and saving token to cookie
    io.to(socId).emit('redirect', location, idToken);
    res.json({
        nonce: rnonce,
        socketId: socId
    });
});

// extract socket id from sockets object
function getSocketId(json, rnonce) {
    let values = [...json.values()];
    let soc =  values.find(socket => socket.nonce === rnonce);
    let socketID;
    if (soc) {
        socketID = soc.id;
    }
    return socketID;
}




// rest of api calls

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/settings', verifyIdToken, (req, res) => {
    res.render('settings');
});

app.get('/user', verifyIdToken, (req, res) => {
    res.render('user');
});

app.get('/stats', (req, res) => {
    res.render('stats');
});


// Log off functionality
app.get('/logoff', (req, res) => {
    res.cookie('idToken', 'empty', {maxAge: -1, sameSite:'lax', httpOnly: false});
    res.redirect('/');
});