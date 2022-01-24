const express = require('express');
const router = express.Router();
const { getusers, insertUser, validateLogin } = require("../db/dbmethods/usermethods")
const { successResponse, throwException } = require("../db/dbcommonmethods")

router.get('/users', (req, res) => {

    getusers().then((a) => {
        successResponse(res, a)
    }).catch((err) => {
        throwException(res, err)
    })
})

router.post('/users', (req, res) => {

    insertUser(req.body).then((a) => {
        successResponse(res, a)
    }).catch((err) => {
        throwException(res, err)
    })
})

router.post('/validateuser', (req, res) => {

    validateLogin(req.body).then((a) => {
        successResponse(res, a)
    }).catch((err) => {
        throwException(res, err)
    })
})
module.exports = router