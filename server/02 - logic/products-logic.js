let productsDao = require("../03 - dao/products-dao");
let ErrorType = require("../errors/error-type");
let ServerError = require("../errors/server-error");

async function getAllProducts() {
    return await productsDao.getAllProducts();
}
async function addProduct(newProductDetails) {
    if (newProductDetails.name == null || newProductDetails.name == '' ||
        newProductDetails.imageUrl == null || newProductDetails.imageUrl == '' ||
        newProductDetails.price == null || newProductDetails.categoryId == null
    ) {
        throw new ServerError(ErrorType.ALL_FIELDS_REQUIRED);
    }

    if (newProductDetails.name.length > 60) {
        throw new ServerError(ErrorType.NAME_TOO_LONG);
    }
    
    if (newProductDetails.imageUrl.length > 250) {
        throw new ServerError(ErrorType.IMAGE_URL_TOO_LONG);
    }

    return await productsDao.addProduct(newProductDetails);
}

async function updateProduct(productDetails) {
    return await productsDao.updateProduct(productDetails);
}


module.exports = { addProduct, updateProduct,getAllProducts}