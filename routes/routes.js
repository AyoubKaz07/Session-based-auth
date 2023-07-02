const express = require('express');
const router = express.Router();
const auth = require('../middleware/authmiddleware'); 
const loginHandler = require('../controllers/login');
const GetProfile = require('../controllers/profile');



router.post('/login', loginHandler);

// Authenticate session for every sub-request after logging
router.use(auth)


router.get('/profile', GetProfile);


module.exports = router;