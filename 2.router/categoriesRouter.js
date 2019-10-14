const express = require('express');
const router = express.Router();
const {categoriesController} = require('../1.controller');

// get semua kateori
router.get('/getlistcategories', categoriesController.getListCategories)
// add data
router.post('/addcategories', categoriesController.addCategories)
// edit data
router.put('/editcategories/:id', categoriesController.editCategories)
//delete data
router.delete('/deletecategories/:id', categoriesController.deleteCategories)

module.exports = router;