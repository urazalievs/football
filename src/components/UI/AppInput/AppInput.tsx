import { forwardRef } from "react"


interface TAppInput {
    inpType?: "text" | "email" | "tel" | "search" | "password",
    inpName?: string,
    inpValue?: string | number,
    inpPlacehol?: string,
    isError?: boolean,
    errorText?: string,
    inpChange?: (e: any) => void,
}
export const AppInput = forwardRef<HTMLInputElement, TAppInput>(({ inpType, inpChange, inpName, inpValue, inpPlacehol, isError, errorText, ...props }, ref) => {
    return (
        <>
            <input
                type={inpType}
                value={inpValue}
                name={inpName}
                placeholder={inpPlacehol}
                onChange={inpChange}
                ref={ref}
                {...props}
            />
            {isError && <p className="inpError">{errorText}</p>}

        </>
    )
});