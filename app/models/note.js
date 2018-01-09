const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// note schema
const noteSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: String,
        required: true,
        trim: true
    },
    user_id: {
        type: String
    }
});

// Note Model
const Note = mongoose.model('note', noteSchema);

module.exports = Note;