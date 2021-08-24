let cacheModule = require("../02 - logic/cache-module");
const ordersLogic = require('../02 - logic/orders-logic');
const express = require('express');
const router = express.Router();

// Get all busy ship dates
router.get("/", async (req, res, next) => {
    try {
        let allShipDates = await ordersLogic.getOrdersShipDates();
        res.json(allShipDates);
    }
    catch (err) {
        return next(err);
    }
});


// Make an order
router.post("/", async (req, res, next) => {    
    let orderDetails = req.body;
    let cartId = cacheModule.get("cartId");
    let customerId = cacheModule.extractUserDataFromCache(req).id;

    try {
        await ordersLogic.order(orderDetails, cartId, customerId);
        res.json();

    } catch (err) {
        return next(err);
    }
});

module.exports = router;
