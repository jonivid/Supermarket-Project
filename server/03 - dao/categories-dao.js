const connection = require('./connection-wrapper')
let ErrorType = require("../errors/error-type");
let ServerError = require("../errors/server-error");

async function getAllCategories() {


    try {
        let sql = `SELECT * from categories`
        const categories = await connection.execute(sql)
        return categories
    }
    catch (err) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, err);
    }
}


module.exports = { getAllCategories }