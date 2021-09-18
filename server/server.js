const express = require("express");
const cors = require('cors');
const server = express();
const port = process.env.port || 3001;

const loginFilter = require('./middleware/login-filter')
const errorHandler =require('./errors/error-handler')


const users = require('./01 - controllers/users-controller')
const categories = require('./01 - controllers/categories-controller')
const products = require('./01 - controllers/products-controller')
const carts = require('./01 - controllers/carts-controller')
const orders = require('./01 - controllers/orders-controller')



server.use(express.json());
server.use(cors({ origin: 'http://localhost:4200' }));

server.use(loginFilter())

server.use('/users', users)
server.use('/categories', categories)
server.use('/products', products)
server.use('/carts', carts)
server.use('/orders', orders)

server.use(errorHandler);

server.listen(port, () =>
    console.log(`Listening on http://localhost:${port}`)
);