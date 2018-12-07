const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()

const {PORT, DATABASE} = process.env

// Connect DB
mongoose.connect(DATABASE);
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});


app.get('/', (req, res) => {
  res.send('hello world!')
})

app.listen(PORT)

console.log('Server running 👍')