const express = require('express');
const PORT = 3000
const path = require('path');
const {Server} = require('socket.io');
const cors = require('cors')
const http = require('http');
const connectToMongo = require('./db');
const ChatModedl = require('./chat.schema');

// intializing the server using http
const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

// Middleware to serve static files
app.use(express.static(path.join(__dirname)));

// Use socket events
io.on('connection', (socket) => {
    console.log('Connection established');
    
    socket.on('join', (user)=> {
        // broadcast this username to all the clients
        socket.username = user
    })

    // load old messages
    ChatModedl.find().limit(50).then(messages => {
        socket.emit('load_messages', messages)
    })

    socket.on('new_msg', (message)=>{

        let userMessage = {
            username: socket.username,
            message: message,
            timestamp: new Date().toDateString()
        }

        // before broadcast save the message
        const newChat = new ChatModedl({
            username: socket.username,
            message: message,
            timestamp: new Date().toDateString()
        })

        newChat.save()


        // broadcast this message to all the clients
        socket.broadcast.emit('broadcast_msg', userMessage)
    })

    socket.on('disconnect', () => {
        console.log('Connection disconnected');
    });
})


// Routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Routes
app.get('/chat', (req, res) => {
    res.sendFile(path.join(__dirname, 'client.html'));
});

// Starting the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectToMongo()
});