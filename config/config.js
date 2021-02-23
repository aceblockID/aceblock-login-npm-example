

const env = process.env.APP_RUN_OPTION || 'dev';

const dev = {
    app: {
        port: 4090,
        redirectUrl: '/user',
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
        essClaimFields: ['email', 'phone_number', 'did'],
        volunClaimFields: ['name','address'],
        issuer: "https://self-isued.me/" // TODO this has to be corrected in whole chain "https://self-issued.me"
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