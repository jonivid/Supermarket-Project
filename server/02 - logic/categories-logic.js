const categoriesDao = require('../03 - dao/categories-dao')


async function getAllCategories() {
    const categories = await categoriesDao.getAllCategories()
    return (categories)
}


module.exports = { getAllCategories}