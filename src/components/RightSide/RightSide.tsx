import { useContext, useState } from "react"
import { SRightSide } from "./RightSide.style"
import { LigftTheme } from "../UI/LigftTheme/LigftTheme"
import { useNavigate } from "react-router-dom"
import { ThemeContext, themes } from "../../contexts/themeContexts"

export interface TRightSide {
    homePage: boolean,
    teamPage: boolean,
    playerPage: boolean
}

export const RightSide = ({ homePage, teamPage, playerPage }: TRightSide) => {
    const { theme } = useContext(ThemeContext)
    const navigate = useNavigate()

    const handleclick = () => {
        navigate(`/fav-player`)

    }
    const [homeColor] = useState(homePage)
    const [teamColor] = useState(teamPage)
    const [plaerColor] = useState(playerPage)
    return (
        <SRightSide style={{ backgroundColor: theme === themes.light ? "#666" : "#1E1E1E" }}>
            <div className="rightNav">
                <div className="rightNavCont">
                    <a href="/main-page"> <img src="public/img/footballshuru.png" alt="footballLogo" /></a>
                    <div className="leftNavPage">
                        <span
                            className={homeColor ? "bg" : ""}
                            style={!homeColor ? { backgroundColor: theme === themes.light ? "#666" : "#1E1E1E" } : {}}>
                        </span>
                        <img src={homeColor ? 'public/img/homeG.svg' : "public/img/homew.svg"} alt="icon" />
                        <a
                            className={homeColor ? "navtext" : ''} href="/main-page"
                            style={!homeColor ? { color: theme === themes.light ? "black" : "#fff" } : {}}
                        >Домой</a>
                    </div>
                    <div className="leftNavPage">
                        <span 
                            className={teamColor ? "bg" : ''}
                            style={!teamColor ? { backgroundColor: theme === themes.light ? "#666" : "#1E1E1E" } : {}}    
                        ></span>
                        <img src={`${teamColor ? "public/img/shieldG.png" : "public/img/shieldW.png"}`} alt="icon" />
                        <a
                            className={teamColor ? "navtext" : ""} href="/fav-team"
                            style={!teamColor ? { color: theme === themes.light ? "black" : "#fff" } : {}}
                        >Избранные команды</a>
                    </div>
                    <div onClick={handleclick} className="leftNavPage">
                        <span 
                            className={plaerColor ? "bg" : ''}
                            style={!plaerColor ? { backgroundColor: theme === themes.light ? "#666" : "#1E1E1E" } : {}}
                        ></span>
                        <img src={plaerColor ? 'public/img/guarG.png' : 'public/img/guarW.png'} alt="icon" />
                        <a
                            className={plaerColor ? "navtext" : ""} href="/fav-player"
                            style={!plaerColor ? { color: theme === themes.light ? "black" : "#fff" } : {}}
                        >Избранные игроки</a>
                    </div>
                    <div className="brNav" style={{backgroundColor:theme === themes.light ?"#000": "#fff"}}></div>
                </div>
                <div className="rightLightCont">
                    <LigftTheme />
                </div>
            </div>
            <div className="leftProfil">
                {/* <div className="leftProfil-logo">
                    <img src="public/img/user.png" alt="userPng" />
                    <div>
                        <span>Sultan-Urazaliev</span>
                        <a href="/">{} вфушаовмоым</a>
                    </div>
                </div>
                <div className="ProfImg">
                    <img width="20px" height="20px" src="public/img/log-out.png" alt="UserProfil" />
                </div> */}
            </div>
        </SRightSide>
    )
}