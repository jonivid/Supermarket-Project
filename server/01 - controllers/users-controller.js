const usersLogic = require('../02 - logic/users-logic')
const cacheModule = require('../02 - logic/cache-module.js')
const express = require('express')
const router = express.Router()

router.get('/auth', async (req, res, next) => {
    try {
        let userDetails = cacheModule.extractUserDataFromCache(req)
        res.json(userDetails)

    }
    catch (error) {
        return next(error);
    }
})


// Register first step
router.post('/registerfirststep', async (req, res, next) => {
    try {
        const userRegistrationDetails = req.body;
        await usersLogic.registerFirstStep(userRegistrationDetails)
        res.json()
    }
    catch (error) {
        return next(error);
    }
})

// Register seconed step
router.post('/registerseconedstep', async (req, res, next) => {
    try {
        const userRegistrationDetails = req.body;
        await usersLogic.registerSeconedStep(userRegistrationDetails)
        res.json()
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
        console.log(error);
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