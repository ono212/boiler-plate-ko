const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')

const config = require('./config/key');

const {User} = require("./models/User");

//application/x-www-form-urlencoded <- 이런형식으로 된 데이터를 
app.use(bodyParser.urlencoded({extended: true})); //bodyparser가 client에서 오는 정보를 server에서 분석해서 가져올 수 있게 해주는 것

//application/json <- json형식으로 된 데이터를
app.use(bodyParser.json());


const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected..'))
.catch(err => console.log(err))



app.get('/', (req, res) => res.send('Hello World!난 정민정민'))

app.post('/register', (req, res) => {
    //회원가입할 때 필요한 정보들을 client에서 가져오면
    //그것들을 데이터베이스에 넣어준다.

    const user = new User(req.body) //body-parser -> req.body -> user

    user.save((err, doc) => {  //save는 mongodb의 함수
        if(err) return res.json({success: false, err})  //error가 있으면 전달해주는 것!json형식으로
        return res.status(200).json({ //200은 성공했다는 의미
            success: true
        })
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))