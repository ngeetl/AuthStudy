import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from './index'

// state, action 의 타입 정의하기
interface UserState {
    userData: {
        id: string;
        email: string;
        username: string;
        role: number;
      };
    isAuth: boolean;
  }

  interface UserPayload extends UserState {
    // action 타입 정의
  }

const initialState: UserState = {
    userData: {
        id: '',
        email: '',
        username: '',
        role: 0, //role: 0(gest), 1(user)
    },
    isAuth: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserPayload>) => {
            state.userData = action.payload.userData;
            state.isAuth = action.payload.isAuth;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer