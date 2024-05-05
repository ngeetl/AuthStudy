const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.accessToken;
        if (!token) return res.sendStatus(401); // 토큰이 없으면 인증되지 않은 상태로 처리

        const tokenData = jwt.verify(token, process.env.ACCESS_SECRET);
        const user = await User.findOne({ "_id": tokenData.id });

        if (!user) return res.sendStatus(403); // 토큰이 유효하지 않으면 403 Forbidden을 반환
        req.user = user; // 인증된 사용자 정보를 요청 객체에 추가하여 다음 미들웨어에서 사용할 수 있도록 함
        next(); // 다음 미들웨어로 이동

    } catch (error) {
        next(error);
    }
};

module.exports = auth;