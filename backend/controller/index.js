const jwt = require("jsonwebtoken");
const User = require("../models/User")

const signup = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        // 1. db에 이미 유저가 있는지
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: "이미 존재한는 이메일" });
        }

        // 2. 비밀번호 해싱 -> userSchema에서 미들웨어 이용

        // 3. DB 저장
        const userInstance = new User(req.body) //인스턴스 생성
        const user = await userInstance.save() //저장

        // 4. 성공 메세지 응답
        res.sendStatus(200);
    } catch (error) {
        res.status(500).json(error);
    }

}

const signin = async (req, res) => {
    try {
        // 클라이언트에서 로그인하는 유저 정보를 넘기면
        const { email, password } = req.body;
    
        // 1. db에 일치하는 email이 있는지 확인
        const user = await User.findOne({ email: email });
    
        if(!user) {
            return res.status(400).json({ message: "존재하지 않는 이메일" });
        }
    
        // 2. db의 비밀번호와 클라이언트에서 받은 user의 비밀번호 비교
        const isMatch = await user.comparePassword(password);

        if(!isMatch) return res.status(400).json({ message: "비밀번호가 일치하지 않습니다."})

        // 3. accessToken/RefreshToken 발급
        const payload = {
            id: user._id.toHexString(),
            username: user.username,
            email: user.email
        };
        const options = {
            expiresIn: '1m',
            issuer: 'kai'
        };

        const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET, options);
        const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET, {...options, expiresIn: '24h'});
    
        // 4. cookie로 token 전송
        res.cookie("accessToken", accessToken, {
            secure: false,
            httpOnly: true //자바스크,립트에서 접근 불가
        });
        res.cookie("refreshToken", refreshToken, {
            secure: false,
            httpOnly: true //자바스크,립트에서 접근 불가
        });

        // 5. 응답 
        return res.status(200).json(user);
 
    } catch (error) {
        return res.status(500).json(error);
    }
}

// 후에 admin라우팅 요청이 오면
// 1. 토큰이 유효한지 확인
// 2. payload에 유저 정보로 isAdmin 확인



module.exports = {
    signup,
    signin,
};