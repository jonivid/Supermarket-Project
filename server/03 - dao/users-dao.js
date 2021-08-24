const connection = require('./connection-wrapper')

async function getAll() {
    let sql = `SELECT * from users`
    const users = await connection.execute(sql)
    return users
}

async function register(userRegistrationDetails) {
    let sql = `INSERT INTO users ( email, password,first_name, last_name,city,street,id_number)
    VALUES(?,?,?,?,?,?,?);`
    let parameters = [ userRegistrationDetails.email, userRegistrationDetails.password, userRegistrationDetails.firstName,
    userRegistrationDetails.lastName, userRegistrationDetails.city, userRegistrationDetails.street,userRegistrationDetails.idNumber]
    console.log("parameters", parameters);

    let userRegistrationResult = await connection.executeWithParameters(sql, parameters)
    return userRegistrationResult.insertId;
}

async function login(userLoginDetails) {
    let sql = `SELECT id,email, first_name as firstName,last_name as lastName,city,street,is_admin as isAdmin FROM users where email =? and password = ?;`
    let parameters = [userLoginDetails.email, userLoginDetails.password]
    let userLoginResult = await connection.executeWithParameters(sql, parameters)
    if (userLoginResult == null || userLoginResult.length == 0) throw new Error('UNAUTHORIZED login details please try again !!!!!')
    return userLoginResult[0]
    //[0] we write this because sql return an array and we want the first object inside
}

async function deleteUser(userId) {
    let sql = `DELETE from users where id=?`
    let parameters = [userId];
    await connection.executeWithParameters(sql, parameters)
}

async function isUserNameExist(userName) {
    try {
        console.log(userName);
        let sql = `SELECT user_name from users where user_name=?`
        parameters = [userName]
        const userExistResult = await connection.executeWithParameters(
            sql,
            parameters);
        console.log('userExistResult: ' + userExistResult);
        if (userExistResult == null || userExistResult.length === 0) {
            console.log('doesnt exist');
            return false;
        }
        console.log('exist');
        return true;
    }
    catch (err) {
        throw new Error(`validate userName test failed`)
    }

}

module.exports = { register, login, deleteUser, isUserNameExist, getAll }