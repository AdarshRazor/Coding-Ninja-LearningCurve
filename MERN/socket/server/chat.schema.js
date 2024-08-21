const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema({
    username: String,
    message: String,
    timestamp: Date
})

const ChatModedl = mongoose.model('Chat', chatSchema)
module.exports = ChatModedl
// Chat is the name of the colllection where the messages will be stored.