import { useContext, useState } from "react"
import { SFavPlayer } from "./FavPlayer.style"
import { RightSide } from "../../components/RightSide/RightSide"
import { PersonSettingApi } from "../../components/ApiSearch/PersonApi/PersonSettingApi"
import { MainHeader } from "../../components/MainHeader/MainHeader"
import { ModalPlayer } from "../../components/ModalPlayer/ModalPlayer"
import { ThemeContext, themes } from "../../contexts/themeContexts"


export const FavPlayer = () => {
    const {theme} =useContext(ThemeContext)
    const [displayMod, setDisplayMod]= useState<boolean>(true);
    const [playId, setPlayId]= useState<any>()
    const [palyerBox, setPlayerBox] = useState<any[]>(() => {
        const playerLocal = localStorage.getItem("favPlayer")
        return playerLocal ? JSON.parse(playerLocal) : [];
    })
    const playerInfo =(idpl:any)=>{
        setPlayId(idpl)
        setTimeout(() => setDisplayMod(false), 10)
    }
    const handleclick = (player: any) => {
        const isFavorited = palyerBox.filter((e) => e.id !== player.id)
        setPlayerBox(isFavorited)
        localStorage.setItem("favPlayer", JSON.stringify(isFavorited))
    }
    const closeModal= ()=>{
        setDisplayMod(true)
    }   

    return (
        <SFavPlayer isLight={theme === themes.light}>
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
                                <ModalPlayer
                                    key={playId}
                                    playerId={playId}
                                    closeModal={closeModal}
                                    displayModal={displayMod}
                                />
                                {palyerBox?.map((elem) => (
                                    <PersonSettingApi
                                        playerInfo={playerInfo}
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