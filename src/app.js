const express = require('express')
const api = require('./backend/api')
const path = require('path');
const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname +'/frontend/calculator.html'));
});

app.use("/api", api)

module.exports = app;