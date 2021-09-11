const cartsDao = require("../03 - dao/carts-dao");
const cacheModule = require("./cache-module");


async function getCustomersCart(userId) {
    let cart = await cartsDao.getCustomersCart(userId);
    if (cart) {
        cacheModule.set("cartId", cart.id);
    }
    return cart;
}

async function createCart(userId, currentDate) {
    console.log(userId, currentDate);
    await cartsDao.createCart(userId, currentDate);
    let cart = await cartsDao.getCustomersCart(userId);
    cacheModule.set("cartId", cart.id);
    return cart;
}

async function getCartItems() {
    let cartId = cacheModule.get("cartId");
    return await cartsDao.getCartItems(cartId);
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
