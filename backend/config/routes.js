const express = require('express')

module.exports = function(server){

    const router = express.Router()

    server.use('/api', router)

    const feed = require('../api/feed/feedService.js')

    feed.register(router, '/feeds')
    
}