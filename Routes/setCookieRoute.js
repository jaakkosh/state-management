'use strict';
const express = require('express');
const router = express.Router();
/*const multer = require('multer');*/
const setCookieController = require('../controllers/setCookieController');


router.get('/', setCookieController.cookie_list_get);

