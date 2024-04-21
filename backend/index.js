const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
dotenv.config();

// middleware 설정
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173', // 리소스 접근 허용하는 출처
    methods: ['GET', 'POST'],
    credentials: true // Access-Control-Allow-Credentials 헤더를 포함
}))

app.listen(process.env.PORT, () => {
    console.log(`server is on ${process.env.PORT}`);
})