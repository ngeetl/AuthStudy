import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks';
import { selectUser, setUser } from '../store/userSlice';
import axiosInstance from '../utils/axios';

const Header: React.FC = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser);

    const logoutHandler = async () => {
        try {
            await axiosInstance.get(`/logout`);
            dispatch(setUser({
                userData: {
                    id: "",
                    email: "",
                    username: "",
                    role: 0,
                  }, 
                  isAuth: false
            }))

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className='w-full flex justify-between px-14 py-6 shadow-md bg-white font-bold text-gray-500'>
            <div><Link to='/'>Home</Link></div>
            <div className='flex'>
                {user.isAuth ?
                    <div onClick={logoutHandler}><Link to='/logout'>로그아웃</Link></div> :
                    <>
                        <div className='mr-4'><Link to='/signup'>회원가입</Link></div>
                        <div className=''><Link to='/signin'>로그인</Link></div>
                    </>}

            </div>
        </div>
    )
}

export default Header
