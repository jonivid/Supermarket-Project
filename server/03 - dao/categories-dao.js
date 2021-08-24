const connection = require('./connection-wrapper')

async function getAllCategories() {
    let sql = `SELECT * from categories`
    const categories = await connection.execute(sql)
    return categories
}


module.exports = { getAllCategories}