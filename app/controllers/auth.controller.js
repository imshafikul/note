const User = require('../models/user');

const passport = require('passport');

const BasicStrategy = require('passport-http').BasicStrategy;

passport.use(new BasicStrategy(
    function(username, password, callback){
        User.findOne({username:username}, function(err, user){
            if(err) return callback(err); 
            // error found
            if(!user) return callback(null, false);

            // make user password matched
            user.verifyPassword(password, function(err, isMatch){
                if(err) return callback(err);

                // when password didn't match
                if(!isMatch) return callback(null, false);

                // succes
                return callback(null, user);

            })
        })
    }
));


exports.isAuthenticated = passport.authenticate('basic', {session: false});