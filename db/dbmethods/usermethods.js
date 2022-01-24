const userModel = require('../dbmodels/usermodel')
const bcrypt = require('bcrypt')

const getusers = () => {
    return new Promise((resolve, reject) => {
        userModel.find().then((data) => {
            console.log(data)
            resolve(data)
        }).catch((err) => {
            reject(err)
        })
    })
}

const insertUser = (userData) => {
    return new Promise(async (resolve, reject) => {
        if (!userData.name) {
            reject('User without name are not accepted')
        }
        const insertData = {
            name: userData.name,
            age: userData.age,
            place: userData.place,
            username: userData.username,
        }
        if (userData.password) {
            const saltRound = 10;
            insertData.password = await bcrypt.hash(userData.password, saltRound)
        }
        userModel.create(insertData).then((data) => {
            resolve(data._id)
        }).catch((err) => {
            if (err?.code === 11000) {
                reject('Duplicate key: username')
            } else {
                reject(err)
            }
        })
    })
}

const validateLogin = (userData) => {
    return new Promise((resolve, reject) => {
        if (!userData.username) {
            resolve('Invalid username')
            return;
        }
        const filter = {
            username: userData.username
        }
        userModel.findOne(filter).then(async (data) => {
            if (!data || !data.password) {
                resolve('Invalid user credentials')
                return;
            }
            const validUser = await bcrypt.compare(userData.password, data.password)
            resolve(validUser ? 'Login success' : 'Login failed')
        }).catch((err) => {
            reject(err.message || 'Unknown error occured')
        })
    })
}

module.exports = {
    getusers,
    insertUser,
    validateLogin
}