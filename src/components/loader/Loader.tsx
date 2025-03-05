import { useContext } from "react"
import { SLoader } from "./Loader.style"
import { ThemeContext, themes } from "../../contexts/themeContexts"


export const Loader = ()=>{
    const {theme} = useContext(ThemeContext)
    return(
        <SLoader isLight={theme === themes.light}>
            <span className="loader"></span>
        </SLoader>
    )
}