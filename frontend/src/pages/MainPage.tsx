import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { setUser } from '../store/userSlice'

const MainPage: React.FC = () => {
    const dispatch = useAppDispatch();
    
    const user = useAppSelector((state) => state.user.userData)
    console.log(user)
    useEffect(() => {
        console.log(user)
    }, [])
   
    return (

        <div >
            MainPage
        </div>
    )
}

export default MainPage
