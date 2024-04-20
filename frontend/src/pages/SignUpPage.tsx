import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

// 폼 입력을 위한 타입 정의
interface IFormInput {
    username: string;
    email: string;
    password: string;
    checkpassword: string;
}

const SignUpPage: React.FC = () => {
    const [formData, setFormData] = useState<IFormInput>({
        username: '',
        email: '',
        password: '',
        checkpassword: ''
      });

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

    const onSubmit = (formData: IFormInput): void => {
        console.log('Submitted data:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <form onSubmit={handleSubmit(onSubmit)} className="p-8 bg-white rounded shadow-md w-1/3">
          <h1 className="text-xl font-bold mb-4 text-center">로그인</h1>
          <label className="block mb-2">
            이름
            <input {...register("username", { required: true })} type="text" name="username" value={formData.username} onChange={handleChange} className="mt-1 px-3 py-2 w-full border rounded" />
            {errors.username  && <small className=' text-red-600'>이름을 입력하세요</small>}
          </label>
          <label className="block mb-2">
            이메일
            <input {...register("email", { required: true })} type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 px-3 py-2 w-full border rounded" />
            {errors.email  && <small className=' text-red-600'>이메일을 입력하세요</small>}

          </label>
          <label className="block mb-4">
            비밀번호
            <input {...register("password", { required: true })} type="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 px-3 py-2 w-full border rounded" />
            {errors.password  && <small className=' text-red-600'>비밀번호를 입력하세요</small>}

          </label>
          <label className="block mb-4">
            비밀번호 확인
            <input {...register("checkpassword", { required: true })} type="password" name="checkpassword" value={formData.checkpassword} onChange={handleChange} className="mt-1 px-3 py-2 w-full border rounded" />
            {errors.checkpassword  && <small className=' text-red-600'>확인 비밀번호를 입력하세요</small>}

          </label>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Sign Up</button>
        </form>
      </div>
    )
}

export default SignUpPage;
