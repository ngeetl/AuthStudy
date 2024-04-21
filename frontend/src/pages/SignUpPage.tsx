import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormInput } from '../model/FromInput';
import axiosInstance from '../utils/axios';

const SignUpPage: React.FC = () => {
    const [formData, setFormData] = useState<FormInput>({
        username: '',
        email: '',
        password: '',
        checkpassword: ''
    });

    // react-hook-form
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormInput>();
    const password = watch('password');

    // input change event
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // submit event 
    const onSubmit = async({username, email, password}: FormInput): void => {
        // console.log('Submitted data:', formData);
        try {
            const body = {
                username,
                email,
                password,
            }
    
            const res = await axiosInstance.post(
                `/signup`,
                body
            )

        } catch (error) {
            
        }

    };


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit(onSubmit)} className="p-8 bg-white rounded shadow-md w-1/3">
                <h1 className="text-xl font-bold mb-4 text-center">회원가입</h1>
                <label className="block mb-2">
                    이름
                    <input {...register("username", { required: "이름을 입력하세요" })} type="text" name="username" value={formData.username} onChange={handleChange} className="mt-1 px-3 py-2 w-full border rounded" />
                    {errors.username && <small className=' text-red-600'>{errors.username.message}</small>}
                </label>
                <label className="block mb-2">
                    이메일
                    <input {...register("email", { required: "이메일을 입력하세요." })} type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 px-3 py-2 w-full border rounded" />
                    {errors.email && <small className=' text-red-600'>{errors.email.message}</small>}

                </label>
                <label className="block mb-4">
                    비밀번호
                    <input {...register("password", { required: "비밀번호를 입력하세요." })} type="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 px-3 py-2 w-full border rounded" />
                    {errors.password && <small className=' text-red-600'>{errors.password.message}</small>}

                </label>
                <label className="block mb-4">
                    비밀번호 확인
                    <input {...register("checkpassword", { required: "확인 비밀번호를 입력해주세요.", validate: value => value === password || "비밀번호가 일치하지 않습니다." })}
                        type="password" name="checkpassword" value={formData.checkpassword} onChange={handleChange} className="mt-1 px-3 py-2 w-full border rounded" />
                    {errors.checkpassword && <small className=' text-red-600'>{errors.checkpassword.message}</small>}
                </label>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">가입하기</button>
            </form>
        </div>
    )
}

export default SignUpPage;
