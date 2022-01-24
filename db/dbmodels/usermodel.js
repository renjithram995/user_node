const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        age: Number,
        place: String
    },
    {
        versionKey: false,
        timestamps: { createdAt: 'creation_date', updatedAt: 'modification_date' }
    }
)
const user = mongoose.model('user', userSchema)
module.exports = user