const cartsLogic = require('../02 - logic/carts-logic');
const express = require('express');
const router = express.Router();
let cacheModule = require("../02 - logic/cache-module");

// Get customer's cart
router.get("/", async (req, res, next) => {
    try {
        let userId = cacheModule.extractUserDataFromCache(req).id;
        let customerCart = await cartsLogic.getCustomersCart(userId);
        res.json(customerCart);
    }
    catch (err) {
        return next(err);
    }
});

// Create new cart
router.post("/", async (req, res, next) => {
    let currentDate = req.body.date
    try {
        let userId = cacheModule.extractUserDataFromCache(req).id;
        let customerCart = await cartsLogic.createCart(userId, currentDate);
        res.json(customerCart);
    }
    catch (err) {
        return next(err);
    }
});

// Get cart's items
router.get("/items/", async (req, res, next) => {
    try {
        let cartItems = await cartsLogic.getCartItems();
        res.json(cartItems);
    }
    catch (err) {
        return next(err);
    }
});

// Add to cart
router.post("/items", async (req, res, next) => {
    let product = req.body.item;
    let cartId =cacheModule.get("cartId");
    try {
        let newCartItem = await cartsLogic.addToCart(product, cartId);
        res.json(newCartItem);
    }
    catch (err) {
        return next(err);
    }
});

// Update item inside cart
router.put("/items", async (req, res, next) => {
    let product = req.body.item;
    let cartId = cacheModule.get("cartId");
    try {
        let updatedCartItem = await cartsLogic.updateCart(product, cartId);
        res.json(updatedCartItem);
    }
    catch (err) {
        return next(err);
    }
});

// Remove item inside cart
router.delete("/items/:prodcutId", async (req, res, next) => {
    let productId = req.params.prodcutId
    let cartId = cacheModule.get("cartId");

    try {
        await cartsLogic.deleteFromCart(productId, cartId);
        res.json();
    }
    catch (err) {
        return next(err);
    }
});

// Empty cart
router.delete("/items", async (req, res, next) => {
    let cartId = cacheModule.get("cartId");

    try {
        await cartsLogic.emptyCart(cartId);
        res.json();
    }
    catch (err) {
        return next(err);
    }
});

module.exports = router;
