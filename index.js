// We set our externals variables
const dotenv = require('dotenv');
dotenv.config();

// We require and set express
const express = require('express');
const app = express();

// We set our views ejs
app.set('view engine', 'ejs');
app.set('views', './app/views');

// We set our statics files
app.use(express.static('public'));

// We set our router
const router = require('./app/router');
app.use(router);

// We set our port

const PORT = process.env.PORT

app.listen(PORT, () => {console.log(`Listening on the port ${PORT}.`)})