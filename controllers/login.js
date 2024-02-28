const loginRouter = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')



// Authentication
loginRouter.post('/', async (request, response) => {
    const { mail, password } = request.body
    const user = await User.findOne({ mail })

    const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(password, user.passwordHash)

    if(!passwordCorrect) {
        return response.status(401).json({error: 'Invalid password !'})
    }

    const userToken = {
        mail: user.mail,
        id: user._id
    }

    const token = jwt.sign(userToken, process.env.SECRET_JWT)
    response.status(200).send({
        token,
        mail: user.mail,
        name: user.name,
        lastName: user.lastName,
        profession: user.profession,
        like: user.like,
        level: user.level,
        age: user.age,
        faculty: user.faculty,
    })
})


module.exports = loginRouter