const logger = require('./logger')

const requestLogger = (request, response, next) => {
    logger.info('Path :', request.path)
    logger.info('Method:', request.method)
    logger.info('Body:', request.body)
    next()
}

const unknow = (request, response) => {
    response.status(404).send('Page not found !')
}


module.exports = {
    requestLogger,
    unknow
}