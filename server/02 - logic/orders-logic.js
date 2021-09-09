const ordersDao = require("../03 - dao/orders-dao");
const cartDao = require("../03 - dao/carts-dao");
const ServerError = require("../errors/server-error");
const ErrorType = require("../errors/error-type");

async function getOrdersShipDates() {
    return await ordersDao.getOrdersShipDates();
}
async function ordersCount() {
    return await ordersDao.ordersCount();
}

async function order(orderDetails) {
    validations(orderDetails);
    await ordersDao.order(orderDetails);
    await cartDao.emptyCart(orderDetails.currentCart.id)
}

function validations(order) {
    if (order.city == null || order.street == null || order.creditCard == null || order.shippingDate == null
        || order.city == '' || order.street == '') {
        throw new ServerError(ErrorType.ALL_FIELDS_REQUIRED);
    }
    if (order.creditCard > 9999 || order.creditCard < 1000) {
        throw new ServerError(ErrorType.INVALID_CREDITCARD);
    }
}


module.exports = {
    getOrdersShipDates,
    order,ordersCount
};
