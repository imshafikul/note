const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});


UserSchema.pre('save', function(callback){
    const user = this;

    // break if password hasn't changed yet
    if(!user.isModified('password')) return callback();

    // password changed so we need to hash it
    bcrypt.genSalt(5, (err,salt) => {
        if(err) return callback(err);

        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if(err) return callback(err);

            user.password = hash;
            callback();
        })

    });

});

// password verifiy
UserSchema.methods.verifyPassword = function(password, callback) {
    bcrypt.compare(password, this.password, function(err, data){
        if(err) return callback(err);

        callback(null, data);
    })
}


UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;