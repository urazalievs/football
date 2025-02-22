import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

export interface IRegisterPayload {
    name: string,
    email: string,
    phone_number: string,
    password: string,
    user_city: string
}
interface IRegisterResponse {
    status: number,
    user_id: string,
    message:string,
}
interface ILoginPayload {
    email: string,
    password: string
}
interface ILoginResponse extends IRegisterResponse{}


export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        registerUser: builder.mutation<IRegisterResponse, IRegisterPayload>({
            query: (payload) => ({
                url: '/registration',
                method: "POST",
                body: payload   
            })
        }),
        loginUser: builder.mutation<ILoginResponse, ILoginPayload>({
            query: (payload) => ({
                url: "/login",
                method: "POST",
                body: payload
            })
        }),
    })
})

export const {useLoginUserMutation,useRegisterUserMutation}= authApi