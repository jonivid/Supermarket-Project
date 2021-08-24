const cartsDao = require("../03 - dao/carts-dao");
const cacheModule = require("./cache-module");


async function getCustomersCart(customerId) {
    let cart = await cartsDao.getCustomersCart(customerId);
    if (cart) {
        cacheModule.set("cartId", cart.id);
    }
    return cart;
}

async function createCart(customerId, currentDate) {
    await cartsDao.createCart(customerId, currentDate);
    let cart = await cartsDao.getCustomersCart(customerId);
    cacheModule.set("cartId", cart.id);
    return cart;
}

async function getCartItems() {
    let cartId = cacheModule.get("cartId");
    if (cartId) {
        return await cartsDao.getCartItems(cartId);
    }
}

async function addToCart(product, cartId) {
    return await cartsDao.addToCart(product, cartId);
}

async function updateCart(product, cartId) {
    return await cartsDao.updateCart(product, cartId);
}

async function deleteFromCart(productId, cartId) {
    return await cartsDao.deleteFromCart(productId, cartId);
}

async function emptyCart(cartId) {
    await cartsDao.emptyCart(cartId);
}


module.exports = {
    getCustomersCart,
    createCart,
    addToCart,
    updateCart,
    deleteFromCart,
    emptyCart,
    getCartItems,
};
