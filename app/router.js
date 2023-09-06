// We set express and our router
const express = require('express');
const router = express.Router();

//We require our controller
const mainController = require('./mainController');

// We set our routes
router.get('/', mainController.homePage);

// We export our router
module.exports = router;