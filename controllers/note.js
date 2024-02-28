const noteRouter = require('express').Router()
const Note = require('../models/note')
const User = require('../models/user')
const jwt = require('jsonwebtoken')


//authorization uniquement au personne connecter
const getToken = request => {
    const authorization = request.get('authorization')
    if(authorization && authorization.startsWith('Bearer')) {
         return authorization.replace('Bearer ' ,'')
    }
    return null
}


//routes for note
noteRouter.get('/', async (request, response) => {
    const notes = await Note.find({}).populate('user', {name:1})
    response.json(notes)
})

noteRouter.get('/:id', async (request, response) => {
    const notes = await Note.findById(request.params.id)
    response.json(notes)
})

noteRouter.put('/:id', async (request, response) => {
    const body = request.body

    const noteUpdate = {
        title: body.title,
        content: body.content,
        important: body.important
    }
    const users =
     await Note.findByIdAndUpdate(request.params.id, noteUpdate, { new: true })
     response.json(users)
})

noteRouter.delete('/:id', async (request, response) => {
    const users = await Note.findByIdAndDelete(request.params.id)
    response.json(users)
})

noteRouter.post('/', async (request, response) => {
   try {
        const body = request.body

        const decodedToken = jwt.verify(getToken(request), process.env.SECRET_JWT)
        if(!decodedToken.id) {
            return response.status(401).json({error: 'Invalid token'})
        }

        const user = await User.findById(decodedToken.id)

        const sendNote = new Note({
            title: body.title,
            content: body.content,
            day: body.day,
            month: body.month,
            years: body.years,
            important: body.important,
            user: user.id
        })

        const savedNote = await sendNote.save()
        user.notes = user.notes.concat(savedNote._id)
        await user.save()
        response.status(201).json(savedNote)
   } catch {
      return response.status(401).json({error: 'Invalid token'})
   }
})



module.exports = noteRouter