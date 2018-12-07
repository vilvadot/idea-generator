const express = require('express')
const app = express()
require('dotenv').config()

const {PORT} = process.env

console.log('Server running 👍')

app.get('/', (req, res) => {
  res.send('hello world!')
})

app.listen(PORT)