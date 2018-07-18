const port = process.env.PORT

const express = require('express')

const bodyParser = require('body-parser')

const server = express()

server.use(bodyParser.urlencoded({ extended: true })) //
server.use(bodyParser.json())

server.listen(port, function(){
    console.log(`Backend is running on port ${port}.`)
})

server.use(function(req, res, next){
    res.send('Funcionou')
})