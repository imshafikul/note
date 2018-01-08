// Environment file 
require('dotenv').config();

// Get the packages we need
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

// create our express application
const app = express();

// Use environment variable define PORT
const port = process.env.PORT || 3000;

// use body parser package
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// use passport
app.use(passport.initialize());

// create express route
app.use('/api/v1', require('./app/router'));


// connect mongoose database
mongoose.connect(process.env.DB_URI);

// start the server
app.listen(port, () => {
    console.log("App lis running on port " + port);
});