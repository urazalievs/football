import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRegisterPayload } from "../store/Api/AuthApi"

interface initialState {
    user: null | IRegisterPayload
}

const initialState: initialState = {
    user: null
}


const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        changeUser(state, action: PayloadAction<IRegisterPayload>) {
            state.user = action.payload;
        }
    }
})

export default userSlice.reducer
export const { changeUser } = userSlice.actions