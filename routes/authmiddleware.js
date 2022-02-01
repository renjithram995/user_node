const jwt = require('jsonwebtoken')
const config = require('../config.json')
const { throwException } = require('../db/dbcommonmethods') 


const userAuth = (req, res, next) => {
    const authToken = req.headers.authorization?.split(' ')[1] || ''
    if (!authToken) {
        return throwException(res, 'User is not authorized"')
    }
    try {
        jwt.verify(authToken, config.secretKey)
    } catch (error) {
        return throwException(res, error.message || 'Issue with token authentication')
    }
    next()
}

module.exports = userAuth