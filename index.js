const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jungmin:1234@boilerplate.8tzoh.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected..'))
.catch(err => console.log(err))



app.get('/', (req, res) => res.send('Hello World!난 정민정민'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))