import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { AppButton } from "../../components/UI/AppButton/AppButton"
import { AppInput } from "../../components/UI/AppInput/AppInput"
import { SLoginPage } from "./LoginPage.style"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoginUserMutation } from "../../store/Api/AuthApi";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";


// const RegEmeil = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
// const RegTel  = /^\+?[1-9]\d{0,2}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

const AuthFormSheme = yup.object({
    userEmail: yup
        .string()
        // .matches(RegEmeil, "Введите правильные символы!")
        .required("Обязательное поле!")
        .email("Введите корректный емайл"),
    userPassword: yup
        .string()
        .required("Обязательное поле!")
        .min(4, "Пароль содержит минимум 4 символа!")
});

interface ILoginForm {
    userEmail: string,
    userPassword: string,
}



export const LoginPage = () => {

    const navigate = useNavigate()
    const user = useSelector((state: RootState) => state.user.user);

    const [showPassword, setShowPassword]= useState(true)


    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginForm>({
        resolver: yupResolver(AuthFormSheme),
        mode: "onBlur",
        defaultValues: {
            userEmail: `${user?.email ? user.email : ''}`,
            userPassword: `${user?.password ? user.password : ''}`,
        }
    });
    const [loginUser, { data: userData }] = useLoginUserMutation()
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    const formData: SubmitHandler<ILoginForm> = async data => {
        setErrorMessage(null)
        const payload = { email: data.userEmail, password: data.userPassword }
        const response = await loginUser(payload)
        
        if (response.data?.message) {
            setErrorMessage("Неверный пароль или почта!")
        }
    }


    useEffect(() => {
        if (userData?.user_id) {
            navigate("/main-page")
        }
    }, [userData])
    return (
        <SLoginPage>
            <div className="LoginPageContainer">
                <h1>Автори<span>зация</span></h1>
                <form onSubmit={handleSubmit(formData)}>
                    <Controller
                        control={control}
                        name="userEmail"
                        render={({ field }) => (
                            <AppInput
                                inpPlacehol="Ваша почта"
                                inpType="text"
                                inpValue={field.value}
                                inpChange={field.onChange}
                                errorText={errors.userEmail?.message}
                                isError={Boolean(errors.userEmail)}

                                {...field}

                            />
                        )}
                    />
                    <div className="passwordSee">
                        <Controller
                            control={control}
                            name="userPassword"
                            render={({ field }) => (
                                <AppInput
                                    inpPlacehol="Ваш пароль"
                                    inpType={ showPassword ? 'password' : "text"}
                                    inpValue={field.value}
                                    inpChange={field.onChange}
                                    errorText={errors.userPassword?.message}
                                    isError={Boolean(errors.userPassword)}
                                />
                            )}
                        />
                        <img src="public/img/mys.svg" alt="eye" onClick={()=>setShowPassword(!showPassword)}/>
                    </div>

                    {errorMessage && <p className="inpError">{errorMessage}</p>}
                    <AppButton
                        butText="Войти"
                        butType="submit"
                        isDisabled={!!Object.keys(errors).length}
                    />
                </form>
                <div className="registLink">
                    <Link to={"/regist-page"}>
                        <>Регистрация</>
                    </Link>
                </div>


            </div>
        </SLoginPage>
    )
}