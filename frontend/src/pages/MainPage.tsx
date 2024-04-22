import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../hooks'
import { setUser } from '../store/userSlice'

const MainPage: React.FC = () => {
    const dispatch = useDispatch();

    const user = useAppSelector((state) => state.user.userData)
    console.log(user)
    useEffect(() => {
        dispatch(setUser({ id: '123', email: 'dd', username: 'demoUser', role: 1 }));
        console.log(user)
    }, [])
   
    return (

        <div >
            MainPage
        </div>
    )
}

export default MainPage
