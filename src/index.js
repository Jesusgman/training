require('dotenv').config()
const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();
const port = process.env.HTTPS_PORT || 3000;

app.get('/',(req,res)=>{
    res.send('<html><body><a href="/profile">click me</a></body></html>')
});

https.createServer({
    key: fs.readFileSync('./certs/key.pem'),
    cert: fs.readFileSync('./certs/cert.pem'),
    passphrase: process.env.PASSPHRASE
},app).listen(port,()=>{
    console.log('Running server')
});