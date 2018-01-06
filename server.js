// Environment file 
require('dotenv').config();

// Get the packages we need
const express = require('express');

// create our express application
const app = express();

// Use environment variable define PORT
const port = process.env.PORT || 3000;

// create express route
app.use('/api/v1', require('./app/router'));


// start the server
app.listen(port, () => {
    console.log("App lis running on port " + port);
});