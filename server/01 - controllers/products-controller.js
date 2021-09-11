const express = require("express");
const router = express.Router();
const productsLogic = require('../02 - logic/products-logic')

// Get all products
router.get("/", async (req, res, next) => {
    try {
        const allProducts = await productsLogic.getAllProducts();
        res.json(allProducts);
    }
    catch (error) {
        return next(error);
    }
});

// Add new product
router.post("/", async (req, res, next) => {
    const newProductDetails = req.body;
    try {
        const newProduct = await productsLogic.addProduct(newProductDetails);
        res.json(newProduct);
    }
    catch (error) {
        return next(error);
    }
});

// Edit product
router.put("/", async (req, res, next) => {
    const productDetails = req.body;
    console.log(productDetails);
    try {
        const updatedProduct = await productsLogic.updateProduct(productDetails);
        res.json(updatedProduct.info);
    }
    catch (error) {
        return next(error);
    }
});

module.exports = router;
