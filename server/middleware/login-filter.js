const expressJwt = require('express-jwt');
const config = require('../config.json');
const jwt = require('jsonwebtoken');


// Extracting the text from the secret's JSON
let { secret } = config;

function authenticateJwtRequestToken() {
    return expressJwt({ secret, algorithms: ["HS256"] }).unless({
        path: [
            // Get market's status for guests
            '/home',

            // Register
            '/users',

            // Login
            '/users/login',
        ]
    });
}

module.exports = authenticateJwtRequestToken;