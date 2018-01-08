const User = require('../models/user');

module.exports = {
    user: user,
    create: create
};


function user(req, res){
    User.find((err, users) => {
        if(err) res.send(err); 
        res.json({message: "All User ", data: users});
    })
}


function create(req, res){
    const user = new User();

    user.username = req.body.username;
    user.password = req.body.password;

    user.save((err, user) => {
        if(err) res.send(err);
        res.status(201);
        res.json({message: "New user created", data: user})
    })
} 