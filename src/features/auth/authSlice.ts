import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../models/user';

export interface LoginPayLoad {
    username: string;
    password: string;
}



interface authState {
    isLogging: boolean;
    logging: boolean;
    currentUser?: User
}


const initialState: authState = {
    isLogging: false,
    logging: false,
    currentUser: undefined,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        login(state, action: PayloadAction<LoginPayLoad>) {
            state.logging = true;
        },
        loginSuccess(state, action: PayloadAction<User>) {
            state.logging = false;
            state.isLogging = true;
            state.currentUser = action.payload
        },
        loginFailed(state, action: PayloadAction<string>) {
            state.logging = false;
        },

        logout(state) {
            state.isLogging = false;
            state.currentUser = undefined;

        }
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
});


export const { login, loginFailed, loginSuccess, logout } = authSlice.actions


const authReducer = authSlice.reducer;

export default authReducer;