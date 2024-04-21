import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
    return (
        <div className='w-full flex justify-between px-14 py-6 shadow-md bg-white font-bold text-gray-500'>
            <div><Link to='/'>Home</Link></div>
            <div className='flex'>
                <div className='mr-4'><Link to='/signup'>회원가입</Link></div>
                <div className=''><Link to='/signin'>로그인</Link></div>
            </div>
        </div>
    )
}

export default Header
