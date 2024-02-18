const express = require("express")
const app = express()
const http = require('http')
const {Server} = require('socket.io')
const { isBooleanObject } = require("util/types")

const server = http.createServer(app)
const io = new Server(server)

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/public/index.html')
})

io.on('connection', (socket) => {
    io.emit('connection', 'a user connected')

    console.log('SERVER - a user connected')
    
    socket.on('disconnect', () => {
        io.emit('disconnection', 'A user has disconnected')
        console.log('user disconnected')
    })

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg)
    })
})

server.listen(3000, () => {
    console.log('listening on *:3000')
})

