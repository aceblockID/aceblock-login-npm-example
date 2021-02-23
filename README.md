
1. Create config folder and in config folder config.js file with content:

 
 
const env = process.env.APP_RUN_OPTION || 'dev';
 
const dev = {
   app: {
       port: 4090,
       redirectUrl: '/user'
       bcURL: 'https://ssi.aceblock.com/rpc',
       IPFSclient: '/dns4/ssi.aceblock.com/tcp/5001',
       contractAddress: '0xcEe408DA63635f2bD9A1608cCDC354F1a506f2b5',
       contractAbi: [{ "constant": true, "inputs": [{ "name": "DIDs", "type": "bytes32[]" }], "name": "getDIDdocAddress", "outputs": [{ "name": "DIDdocs", "type": "string[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "DID", "type": "bytes32" }], "name": "getDIDdocAddress", "outputs": [{ "name": "DIDdoc", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "ethAddress", "type": "address" }], "name": "getDID", "outputs": [{ "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }],
       didDocSchema: __dirname + '/didDocSchema.json',
       JsonldSchema: __dirname + '/JsonldSchema.json'
   },
   qrjwt: {
       did: 'id:ace:0x1fb5ce0b0c0c09efe1a8f448d0d268365ed9d02dd34a6c2ffa56cc1626a95c02',
       callbackUri: 'http://localhost:4070/callback',
       essClaimFields: ['email', 'phone_number', 'did'],
       volunClaimFields: ['name','address'],
       issuer: "https://self-isued.me/" // TODO tu bo treba popravit string v celi verigi na "https://self-issued.me"
   },
   cbjwt: {
 
   }
}
 
const prod = {
   app: {
       port: 8080,
       bcURL: 'https://ssi.aceblock.com/rpc',
       IPFSclient: '/dns4/ssi.aceblock.com/tcp/5001',
       contractAddress: '0xcEe408DA63635f2bD9A1608cCDC354F1a506f2b5',
       contractAbi: [{ "constant": true, "inputs": [{ "name": "DIDs", "type": "bytes32[]" }], "name": "getDIDdocAddress", "outputs": [{ "name": "DIDdocs", "type": "string[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "DID", "type": "bytes32" }], "name": "getDIDdocAddress", "outputs": [{ "name": "DIDdoc", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "ethAddress", "type": "address" }], "name": "getDID", "outputs": [{ "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }],
       didDocSchema: __dirname + '/didDocSchema.json',
       JsonldSchema: __dirname + '/JsonldSchema.json'
   },
   qrjwt: {
       did: 'id:ace:0x1fb5ce0b0c0c09efe1a8f448d0d268365ed9d02dd34a6c2ffa56cc1626a95c02',
       callbackUri: 'http://ssi.aceblock.com/auth/ssiaas/callback',
       essClaimFields: ['email', 'phone_number'],
       volunClaimFields: ['name','address'],
       issuer: "https://self-isued.me/"
   },
   cbjwt: {
 
   }
}
 
 
const config = {
   dev,
   prod
}
 
module.exports = config[env];


2. Add to app/server code:

const config = require('./config/config');

Acquire did address for your domain and insert it in config file
Set field essClaimFields with fields that you will require from customer
Set field volonClaimFields with fields that will be optional for your customer
Set port field on which your app server is running

Install aceblock-oidc-client  npm package:
    
npm install aceblock-oidc-client

Add to app/server code:
const {qrCodeValues, idTokenVerification} = require('aceblock-oidc-client');


Install express-session npm package:

npm install express-session

Add to app/server code:
const session = require('express-session');
const crypto = require('crypto');
 
// Session handling
app.use(
   session({
       secret: crypto.randomBytes(32).toString('hex'),
       resave: false,
       saveUninitialized: false
   }));


Install cookie-parser npm package:

npm install cookie-parser
Add to app/server code:
const cookieParser = require('cookie-parser');
 
app.use(cookieParser());


For rendering pages install ejs npm package:

npm install ejs


Create view folder and add ejs files you need.

Add to app/server code:
const path = require('path');
 
// ejs engine and views folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


For socket connection instal socket.io npm package:

npm install ejs

Add to app/server code:
const socket = require('socket.io');
 
// Start app
const server = app.listen(port, console.log('App is running on port ' + port));
 
// Set up socket.io connection
var io = socket(server);
 
io.on('connection', (socket) => {
   io.to(socket.id).emit('conn', socket.id);
   socket.on('onload', (data) => {
       socket.nonce = data.nonce;
   });
});
Create login:
Create api call with code:
 
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

Create login.ejs page in views folder with code:

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Login page</title>
   <script src="/socket.io/socket.io.js"></script>
</head>
<body>
   <h1>This is Login page</h1>
   <div id="qrCode"><%- qrCodePlaceholder %></div>
   <p></p>
   <p><strong>This is content of qr code: </strong><div id="qrCodeContent"></div></p>
   <a href="/">Back to home page</a>
   <p>Here are links to other pages:</p>
   <p><a href="settings">Link to settings page</a></p>
   <p><a href="stats">Link to statistics</a></p>
   <p><a href="user">Link to user settings</a></p>
   <p><a href="logoff">Log off</a></p>
   <script>
       // Make socket connetion
       const socket = io.connect( 'http://localhost:4090');
       //
       const qrCode = document.getElementById("qrCode");
       // Add event emmiter
       function sendNonnce(data){
           socket.emit('onload', {
               nonce: <%- JSON.stringify(sessionNonce) %>,
               socketId: data
           });
       }
       // Listen to events
       socket.on('conn', (nonce) => {
           sendNonnce(nonce);
       });
       socket.on('redirect', (redirectUrl, idToken) => {
           document.cookie = 'idToken=' + idToken + '; max-age=600; samesite=strict';           
           window.location.href = redirectUrl;
       });  
   </script>
</body>



Add token verification api callback code:

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


Add token verification to the rest of the api calls that need to be protected by adding “verifyIdToken” to call as here:

app.get('/user', verifyIdToken, (req, res) => {
   res.render('user');
});


Add log off functionality by setting idToken cookie value to some new value or maxAge to -1 which means that cookie gets deleted (or both):

// Log off functionality
app.get('/logoff', (req, res) => {
   // add functionality for to log off
   res.cookie('idToken', 'empty', {maxAge: -1, sameSite:'lax', httpOnly: false});
   res.redirect('/');
});




