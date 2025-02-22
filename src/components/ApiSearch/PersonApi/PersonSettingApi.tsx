import { useGetPersonQuery } from "../../../store/Api/FootballApi"
import { Loader } from "../../loader/Loader"
import { SPersonApi } from "./PersonApi.style"

interface TPerson {
    personId: number,
    personImg: string,
    favP: any[],
    toogle: (player: any)=>void
}

export const PersonSettingApi = ({ personId, personImg,favP,toogle }: TPerson) => {
    const { data, isError, isLoading } = useGetPersonQuery(personId)
   
    const isFavorited = favP.some((elem) => elem.id === data?.id)

    if (isLoading) return <Loader />
    if (isError) return <p>Ошибка: нет данных!</p>
    return (
        <SPersonApi>
            <div className="personCard">
                <div className="personImg" style={{ backgroundImage: `URL(${personImg})` }}></div>
                <div className="personCardInfo">
                    <h4>{data?.lastName}</h4>
                    <p>Номер: {data?.shirtNumber}</p>
                </div>
                <div className="personCardStar">
                    <img className="personTeamImg" src={data?.currentTeam.crest} alt="team" />
                    <img
                        className="favIcon"
                        src={`${isFavorited ? "public/img/StarG.svg" : "public/img/StarW.svg"}`} alt="favorites"
                        onClick={()=> toogle(data)}
                    />
                </div>
            </div>
        </SPersonApi>
    )
}