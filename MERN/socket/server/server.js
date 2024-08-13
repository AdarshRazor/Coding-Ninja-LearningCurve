const express = require('express');
const PORT = 5000
const {Server} = require('socket.io');
const cors = require('cors')
const http = require('http')

// intializing the server using http
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

// Use socket events
io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('new_msg', (message)=>{
        // broadcast this message to all the clients
        socket.broadcast.emit('broadcast_msg', message)
    })

    socket.on('disconnect', () => {
        console.log('a user disconnected');
    });
})


// Routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Starting the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});