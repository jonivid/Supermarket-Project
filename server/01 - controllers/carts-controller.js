const cartsLogic = require('../02 - logic/carts-logic');
const express = require('express');
const router = express.Router();
let cacheModule = require("../02 - logic/cache-module");

// Get customer's cart
router.get("/:id", async (req, res, next) => {
    try {
        let customerId = req.params.id
        let customerCart = await cartsLogic.getCustomersCart(customerId);
        res.json(customerCart);
    }
    catch (err) {
        return next(err);
    }
});

// Create new cart
router.post("/", async (req, res, next) => {
    let customerId = req.body.id
    let currentDate = req.body.date
    try {
        let customerCart = await cartsLogic.createCart(customerId, currentDate);
        res.json(customerCart);
    }
    catch (err) {
        return next(err);
    }
});

// Get cart's items
router.get("/items/:cartId", async (req, res, next) => {
    let cartIt = req.params.cartId
    try {
        let cartItems = await cartsLogic.getCartItems(cartIt);
        res.json(cartItems);
    }
    catch (err) {
        return next(err);
    }
});

// Add to cart
router.post("/items", async (req, res, next) => {
    let product = req.body.item;
    let cartId = req.body.id;
    console.log(product, cartId);
    try {
        let newCartItem = await cartsLogic.addToCart(product, cartId);
        res.json(newCartItem);
    }
    catch (err) {
        return next(err);
    }
});

// Update on cart
router.put("/items", async (req, res, next) => {
    let product = req.body.item;
    let cartId = req.body.cartId;
    try {
        let updatedCartItem = await cartsLogic.updateCart(product, cartId);
        res.json(updatedCartItem);
    }
    catch (err) {
        return next(err);
    }
});

// Remove form cart
router.delete("/items/:prodcutId/:cartId", async (req, res, next) => {
    let productId = req.params.prodcutId
    let cartId = req.params.cartId

    try {
        await cartsLogic.deleteFromCart(productId, cartId);
        res.json();
    }
    catch (err) {
        return next(err);
    }
});

// Empty cart
router.delete("/items/:cartId", async (req, res, next) => {
    let cartId = req.params.cartId

    try {
        await cartsLogic.emptyCart(cartId);
        res.json();
    }
    catch (err) {
        return next(err);
    }
});

module.exports = router;
