const express = require('express');
const app = express();
const port = 5000
const connectToMongo = require('./db');

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//Request.json
app.use(express.json());

//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

connectToMongo();

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})