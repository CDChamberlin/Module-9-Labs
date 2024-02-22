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
    
    socket.broadcast.emit('connection', "A new user joined the chat")

    console.log('SERVER - a user connected')
    
    socket.on('disconnect', () => {
        socket.broadcast.emit('disconnected', "A user disconnected from the chat" )
    })

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg)
    })
})

// io.on('disconnection', (socket) => {
//     socket.broadcast.emit("A user disconnected")
// })

server.listen(3000, () => {
    console.log('listening on *:3000')
})

