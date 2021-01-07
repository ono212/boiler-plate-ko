const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        maxlength: 5
    },
    lastname: {
        type: String,
        maxlength:50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {   //유효성 검사
        type: String
    },
    tokenExp: {  //토큰의 유효기간
        type: Number
    }
})

const User = mongoose.model('User',userSchema)  //스키마는 모델로 감싸준다. (모델이름,스키마)

module.exports = {User}  //이 모델을 다른 파일에서도 쓸 수 있게