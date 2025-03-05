import { useContext, useState } from "react"
import { MainHeader } from "../../components/MainHeader/MainHeader"
import { RightSide } from "../../components/RightSide/RightSide"
import { SFavTeam } from "./FavTeam.style"
import { ModalTeam } from "../../components/ModalTeam/ModalTeam"
import { ThemeContext, themes } from "../../contexts/themeContexts"


export const FavTeam = () => {
    const {theme} =useContext(ThemeContext)
    const [stateImg] = useState(true)
    const [favTeam, setFavTeam] = useState<any[]>(() => {
        const favTeamLocal = localStorage.getItem("favTeam");
        return favTeamLocal ? JSON.parse(favTeamLocal) : [];
    })
    
    const [displayModal,setDisplayModal] = useState<boolean>(false)
    const [idteamMap, setIdtamMap] = useState<any>()

    const toogleFav = (team: any) => {
        const isTeam = favTeam.filter((e) => e.id !== team.id)
        setFavTeam(isTeam)
        localStorage.setItem("favTeam", JSON.stringify(isTeam))
    }
    const getTeamId = (teamId:any)=>{
        setIdtamMap(teamId)
        setDisplayModal(true)
    }
    const closeModal= ()=> {
        setDisplayModal(false)
    }

    return (
        <SFavTeam isLight= {theme === themes.light}>
            <MainHeader
                homePage={false}
                playerPage={false}
                teamPage={true}
            />
            <div className="favplaerCont">
                <aside>
                    <RightSide
                        homePage={false}
                        playerPage={false}
                        teamPage
                    />
                </aside>
                <main>
                    <div className="mainConatainer">
                        <div className="teamContCard">
                            <ModalTeam closeModal={closeModal}  errorIdD={displayModal} teamId={idteamMap}/>
                            {favTeam?.map((elem: any) => (
                                <div key={elem.id} className="teamCard">
                                    <img onClick={()=>getTeamId(elem.id)} src={elem.crest} alt="flag" />
                                    <span onClick={()=>getTeamId(elem.id)}>{elem.name}</span>
                                    <div className="teamCardFav">
                                        <a href={elem.website}>Сайт</a>
                                        <img
                                            src={`${stateImg ? "public/img/StarG.svg" : "public/img/StarW.svg"}`} alt="favorit"
                                            onClick={() => toogleFav(elem)}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </SFavTeam>
    )
}