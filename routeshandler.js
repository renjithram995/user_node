const userRoute = require('./routes/userroute')
const loginRoute = require('./routes/loginroute')
const authenticationMiddleware = require('./routes/authmiddleware')

module.exports = (app) => {
    app.use('/validateuser', loginRoute)
    app.use(authenticationMiddleware)
    app.use('/', userRoute)
}