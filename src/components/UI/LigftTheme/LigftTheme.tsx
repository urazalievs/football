import { useContext } from "react"
import { SLigftTheme } from "./LigftTheme.style"
import { ThemeContext, themes } from "../../../contexts/themeContexts"



export const LigftTheme = () => {
    const {theme,toogleDarkTheme, toogleLightTheme} = useContext(ThemeContext) 
    return (
        <SLigftTheme isLight={theme === themes.light}>
            <div className="rihghtNavTheme">
                <div onClick={toogleLightTheme} className={`rightTheme ${theme === themes.light ? "lightTheme" : ""}`}>
                    <img src="public/img/sun.png" alt="theme" />
                    <span>Light</span>
                </div>
                <div onClick={toogleDarkTheme} className="rightTheme darkTheme">
                    <img src="public/img/moon.png" alt="theme" />
                    <span>Dark</span>
                </div>
            </div>
        </SLigftTheme>
    )
}