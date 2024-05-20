import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formValue : {
        name: "",
        email: "",
        password: ""
    },
    loginFormValue : {
        email: "",
        password: ""
    },
    isAuthenticated: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        onChangeSignUpReducer: (state, action) => {
            state.formValue[action.payload.name] = action.payload.value
        },

        setSignUpReducer: (state, action) => {
            localStorage.setItem('user', JSON.stringify(state.formValue));
        },

        onChangeLoginReducer: (state, action) => {
            state.loginFormValue[action.payload.name] = action.payload.value
        },

        setLoginReducer: (state, action) => {
            state.isAuthenticated = true;
        },

        logout: (state, action) => {
            localStorage.removeItem('token');
        }
    }
})

export const {onChangeSignUpReducer, setSignUpReducer, onChangeLoginReducer, setLoginReducer, logout} = authSlice.actions;
export default authSlice.reducer;