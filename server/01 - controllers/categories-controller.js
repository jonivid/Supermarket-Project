const categoriesLogic = require("../02 - logic/categories-logic");
const express = require("express");
const router = express.Router();

router.get("/", async (request, response, next) => {
    try {
        let allCategories = await categoriesLogic.getAllCategories();
        response.json(allCategories);
    }
    catch (error) {
        return next(error);
    }
});


module.exports = router;
