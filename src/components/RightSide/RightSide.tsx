import { useState } from "react"
import { SRightSide } from "./RightSide.style"
import { LigftTheme } from "../UI/LigftTheme/LigftTheme"
import { useNavigate } from "react-router-dom"

export interface TRightSide {
    homePage: boolean,
    teamPage: boolean,
    playerPage: boolean
}

export const RightSide = ({ homePage, teamPage, playerPage }: TRightSide) => {
    const navigate = useNavigate()

    const handleclick = () => {
        navigate(`/fav-player`)

    }
    const [homeColor] = useState(homePage)
    const [teamColor] = useState(teamPage)
    const [plaerColor] = useState(playerPage)
    return (
        <SRightSide>
            <div className="rightNav">
                <div className="rightNavCont">
                    <a href="/main-page"> <img src="public/img/footballshuru.png" alt="footballLogo" /></a>
                    <div className="leftNavPage">
                        <span className={`${homeColor ? "bg" : ""}`}></span>
                        <img src={`${homeColor ? 'public/img/homeG.svg' : "public/img/homew.svg"}`} alt="icon" />
                        <a className={`${homeColor ? "navtext" : ''}`} href="/main-page">Домой</a>
                    </div>
                    <div className="leftNavPage">
                        <span className={`${teamColor ? "bg" : ''}`}></span>
                        <img src={`${teamColor ? "public/img/shieldG.png" : "public/img/shieldW.png"}`} alt="icon" />
                        <a className={`${teamColor ? "navtext" : ""}`} href="/fav-team">Избранные команды</a>
                    </div>
                    <div onClick={handleclick} className="leftNavPage">
                        <span className={`${plaerColor ? "bg" : ''}`}></span>
                        <img src={`${plaerColor ? 'public/img/guarG.png' : 'public/img/guarW.png'}`} alt="icon" />
                        <a className={`${plaerColor ? "navtext" : ""}`} href="/fav-player">Избранные игроки</a>
                    </div>
                    <div className="brNav"></div>
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