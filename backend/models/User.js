const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        maxLength: 50
    },
    email: {
        type: String,
        maxLength: 50,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        minLength: 5,
        trim: true,
    },
    role: {
        type: Number,
        default: 0
    }
})

// user의 비밀번호를 암호화하여 저장
userSchema.pre('save', async function(next) {
    let user = this;
    if(user.isModified('password')) {
        const salt = await bcrypt.genSalt(10); // 괄호 안의 숫자는 복잡도
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash
    }

    next();
})

// user 로그인시 입력한 비밀번호와 hash된 비밀번호를 확인
userSchema.methods.comparePassword = async function(plainPassword) {
    let user = this; // 요청한 유저의 데이터베이스 정보
    const match = await bcrypt.compare(plainPassword, user.password); 
    
    return match; // true 또는 false
}



module.exports = mongoose.model("User", userSchema);