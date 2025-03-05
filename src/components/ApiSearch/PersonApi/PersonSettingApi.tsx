
import { useContext } from "react";
import { useGetPersonOnePQuery} from "../../../store/Api/FootballApi";
import { SPersonApi } from "./PersonApi.style"
import { ThemeContext, themes } from "../../../contexts/themeContexts";

interface TPerson {
    personId: number,
    personImg: string,
    favP: any[],
    toogle: (player: any) => void,
    playerInfo: (idPl: any) => void,
}

export const PersonSettingApi = ({ personId, personImg, favP, toogle, playerInfo }: TPerson) => {
    const {theme} = useContext(ThemeContext)
    const {data, isError} = useGetPersonOnePQuery(personId)

    const isFavorited = favP.some((elem) => elem.id === data?.id)


    // if (isLoading) return <Loader />
    if (isError) return <p>Ошибка: нет данных!</p>
    return (
        <SPersonApi isLight= {theme === themes.light}>
            <div className="personCard">
                <div onClick={() => playerInfo(data?.id)} className="personImg" style={{ backgroundImage: `URL(${personImg})` }}></div>
                <div className="personCardInfo">
                    <h4 onClick={() => playerInfo(data?.id)}>{data?.lastName}</h4>
                    <p>Номер: {data?.shirtNumber}</p>
                </div>
                <div className="personCardStar">
                    <img className="personTeamImg" src={data?.currentTeam.crest} alt="team" />
                    <img
                        className="favIcon"
                        src={`${isFavorited ? "public/img/StarG.svg" : "public/img/StarW.svg"}`} alt="favorites"
                        onClick={() => toogle(data)}
                    />
                </div>
            </div>
        </SPersonApi>
    )
}