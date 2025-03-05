import { Link } from "react-router-dom"
import { SMainHeader } from "./MainHeader.style"
import { useContext, useState } from "react"
import { LeftSide } from "../LeftSide/LeftSide"
import { LigftTheme } from "../UI/LigftTheme/LigftTheme"
import { TRightSide } from "../RightSide/RightSide"
import { ThemeContext, themes } from "../../contexts/themeContexts"

interface TMainHeader extends TRightSide { }

export const MainHeader = ({ homePage, teamPage, playerPage }: TMainHeader) => {
    const {theme} =useContext(ThemeContext)
    const [burgerActiv, setBurgerActiv] = useState(false)
    const [menyDisplay, setMenuDisplay] = useState(false)
    const clickburger = () => {
        setBurgerActiv(!burgerActiv)
        setMenuDisplay(!menyDisplay)
    }

    const [homeColor] = useState(homePage)
    const [teamColor] = useState(teamPage)
    const [plaerColor] = useState(playerPage)
    return (
        <SMainHeader isLight={theme === themes.light}>
            <div className={`burgerInfo ${menyDisplay ? "display" : ""}`}>
                <LeftSide />
            </div>
            <div className="navContainer">
                <div className="navBurger">
                    <div className={`burger ${burgerActiv ? "activ" : ""}`} onClick={() => clickburger()}>
                        <span></span>
                    </div>
                    <Link to={"/main-page"}>
                        <img src="public/img/footballshuru.png" alt="homeLogo" />
                    </Link>
                </div>
                <div className="mainNav">
                    <div className="headerNavPage">
                        <img src={`${homeColor ? 'public/img/homeG.svg' : "public/img/homew.svg"}`} alt="icon" />
                        <a className={`${homeColor ? "navtext" : ''}`} href="/main-page">Домой</a>
                    </div>
                    <div className="headerNavPage">
                        <img src={`${teamColor ? "public/img/shieldG.png" : "public/img/shieldW.png"}`} alt="icon" />
                        <a className={`${teamColor ? "navtext" : ""}`} href="/fav-team">Избранные команды</a>
                    </div>
                    <div className="headerNavPage">
                        <img src={`${plaerColor ? 'public/img/guarG.png' : 'public/img/guarW.png'}`} alt="icon" />
                        <a className={`${plaerColor ? "navtext" : ""}`} href="/fav-player">Избранные игроки</a>
                    </div>
                </div>
                <div className="navProfil">
                    <LigftTheme />
                </div>
            </div>
        </SMainHeader>
    )
}