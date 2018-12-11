const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const app = express()

const routes = require('./routes')

const {PORT} = process.env

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our pug files
app.set('view engine', 'pug'); // we use the engine pug, 

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use('/', routes);

app.listen(PORT)

console.log('Server running 👍')