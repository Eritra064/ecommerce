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
    }
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
        }
    }
})

export const {onChangeSignUpReducer, setSignUpReducer, onChangeLoginReducer} = authSlice.actions;
export default authSlice.reducer;