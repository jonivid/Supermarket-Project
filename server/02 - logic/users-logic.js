const usersDao = require('../03 - dao/users-dao')
const crypto = require("crypto");
let cacheModule = require("./cache-module");
const jwt = require('jsonwebtoken');
const config = require('../config.json');
const saltRight = "asdasdasdas";
const saltLeft = "--mnlcfdsfsds;@!$ ";
const ServerError = require("../errors/server-error");
const ErrorType = require("../errors/error-type");


async function registerFirstStep(userRegistrationDetails) {
    validateUserDetails(userRegistrationDetails)
    if (userRegistrationDetails.idNumber == null || userRegistrationDetails.idNumber == '') {
        throw new ServerError(ErrorType.ID_FIELD_MISSING);
    }
    if (userRegistrationDetails.confirmPassword != userRegistrationDetails.password) {
        throw new ServerError(ErrorType.PASSWORDS_DIDNT_MATCH);
    }
    return await usersDao.registerFirstStep(userRegistrationDetails);
}

async function registerSeconedStep(userRegistrationDetails) {
        if (userRegistrationDetails.firstName == null || userRegistrationDetails.firstName == '' || 
        userRegistrationDetails.lastName == null || userRegistrationDetails.lastName == '' ||
        userRegistrationDetails.city == null || userRegistrationDetails.city == '' ||
        userRegistrationDetails.street == null || userRegistrationDetails.street == '' ) {
            throw new ServerError(ErrorType.ALL_FIELDS_REQUIRED);
        }
    
        
        userRegistrationDetails.password = crypto.createHash("md5").update(saltLeft + userRegistrationDetails.password + saltRight).digest("hex");
        return await usersDao.registerSeconedStep(userRegistrationDetails);
    // const id = await usersDao.register(userRegistrationDetails)
    // return id

}

async function login(userLoginDetails) {
    userLoginDetails.password = crypto.createHash("md5").update(saltLeft + userLoginDetails.password + saltRight).digest("hex");
    let userData = await usersDao.login(userLoginDetails)
    if (userData.isAdmin === 1) {
        userData.isAdmin = "ADMIN"
    }
    else {
        userData.isAdmin = "CUSTOMER"
    }
    let saltedUserName = saltLeft + userLoginDetails.userName + saltRight
    const jwtToken = jwt.sign({ sub: saltedUserName }, config.secret, { expiresIn: '30m' })
    cacheModule.set(jwtToken, userData)//cache setter 
    let successfullLoginResponse = { token: jwtToken, isAdmin: userData.isAdmin, userDetails: userData };
    return successfullLoginResponse;
}

async function auth(tokenInfo) {
    let userData = cacheModule.extractUserDataFromCache(tokenInfo)
    return (userData)
}
async function deleteUser(userId) {
    await usersDao.deleteUser(userId);

}


function validateUserDetails(userDetails){
    if (userDetails.email == null || userDetails.email == '') {
        throw new ServerError(ErrorType.EMAIL_FIELD_MISSING);
    }
    if (userDetails.password == null || userDetails.password == '') {
        throw new ServerError(ErrorType.PASSWORD_FIELD_MISSING);
    }
}



// async function validateUserDetails(userRegistrationDetails) {
//     if (userRegistrationDetails.email == "" || userRegistrationDetails.email == null ) {
//         throw new Error(`userName is null`)
//     }
//     if (!isEmailFormat(userRegistrationDetails.email)) {
//         throw new Error('UserName is not in email format')
//     }
//     if (userRegistrationDetails.password == null) {
//         throw new Error(`userName is null`)
//     }
//     if (userRegistrationDetails.password.length < 6) {
//         throw new Error(`password too short`)
//     }
//     if (userRegistrationDetails.password.length > 12) {
//         throw new Error(`password too long`)
//     }
//     if (await usersDao.isUserNameExist(userRegistrationDetails.email)) {
//         throw new Error(`userName exists`)
//     }
//     if (await usersDao.isUserIdExist(userRegistrationDetails.idNumber)) {
//         throw new ServerError(ErrorType.ID_ALREADY_EXIST);

//     }
// }
// function isEmailFormat(email) {
//     const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
//     if (emailRegexp.test(email)) {
//         return true
//     } else {
//         return false
//     }
// }


module.exports = { registerFirstStep,registerSeconedStep, login, deleteUser, auth }

