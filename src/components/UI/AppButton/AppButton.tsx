import { SAppButton } from "./AppButton.style"

interface TAppButton{
    butType:"button" | 'submit',
    butText: string,
    butClick?: ()=>void,
    isDisabled:boolean,
}

export const AppButton = ({
    butType,
    butText,
    isDisabled,
    butClick,
   
}:TAppButton)=>{
    
    return (
        <SAppButton type={butType} onClick={butClick} disabled={isDisabled}>{butText}</SAppButton>
    )
}