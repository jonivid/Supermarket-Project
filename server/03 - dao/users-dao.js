const connection = require('./connection-wrapper')
let ErrorType = require("../errors/error-type");
let ServerError = require("../errors/server-error");


async function registerFirstStep(userRegistrationDetails) {

    let sqlEmail = `SELECT * FROM users WHERE email = ?`;
    let paramEmail = [userRegistrationDetails.email];

    let email = await connection.executeWithParameters(sqlEmail, paramEmail);
    if (email[0]) {
        throw new ServerError(ErrorType.EMAIL_ALREADY_EXIST);
    }

    let sqlId = `SELECT * FROM users WHERE id_number = ?`;
    let paramId = [userRegistrationDetails.idNumber];

    let id = await connection.executeWithParameters(sqlId, paramId);
    if (id[0]) {
        throw new ServerError(ErrorType.ID_ALREADY_EXIST);
    }
}
async function registerSeconedStep(userRegistrationDetails) {

    let sql = `INSERT INTO users ( email, password,first_name, last_name,city,street,id_number)
    VALUES(?,?,?,?,?,?,?);`
    let parameters = [userRegistrationDetails.email, userRegistrationDetails.password, userRegistrationDetails.firstName,
    userRegistrationDetails.lastName, userRegistrationDetails.city, userRegistrationDetails.street, userRegistrationDetails.idNumber]

    try {
        await connection.executeWithParameters(sql, parameters)
    }
    catch (err) {
        return userRegistrationResult.insertId;
    }
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
        let sql = `SELECT email from users where email=?`
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
async function isUserIdExist(userId) {
    try {
        let sql = `SELECT id_number from users where id_number=?`
        parameters = [userId]
        const userExistResult = await connection.executeWithParameters(
            sql,
            parameters);
        if (userExistResult == null || userExistResult.length === 0) {
            console.log('doesnt exist');
            return false;
        }
        console.log('exist');
        return true;
    }
    catch (err) {
        throw new ServerError(ErrorType.ID_ALREADY_EXIST);

    }

}

module.exports = { registerFirstStep, registerSeconedStep, login, deleteUser, isUserNameExist, isUserIdExist }