import { useContext } from "react";
import { useGetLeaguesQuery } from "../../../store/Api/FootballApi";
import { Loader } from "../../loader/Loader";
import { SAllLeagues } from "./AllLeagues.style";
import { ThemeContext, themes } from "../../../contexts/themeContexts";



export const AllLeagues = () => {
    const {theme} =useContext(ThemeContext)
    const { data, isLoading } = useGetLeaguesQuery();

    if (isLoading) return <Loader />;
    if (!data || !data.competitions) return <div>Ошибка: нет данных!</div>;
    return (
        <SAllLeagues islight={theme === themes.light}>
            {data.competitions.map((league: any) => (
                <div className="leagueCont" key={league.id} >
                    <div className="leagueName">
                        <h2>{league.name}</h2>
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