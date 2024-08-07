const express = require('express');
const PORT  =  5000

const app =  express();

app.use(express.static('src/views'))

app.listen(PORT)