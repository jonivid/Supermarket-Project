let connection = require("./connection-wrapper");
let ErrorType = require("../errors/error-type");
let ServerError = require("../errors/server-error");


async function getOrdersShipDates() {
    let sql = `SELECT 
                    shipping_date AS 'shipDate' 
                FROM
                    orders
                GROUP BY shipping_date
                HAVING COUNT(*) >= 3`;

    try {
        let busyShipDates = await connection.execute(sql);
        return busyShipDates;
    }
    catch (err) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, err);
    }
}

async function ordersCount() {
    let sql = `SELECT COUNT(id) AS ordersNumber FROM orders`
    try {
        let numOforders = await connection.execute(sql);
        return numOforders;
    }
    catch (err) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, err);
    }
}



async function order(orderDetails) {
    let sql = `INSERT INTO orders 
               (cart_id, user_id, final_price, shipping_city, shipping_street, shipping_date, date_created, credit_card) 
               VALUES(?, ?, ?, ?, ?, ?, ?, ?)`;

    let OrderDate = orderDetails.orderDate.split("T")[0];
    let shippingDate = orderDetails.shippingDate.split("T")[0];

    let parameters = [
        orderDetails.currentCart.id, orderDetails.userId, orderDetails.grandTotal, orderDetails.city, orderDetails.street,
        shippingDate, OrderDate, orderDetails.creditCard
    ];
    try {
        await connection.executeWithParameters(sql, parameters);
        await closeCart(orderDetails.currentCart.id);

    } catch (err) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, err);
    }

}

async function closeCart(cartId) {
    let cartSql = `UPDATE carts SET status = 'close' WHERE (id = ?)`;

    try {
        await connection.executeWithParameters(cartSql, cartId);
    } catch (err) {
        throw new ServerError(ErrorType.GENERAL_ERROR, cartSql, err);
    }
}


module.exports = {
    getOrdersShipDates,
    order, ordersCount
};
