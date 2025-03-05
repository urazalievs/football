import { useContext } from "react"
import { useGetAllMatchesQuery, useGetFinishedMatchesQuery,} from "../../../store/Api/FootballApi"
import { Loader } from "../../loader/Loader"
import { SAllMatches } from "./AllMatches.style"
import { ThemeContext, themes } from "../../../contexts/themeContexts"


interface TOneMatches {
    matchName: string,
    matchId: number,
    matchStatus: string
}
export const OneMatch = ({ matchName, matchId, matchStatus }: TOneMatches) => {
    const {theme} =useContext(ThemeContext)
    const { data, isError, isLoading } = useGetAllMatchesQuery({ id: matchId, status: matchStatus }, )
    const { data: dataFinish, isError: isErrorFinish, } = useGetFinishedMatchesQuery(matchId, )
    if (isErrorFinish) return <p>Ошибка: нет данных!</p>
    if (isLoading) return <Loader />
    if (isError) return <p>Ошибка: нет данных!</p>
    return (
        <SAllMatches isLight = {theme === themes.light}>
                <div className="matches">
                    <div className="matchesInfo">
                        <div className="matchesInfoName"> 
                            <img src={data?.matches[0].competition.emblem} alt="flag" />
                            <h3 >{data?.matches[0].competition.name} ( {matchName} )</h3>
                        </div>
                        <span></span>
                    </div>
                    <div className="matchesTable">
                        {dataFinish && dataFinish.matches.slice(0, 4).map((elem1, index)=>(
                            <li key={elem1.id || elem1.utcDate || index}>
                            <div className="matchesData">
                                <span>{elem1.utcDate.split("T")[0]}</span>
                                <span>{elem1.utcDate.split("T")[1].replace("Z", "")}</span>
                            </div>
                            <div className="matchesHome mImg">
                                <span>{elem1.homeTeam.name}</span>
                                <img src={elem1.homeTeam.crest} alt="flag" />
                            </div>
                            <div className="matchesName">
                                <p>{elem1.score.fullTime.home} - {elem1.score.fullTime.away}</p>
                            </div>
                            <div className="matchesAway mImg">
                                <img src={elem1.awayTeam.crest} alt="flag" />
                                <span> {elem1.awayTeam.name}</span>
                            </div>
                        </li>
                        ))}
                        <li className="nextMatch"><p>( Проедстоящие матчи )</p></li>
                        {data && data?.matches.slice(0, 4).map((elem,index) => (
                                <li key={elem.id || elem.utcDate || index}>
                                    <div className="matchesData">
                                        <span>{elem.utcDate.split("T")[0]}</span>
                                        <span>{elem.utcDate.split("T")[1].replace("Z", "")}</span>
                                    </div>
                                    <div className="matchesHome mImg">
                                        <span>{elem.homeTeam.name}</span>
                                        <img src={elem.homeTeam.crest} alt="flag" />
                                    </div>
                                    <div className="matchesName">
                                        <p>{elem.score.fullTime.home} - {elem.score.fullTime.away}</p>
                                    </div>
                                    <div className="matchesAway mImg">
                                        <img src={elem.awayTeam.crest} alt="flag" />
                                        <span> {elem.awayTeam.name}</span>
                                    </div>
                                </li>
                        ))}
                    </div>
                </div>
        </SAllMatches>
    )
}