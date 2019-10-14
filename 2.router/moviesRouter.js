const express = require('express');
const router = express.Router();
const {moviesController} = require('../1.controller');

// add data mov
router.get('/getlistmovie', moviesController.getListMovie);
// add movie
router.post('/addmovie', moviesController.addMovie);
// edit mov
router.put('/editmovie/:id', moviesController.editMovie);
// del mov
router.delete('/deletemovie/:id', moviesController.deleteMovie);

module.exports = router;