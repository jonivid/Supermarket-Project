const connection = require('./connection-wrapper')
let ErrorType = require("../errors/error-type");
let ServerError = require("../errors/server-error");


async function getAllProducts() {
    let sql = `SELECT p.id, p.name, p.price, p.image AS imageUrl, p.category_id AS 'categoryId', c.name AS 'categoryName' 
    FROM products p JOIN categories c ON c.id = p.category_id`;
    try {
        let allProducts = await connection.execute(sql);
        return allProducts;
    }
    catch (err) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, err);
    }
}

async function addProduct(product) {
    let sql = `INSERT INTO products (name, price, image, category_id) values (?, ?, ?, ?)`;
    let parameters = [product.name, product.price, product.imageUrl, product.categoryId];
    try {
        let response = await connection.executeWithParameters(sql, parameters);
        let newProductId = response.insertId;
    }
    catch (err) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, err);
    }
}
async function updateProduct(product) {
    let sql = `UPDATE products SET name = ?, price = ?, image = ?, category_id = ? WHERE (id = ?)`;
    let parameters = [product.name, product.price, product.imageUrl, product.categoryId, product.id];

    try {
        return await connection.executeWithParameters(sql, parameters);
    } catch (err) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, err);
    }
}

module.exports = {
    addProduct, updateProduct, getAllProducts
};
