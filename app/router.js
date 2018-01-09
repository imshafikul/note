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
    .post(authController.isAuthenticated, noteController.create)


router.route('/notes/:note_id')
    .put(authController.isAuthenticated, noteController.update)
    .delete(authController.isAuthenticated, noteController.destroy)


router.route('/users')
    .get(authController.isAuthenticated, userController.user)
    .post(userController.create)