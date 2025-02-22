import { useState } from "react"
import { SPersonApi } from "./PersonApi.style"
import { PersonSettingApi } from "./PersonSettingApi"



export const PersonApi = () => {

    const [favPlayer, setFavPlayer] = useState<any[]>(() => {
        return JSON.parse(localStorage.getItem("favPlayer") || "[]")
    })

   

    const toogleClick = (player:any) => {
        const isFavorited = favPlayer.some((elem) => elem.id === player.id);
        
        let boxLocalFav;
        if (isFavorited) {
            boxLocalFav = favPlayer.filter((elem) => elem.id !== player?.id)
        } else {
            boxLocalFav = [...favPlayer, player,]
        }

        setFavPlayer(boxLocalFav)
        localStorage.setItem('favPlayer', JSON.stringify(boxLocalFav))
    }

    return (
        <SPersonApi>
            <div className="personContainer">
                <PersonSettingApi favP={favPlayer} toogle={toogleClick} personImg="public/img/Crist.jpg" personId={44} />
                <PersonSettingApi favP={favPlayer} toogle={toogleClick} personImg="public/img/лу.webp" personId={45} />
                <PersonSettingApi favP={favPlayer} toogle={toogleClick} personImg="public/img/hesus.jfif" personId={46} />
                <PersonSettingApi favP={favPlayer} toogle={toogleClick} personImg="public/img/Illari.jpg" personId={1} />
                <PersonSettingApi favP={favPlayer} toogle={toogleClick} personImg="public/img/juanmi.jpg" personId={2} />
                <PersonSettingApi favP={favPlayer} toogle={toogleClick} personImg="public/img/i.webp" personId={5} />
                <PersonSettingApi favP={favPlayer} toogle={toogleClick} personImg="public/img/ruilli.jpeg" personId={6} />
                <PersonSettingApi favP={favPlayer} toogle={toogleClick} personImg="public/img/maxresdefault.jpg" personId={7} />
                <PersonSettingApi favP={favPlayer} toogle={toogleClick} personImg="public/img/skys.jpg" personId={8} />
                <PersonSettingApi favP={favPlayer} toogle={toogleClick} personImg="public/img/8409.jpg" personId={9} />
                <PersonSettingApi favP={favPlayer} toogle={toogleClick} personImg="public/img/original.jpg" personId={11} />
                <PersonSettingApi favP={favPlayer} toogle={toogleClick} personImg="public/img/" personId={13} />
                <PersonSettingApi favP={favPlayer} toogle={toogleClick} personImg="public/img/scale_1200.jfif" personId={14} />
                <PersonSettingApi favP={favPlayer} toogle={toogleClick} personImg="public/img/" personId={15} />
            </div>
        </SPersonApi>
    )
}