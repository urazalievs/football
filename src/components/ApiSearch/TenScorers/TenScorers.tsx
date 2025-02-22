import { useGetTenScorersQuery } from "../../../store/Api/FootballApi"
import { STenScorers } from "./TenScorers.style";


export const TenScorers = () => {
    const { data, error, isLoading } = useGetTenScorersQuery({ limit: 5, season: "2016" });
    // console.log(data);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;
    if (!data || !data) return <div>No scorers found</div>;

    const ArrayScorers = [data.competition]
    // console.log(ArrayScorers);

    return (
        <STenScorers>
            <h1>Top Scorers - Serie A</h1>
            {data.scorers.map((scorers: any, index) => (

                <li key={scorers.player.id} style={{ color: "white", borderBottom: "1px solid #ddd", padding: "10px" }}>
                    <h3>{index + 1}. {scorers.player.name}</h3>
                    <p>Team: {scorers.team.name}</p>
                    <p>Goals: {scorers.goals}</p>
                </li>
            ))}
            {ArrayScorers.map((add) => (
                <img src={add.emblem} alt="" />
            ))}
        </STenScorers>
    )
}