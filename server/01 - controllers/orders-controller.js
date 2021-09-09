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

router.get("/orderscount", async (req, res, next) => {
    try {
        let ordersCount = await ordersLogic.ordersCount();
        res.json(ordersCount);
    }
    catch (err) {
        return next(err);
    }
});


// Make an order
router.post("/", async (req, res, next) => {
    let orderDetails = req.body;
    console.log(orderDetails);

    try {
        await ordersLogic.order(orderDetails);
        res.json();

    } catch (err) {
        return next(err);
    }
});

module.exports = router;
