// 폼 입력을 위한 타입 정의
export interface FormInput {
    username: string;
    email: string;
    password: string;
    checkpassword: string;
}

// 로그인 폼 타입 정의
export interface LoginFormInput extends Pick<FormInput, 'email' | 'password'> {
}