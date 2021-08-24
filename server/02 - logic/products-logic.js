let productsDao = require("../03 - dao/products-dao");

async function getAllProducts() {
    return await productsDao.getAllProducts();
}
async function addProduct(newProductDetails) {
    // await productValidations(newProductDetails);
    return await productsDao.addProduct(newProductDetails);
}

async function updateProduct(productDetails) {
    // await productValidations(productDetails);
    return await productsDao.updateProduct(productDetails);
}


module.exports = { addProduct, updateProduct,getAllProducts}