import { useState } from "react"
import { SFavPlayer } from "./FavPlayer.style"
import { RightSide } from "../../components/RightSide/RightSide"
import { PersonSettingApi } from "../../components/ApiSearch/PersonApi/PersonSettingApi"
import { MainHeader } from "../../components/MainHeader/MainHeader"


export const FavPlayer = () => {
    const [palyerBox, setPlayerBox] = useState<any[]>(() => {
        const playerLocal = localStorage.getItem("favPlayer")
        return playerLocal ? JSON.parse(playerLocal) : [];
    })
    console.log(palyerBox);

    const handleclick = (player: any) => {
        const isFavorited = palyerBox.filter((e) => e.id !== player.id)
        setPlayerBox(isFavorited)
        localStorage.setItem("favPlayer", JSON.stringify(isFavorited))
    }
    return (
        <SFavPlayer>
            <MainHeader
                homePage={false}
                playerPage={true}
                teamPage={false}
            />
            <div className="favplaerCont">
                <aside>
                    <RightSide
                        homePage={false}
                        playerPage={true}
                        teamPage={false}
                    />
                </aside>
                <main>
                    <div className="mainConatainer">
                        <div className="mainPlayer">
                            <div className="playerCard">
                                {palyerBox?.map((elem) => (
                                    <PersonSettingApi
                                        key={elem.id}
                                        favP={palyerBox}
                                        personId={elem.id}
                                        personImg="public/img/Crist.jpg"
                                        toogle={handleclick}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </SFavPlayer>
    )
}