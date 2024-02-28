const userRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const Note = require('../models/note')


userRouter.post('/', async (request, response) => {
    const { name,lastName, profession,mail, like, level, age, 
        faculty, password } = request.body

        const saltRounds = 10
        const passwordHash = await bcrypt.hash(password, saltRounds)

        const userSend = new User({
            name,
            lastName,
            profession,
            mail,
            like,
            level,
            age,
            faculty,
            passwordHash
        })

        const savedUser = await userSend.save()
        response.status(200).json(savedUser)
})

userRouter.put('/:id', async (request, response) => {
     const body = request.body

     const userLike = {
        like: body.like
     }

     const updateLike = 
     await User.findByIdAndUpdate(request.params.id, userLike, { new: userLike.like })
     response.json(updateLike)
})


userRouter.get('/', async (request, response) => {
    const users = await User.find({}).populate('notes', {title:1})
    response.json(users)
})  

userRouter.get('/:id', async (request, response) => {
    try {
        const body = request.body;
        const user = await User.findById(body.userId).populate('notes');
        
        // Renvoyer les informations de l'utilisateur, y compris ses notes
        response.json({ user: user, notes: user.notes });
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: 'Erreur lors de la récupération des informations de l\'utilisateur' });
    }
})



module.exports = userRouter