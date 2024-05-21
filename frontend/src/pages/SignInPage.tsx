import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { LoginFormInput } from '../model/FromInput';
import axiosInstance from '../utils/axios';
import { setUser } from '../store/userSlice';
import { useAppDispatch } from '../hooks';
import axios from 'axios';

const SignInPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<LoginFormInput>({
    email: '',
    password: '',
  });

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInput>();

  const onSubmit = async ({ email, password }: LoginFormInput): Promise<void> => {
    try {
      const body = { email, password }
      const res = await axiosInstance.post(`/signin`, body)

      dispatch(setUser({
        userData: {
          id: res.data._id,
          email: res.data.email,
          username: res.data.username,
          role: res.data.role
        },
        isAuth: true
      }));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.message);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="p-8 bg-white rounded shadow-md w-1/3">
        <h1 className="text-xl font-bold mb-4 text-center">로그인</h1>
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
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">로그인</button>
      </form>
    </div>
  )
}

export default SignInPage
