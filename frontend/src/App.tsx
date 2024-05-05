import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import Header from './components/Header'
import ProtectedRoute from './components/ProtectedRoute'
import { useEffect, useState } from 'react'
import { useAppSelector } from './hooks'
import { selectUser } from './store/userSlice'
import BestMenu from './components/BestMenu'
import Mypage from './pages/Mypage'


const App: React.FC = () => {
  // 리덕스로 isAuth 받아옴
  const user = useAppSelector(selectUser);

  // useEffect(() => {
  //   isAuth = user.isAuth;
  // }, [ user ]);

  return (
    <>
      {/* <BrowserRouter> */}
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/test' element={<BestMenu/>} />
          <Route path='/mypage' element={<Mypage/>} />

          {/* 로그인된 유저는 접근 불가능 */}
          <Route element={<ProtectedRoute isAuth={user.isAuth}/>}>
            <Route path='/signin' element={<SignInPage />} />
            <Route path='/signup' element={<SignUpPage />} />
          </Route>
        </Routes>
      {/* </BrowserRouter> */}
    </>
  )
}

export default App
