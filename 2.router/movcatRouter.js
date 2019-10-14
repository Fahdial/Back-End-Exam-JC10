const express = require('express');
const router = express.Router();
const {movcatController} = require('../1.controller');

// get mov
router.get('/getlistmovcategory', movcatController.getListMoviCategory);
// add mov
router.post('/addmovcategory', movcatController.addMoviCategory);
// del mov
router.delete('/deletemovcategory', movcatController.deleteMoviCategory);

module.exports = router;