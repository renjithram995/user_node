const userRoute = require('./routes/userroute')

module.exports = (app) => {
    app.use('/', userRoute)
}