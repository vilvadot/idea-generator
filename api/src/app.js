const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const app = express()

require('dotenv').config()

const routes = require('./routes')

const {PORT, DATABASE, WEB_URI} = process.env

// Connect DB
mongoose.connect(DATABASE);
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

app.use('/', routes);

app.listen(PORT)

console.log('Server running 👍')