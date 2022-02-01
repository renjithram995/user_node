const successResponse = function (res, data) {
    res.status(200)
    res.send({
        data: data
    })
}

const throwException = (res, errorMessage) => {
    res.status(400)
    res.send({
        statusCode: 400,
        message: errorMessage
    })
}

module.exports = {
    successResponse,
    throwException
}