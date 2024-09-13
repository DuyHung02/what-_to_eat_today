import {IAuthState} from "../types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: IAuthState = {
    token: '',
    user: {},
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthState: (state, action: PayloadAction<IAuthState>) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        clearAuthState: state => {
            state.token = '';
            state.user = {};
        }
    }
})

export const {setAuthState, clearAuthState} = authSlice.actions;
export const authReducer = authSlice.reducer;