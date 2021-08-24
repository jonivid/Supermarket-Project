const usersLogic = require('../02 - logic/users-logic')
const cacheModule = require('../02 - logic/cache-module.js')
const express = require('express')
const router = express.Router()


// get user by token
router.get('/:tokenInfo', async (req, res, next) => {
    try {
        const tokenInfo = req.params.tokenInfo
        const result = await usersLogic.auth(tokenInfo)
        if (result) res.json(result)

    }
    catch (error) {
        return next(error);

    }
})

//register new user
router.post('/', async (req, res, next) => {
    try {
        const userRegistrationDetails = req.body;
        console.log(userRegistrationDetails);
        const id = await usersLogic.register(userRegistrationDetails)
        res.json(id)

    }
    catch (error) {
        return next(error);
    }
})
//user login
router.post('/login', async (req, res, next) => {
    const userLoginDetails = req.body;
    try {
        let succsessfullyLoginData = await usersLogic.login(userLoginDetails)
        res.json(succsessfullyLoginData)

    } catch (error) {
        return next(error);
    }
})
// Logout
router.post("/logout", async (req, res, next) => {
    let token = req.body;

    try {
        cacheModule.remove(token);
        response.json();

    } catch (error) {
        return next(error);
    }
});


module.exports = router