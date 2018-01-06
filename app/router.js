// express
const express = require('express');

// create express router
const router = express.Router();


// export router
module.exports = router;


router.get('/', function(req, res){
    res.json({message: "this is home route..."})
});