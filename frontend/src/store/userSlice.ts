import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface userState {
    userData: {
        id: string;
        email: string;
        username: string;
        role: number;
      };
  }

const initialState: userState = {
    userData: {
        id: '',
        email: '',
        username: '',
        role: 0, //role: 0(gest), 1(user)
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.userData = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer