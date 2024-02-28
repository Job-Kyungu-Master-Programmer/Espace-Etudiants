const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

//schema
const noteShema = new mongoose.Schema({
    title: String,
    content: String,
    day: Number,
    month: Number,
    years: Number,
    important: Boolean,
    user: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User' 
    }
})

noteShema.set('toJSON', {
    transform: (document, returned) => {
        returned.id = returned._id.toString()
        delete returned._id
        delete returned.__v
    }
})

module.exports = mongoose.model('Note', noteShema)