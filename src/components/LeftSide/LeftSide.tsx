
import { useContext } from "react";
import { SeachCountry } from "../searchCountry/SearchCounty";
import { SLeftSide } from "./LeftSide.style"
import { ThemeContext, themes } from "../../contexts/themeContexts";


export const LeftSide = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <SLeftSide style={{backgroundColor:theme === themes.light ? "#666" : "#1E1E1E"}}>
            <div className="leftContainer">
                <SeachCountry/>
            </div>
        </SLeftSide>
    )

}