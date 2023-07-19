const express = require("express");
const AuthController = require('../controllers/auth')

const router = express.Router();

router.post('/register', (request, response) => {
    AuthController.register(request, response);
})

router.post('/login', (request, response) => AuthController.login(request, response));


module.exports = router;