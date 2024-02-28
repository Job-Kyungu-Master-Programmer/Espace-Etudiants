const express = require('express')
const app = express()
const cors = require('cors')
const config = require('./utils/config')
const path = require('path')
const noteRouter = require('./controllers/note')
const userRouter = require('./controllers/user')
const loginRouter = require('./controllers/login')
const middleware = require('./utils/midlleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

//connexion a DB 
mongoose.connect(config.MONGODB_URL).then(result => {
    logger.info('Connected to Database')
}).catch(error => {
    logger.error('Failed connection')
})


// routes 
app.use(cors())
app.use(express.json())
app.use(express.static('build'))
app.use(middleware.requestLogger)
app.use('/api/notes', noteRouter)
app.use('/api/users', userRouter)
app.use('/api/login', loginRouter)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

module.exports = app