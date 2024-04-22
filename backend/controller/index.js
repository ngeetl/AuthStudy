const jwt = require("jsonwebtoken");
const User = require("../models/User")

const signup = async(req, res) => {
    try {
        const { username, email, password } = req.body;

        // 1. db에 이미 유저가 있는지
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use." });
        }

        // 2. 비밀번호 해싱

        // 3. DB 저장
        const userInstance = new User(req.body) //인스턴스 생성
        const user = await userInstance.save() //저장
    
        // 4. 필요한 유저 정보 반환 -> 로그인시
        const userInfo = {
            username: user.username
        }
    
        res.status(200).json(userInfo); 
    } catch (error) {
        res.status(500).json({ message: 'Error signing up the user' });
    }

}

const signin = (req, res) => {
    // 클라이언트에서 유저 정보를 넘기면
    // accessToken을 발급해줌
}



module.exports = {
    signup,
    signin,
};