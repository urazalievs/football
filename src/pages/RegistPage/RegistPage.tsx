import { SRegistPage } from "./RegistPage.style"
import { AppButton } from "../../components/UI/AppButton/AppButton"
import { AppInput } from "../../components/UI/AppInput/AppInput"
import { Link, useNavigate } from "react-router-dom"
import * as yup from "yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IRegisterPayload, useRegisterUserMutation } from "../../store/Api/AuthApi"
import { yupResolver } from "@hookform/resolvers/yup/src/yup.js";
import { useDispatch } from "react-redux";
import { changeUser } from "../../store/userSlice";
import { useState } from "react";


const registerFormSheme = yup.object({
    name: yup
        .string()
        .required("Обьязательное поле!"),
    email: yup
        .string()
        .required("Обьязательное поле!")
        .email("Введите корректный эмайл!"),
    phone_number: yup
        .string()
        .required("Обьязательное поле!"),
        
    password: yup
        .string()
        .required("Обьязательное поле!")
        .min(4, "Минимум 4 символа!"),
    user_city: yup
        .string()
        .required("Обьязательное поле!")
})


export const RegistPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [regierUser] = useRegisterUserMutation()
    const [showPassword, setShowPassword] = useState(true)
    const [errorStatus, setErrorStatus] = useState(false)

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegisterPayload>({
        resolver: yupResolver(registerFormSheme),
        mode: "onBlur",
        defaultValues: {
            name: '',
            email: '',
            phone_number: undefined,
            password: '',
            user_city: '',

        }
    })
    const RegistData: SubmitHandler<IRegisterPayload> = async (data) => {
        const payload = {
            name: data.name,
            email: data.email,
            phone_number: String(data.phone_number),
            password: data.password,
            user_city: data.user_city,
        }
        try {
            const responce = await regierUser(payload).unwrap()
            if (responce.status === 1) {
                dispatch(changeUser(payload))
                navigate('/')
            }else{
                setErrorStatus(true)
            }
        } catch (error) {
            console.error("Ошибка " + error);

        }
            
    }

    return (
        <SRegistPage>
            <div className="LoginPageContainer">
                <h1>Регистрация</h1>
                <form onSubmit={handleSubmit(RegistData)}>
                    <Controller
                        control={control}
                        name="name"
                        render={({ field }) => (
                            <AppInput
                                inpPlacehol="Ваше имя"
                                inpType="text"
                                inpValue={field.value}
                                inpChange={field.onChange}
                                errorText={errors.name?.message}
                                isError={Boolean(errors.name)}

                                {...field}

                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="email"
                        render={({ field }) => (
                            <AppInput
                                inpPlacehol="Ваша почта"
                                inpType="email"
                                inpValue={field.value}
                                inpChange={field.onChange}
                                errorText={errors.email?.message}
                                isError={Boolean(errors.email)}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="phone_number"
                        render={({ field }) => (
                            <AppInput
                                inpPlacehol="Ваш номер"
                                inpType="tel"
                                inpValue={field.value}
                                inpChange={field.onChange}
                                errorText={errors.phone_number?.message}
                                isError={Boolean(errors.phone_number)}

                            />
                        )}
                    />
                    <div className="passwordSee">
                        <Controller
                            control={control}
                            name="password"
                            render={({ field }) => (
                                <AppInput
                                    inpPlacehol="Ваш пароль"
                                    inpType={showPassword ? "password" : "text"}
                                    inpValue={field.value}
                                    inpChange={field.onChange}
                                    errorText={errors.password?.message}
                                    isError={Boolean(errors.password)}

                                />
                            )}
                        />
                        <img src="public/img/mys.svg" alt="eye" onClick={()=>setShowPassword(!showPassword)}/>
                    </div>

                    <Controller
                        control={control}
                        name="user_city"
                        render={({ field }) => (
                            <AppInput
                                inpPlacehol="Ваш Город"
                                inpType="text"
                                inpValue={field.value}
                                inpChange={field.onChange}
                                errorText={errors.user_city?.message}
                                isError={Boolean(errors.user_city)}

                            />
                        )}
                    />
                    {errorStatus ? <p style={{color:"red"}}>Вы ввели непривильный емайл!</p> : null}
                    <AppButton
                        butText="Регистрация"
                        butType="submit"
                        isDisabled={false}
                    />
                </form>
                <div className="registLink">
                    <Link to={"/"}>
                        <>Назад в авторизацию</>
                    </Link>
                </div>
            </div>
        </SRegistPage>
    )
}