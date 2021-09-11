let connection = require("./connection-wrapper");
let ErrorType = require("../errors/error-type");
let ServerError = require("../errors/server-error");

async function getCustomersCart(userId) {
    let sql = `SELECT 
                    id, 
                    date_created AS 'dateCreated',  
                    status 
                FROM
                    carts
                WHERE
                user_id = ?`;

    try {
        let userCarts = await connection.executeWithParameters(sql, userId);
        let userRecentCart = userCarts[userCarts.length - 1];
        return userRecentCart;

    } catch (err) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, err);
    }
}

async function createCart(userId, currentDate) {
    let sql = `INSERT INTO carts 
               (user_id, date_created) 
               VALUES(?, ?)`;

    let parameters = [userId, currentDate];

    try {
        await connection.executeWithParameters(sql, parameters);
        return getCustomersCart(userId);

    } catch (err) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, err);
    }
}

async function getCartItems(cartId) {
    let sql = `SELECT 
    ci.product_id AS 'id', 
    p.name,
    ci.quantity, p.price AS price,
    p.image AS 'imageUrl', 
    c.name AS 'categoryName',
    ci.total_price AS 'totalPrice' 
    FROM
    cart_items ci
    JOIN
    products p ON p.id = ci.product_id
    JOIN
    categories c on c.id= p.category_id
    WHERE
    cart_id = ?`;

    try {
        return await connection.executeWithParameters(sql, cartId);

    } catch (err) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, err);
    }
}

async function addToCart(product, cartId) {
    let sql = `INSERT INTO cart_items 
               (cart_id, product_id, quantity, total_price) 
               VALUES(?, ?, ?, ?)`;

    let parameters = [cartId, product.id, product.quantity, product.totalPrice];
    console.log(parameters);
    try {
        await connection.executeWithParameters(sql, parameters);
        return product;

    } catch (err) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, err);
    }
}

async function updateCart(product, cartId) {
    let sql = `UPDATE cart_items 
                    SET 
                        quantity = ?,
                        total_price = ?
                    WHERE
                        cart_id = ? AND product_id = ?`;

    let parameters = [product.quantity, product.totalPrice, cartId, product.id];

    try {
        await connection.executeWithParameters(sql, parameters);
        return product;

    } catch (err) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, err);
    }

}

async function deleteFromCart(productId, cartId) {
    let sql = `Delete FROM cart_items WHERE cart_id = ? AND product_id = ?`;
    let parameters = [cartId, productId];

    try {
        await connection.executeWithParameters(sql, parameters);
        return getCartItems(cartId);

    } catch (err) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, err);
    }
}

async function emptyCart(cartId) {
    let sql = `Delete FROM cart_items WHERE cart_id = ?`;

    try {
        await connection.executeWithParameters(sql, cartId);
    } catch (err) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, err);
    }
}


module.exports = {
    getCustomersCart,
    getCartItems,
    createCart,
    addToCart,
    updateCart,
    deleteFromCart,
    emptyCart,
};
