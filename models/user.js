const mongoose = require('mongoose')
const validator = require('mongoose-unique-validator')

//Schema 
const userSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    profession: String,
    mail: String,
    like: Number,
    level: Number,
    age: Number,
    faculty: String,
    passwordHash: String,
    notes: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note'
    }
    ],
})

userSchema.plugin(validator)

userSchema.set('toJSON', {
    transform: (document, returned) => {
        returned.id = returned._id.toString()
        delete returned._id
        delete returned.__v
        delete returned.passwordHash
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User