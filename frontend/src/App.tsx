import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import Header from './components/Header'
import ProtectedRoute from './components/ProtectedRoute'



const App: React.FC = () => {
  // 리덕스로 isAuth 받아옴
  let isAuth: boolean = false;

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />

          {/* 로그인된 유저는 접근 불가능 */}
          <Route element={<ProtectedRoute isAuth={isAuth}/>}>
            <Route path='/signin' element={<SignInPage />} />
            <Route path='/signup' element={<SignUpPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
