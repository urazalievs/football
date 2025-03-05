import { useContext, useEffect, useState } from "react";
import { SModalCountry } from "./ModalCountry.style"
import { AppButton } from "../UI/AppButton/AppButton";
import { ThemeContext, themes } from "../../contexts/themeContexts";


export const ModalCountry = () => {
    const {theme} =useContext(ThemeContext)
    const [favcountry, stFavCountry] =useState<any>(null)
    const [displayModal, setDisplayModal] = useState(false)

    useEffect(()=>{
        const localStorCount = localStorage.getItem("favCountry");
        if(localStorCount){
            stFavCountry(JSON.parse(localStorCount))
        }
    },[])
    const handleClick = ()=>{
        setDisplayModal(!displayModal)
    }
    
    return (
        <SModalCountry isLight={theme === themes.light} style={{display:`${displayModal ? "none": 'block' }`}}>
            {favcountry && <div className="mdalCountryCont">
                <img src={favcountry.flag || "public/img/allF.jpg"} alt="flag"/>
                <h2>{favcountry.name}</h2>
                <p>К сожелению у данной API мало информайии!</p>
                <AppButton
                    butText="Закрыть"
                    butType="button"
                    butClick={handleClick}
                    isDisabled={false}
                />
            </div>}
        </SModalCountry>
    )
}