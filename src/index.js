require('dotenv').config()
const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();
const port = process.env.HTTPS_PORT || 3000;
const userRoute = require('./router/user');

app.use(express.json());
app.use(userRoute);

https.createServer({
    key: fs.readFileSync('./certs/key.pem'),
    cert: fs.readFileSync('./certs/cert.pem'),
    passphrase: process.env.PASSPHRASE
},app).listen(port,()=>{
    console.log(`Running server ${port}`)
});