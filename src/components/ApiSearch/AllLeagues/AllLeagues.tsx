import { useState } from "react";
import { useGetLeaguesQuery } from "../../../store/Api/FootballApi";
import { Loader } from "../../loader/Loader";
import { SAllLeagues } from "./AllLeagues.style";



export const AllLeagues = () => {
    const [stateLeague,setStateLeague] = useState()
    const { data, isLoading } = useGetLeaguesQuery();

    if (isLoading) return <Loader />;
    if (!data || !data.competitions) return <div>Ошибка: нет данных!</div>;
    return (
        <SAllLeagues>
            {data.competitions.map((league: any) => ( 
                <div className="leagueCont" key={league.id} >
                    <div className="leagueName">
                        <h2>{league.name}</h2>
                        <span onClick={()=>setStateLeague(league.id)}>( Подробнее )</span>
                    </div>
                    <div className="leaguaInfo">
                        <div className="leaguaImg">
                            <img src={league.emblem} alt={league.name} />
                        </div>
                        <div className="leagueInfoText">
                            <p><strong>Country:</strong> {league.area?.name} ({league.area?.code})</p>
                            <p><strong>Type:</strong> {league.type}</p>
                            <p><strong>Plan:</strong> {league.plan}</p>
                            <p><strong>Current Season:</strong> {league.currentSeason?.startDate} - {league.currentSeason?.endDate}</p>
                        </div>
                    </div>
                </div>
            ))}
        </SAllLeagues>
    )
}