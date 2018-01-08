// express
const express = require('express');

// create express router
const router = express.Router();


// all controller
const noteController = require('./controllers/note.controller');
const userController = require('./controllers/user.controller');
const authController = require('./controllers/auth.controller');

// export router
module.exports = router;


router.route('/notes')
    .get(authController.isAuthenticated, noteController.notes)
    .post(noteController.create)


router.route('/notes/:note_id')
    .put(noteController.update)
    .delete(noteController.destroy)


router.route('/users')
    .get(userController.user)
    .post(userController.create)