const express = require('express');
const router = express.Router();
const { validateLogin } = require("../db/dbmethods/usermethods")
const { successResponse, throwException } = require("../db/dbcommonmethods")

router.post('/', (req, res) => {
    validateLogin(req.body).then((a) => {
        successResponse(res, a)
    }).catch((err) => {
        throwException(res, err)
    })
})

module.exports = router