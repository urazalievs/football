import { useGetOneLeagueQuery } from "../../../store/Api/FootballApi"


export const OneLeagues = () => {
    const { data, isLoading } = useGetOneLeagueQuery()

    if (isLoading) return <div>Loading...</div>;  // Показать загрузку
    if (!data || !data) return <div>No data available</div>;  // Проверка на отсутствие данных

    const ArrayOneLaeague = [data]
    return (
        <div>
            {ArrayOneLaeague.map((league: any) => (
                <div style={{ color: "white", border: "1px solid #ddd", padding: "20px", borderRadius: "10px", width: "400px" }}>
                    <h1>{league[1]} ({league.code})</h1>
                    <img src={league.emblem} alt={league.name} style={{ width: "100px" }} />
                    <p><strong>Страна:</strong> {league.area.name} ({league.area.code})</p>
                    <img src={league.area.flag} alt={league.area.name} style={{ width: "50px" }} />
                    <p><strong>Тип:</strong> {league.type}</p>
                    <p><strong>Сезон:</strong> {league.currentSeason.startDate} - {league.currentSeason.endDate}</p>
                    <p><strong>Текущий тур:</strong> {league.currentSeason.currentMatchday}</p>
                    <p><strong>Обновлено:</strong> {new Date(league.lastUpdated).toLocaleString()}</p>
                </div>
            ))}
        </div>
    )
}