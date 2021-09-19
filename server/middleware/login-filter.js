const expressJwt = require('express-jwt');
const config = require('../config.json');
const jwt = require('jsonwebtoken');


// Extracting the text from the secret's JSON
let { secret } = config;

function authenticateJwtRequestToken() {
    return expressJwt({ secret, algorithms: ["HS256"] }).unless({
        path: [

            '/home',
            '/users/registerfirststep',
            '/users/registerseconedstep',
            '/users/login',
            '/users/auth',
            '/orders/orderscount',
            '/products/quantity',
            '/products/imagefile',

        ]
    });
}

module.exports = authenticateJwtRequestToken;