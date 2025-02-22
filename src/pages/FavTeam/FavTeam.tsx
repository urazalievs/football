import { useState } from "react"
import { MainHeader } from "../../components/MainHeader/MainHeader"
import { RightSide } from "../../components/RightSide/RightSide"
import { SFavTeam } from "./FavTeam.style"


export const FavTeam = () => {
    const [stateImg] = useState(true)
    const [favTeam, setFavTeam] = useState<any[]>(() => {
        const favTeamLocal = localStorage.getItem("favTeam");
        return favTeamLocal ? JSON.parse(favTeamLocal) : [];
    })

    // const allTemCont =  localStorage.setItem("allTeam",JSON.stringify(favTeam));
    // localStorage.setItem('favTeam', JSON.stringify(allTemCont))
    const toogleFav = (team: any) => {
        const isTeam = favTeam.filter((e) => e.id !== team.id)

        setFavTeam(isTeam)
        localStorage.setItem("favTeam", JSON.stringify(isTeam))
    }

    return (
        <SFavTeam>
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
                            {favTeam?.map((elem: any) => (
                                <div key={elem.id} className="teamCard">
                                    <img src={elem.crest} alt="flag" />
                                    <span>{elem.name}</span>
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