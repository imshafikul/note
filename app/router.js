// express
const express = require('express');

// create express router
const router = express.Router();


// all controller
const noteController = require('./controllers/note.controller');

// export router
module.exports = router;


router.route('/notes')
    .get(noteController.notes)
    .post(noteController.create)


router.route('/notes/:note_id')
    .put(noteController.update)
    .delete(noteController.destroy)