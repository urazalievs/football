import { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/themeContexts"
import { useGetOnePlayerQuery } from "../../store/Api/FootballApi"
import { Loader } from "../loader/Loader"
import { AppButton } from "../UI/AppButton/AppButton"
import { SModalPlayer } from "./ModalPlayer.style"

interface TModalPlayer {
    playerId: number,
    closeModal: () => void,
    displayModal: boolean,
}
export const ModalPlayer = ({ closeModal, displayModal, playerId }: TModalPlayer) => {
    const {theme}=useContext(ThemeContext)
    const { data, isError, isLoading } = useGetOnePlayerQuery(playerId)

    if (isLoading) return <Loader />
    if (isError) {
        return (
            <SModalPlayer isLight= {theme === themes.light}>
                <h1>У апи нет данных!</h1>
                <AppButton
                    butText="Закрыть"
                    butType="button"
                    butClick={closeModal}
                    isDisabled={false}
                />
            </SModalPlayer>

        )
    }
    return (
        <SModalPlayer isLight= {theme === themes.light} style={{ display: `${displayModal ? "none" : "block"}` }}>
            <div className="modplayerCont">
                <div className="modPlayerInfo">
                    <img src="public/img/Crist.jpg" alt="player" />
                    <div className="infoText">
                        <span>Имя: {data?.person.lastName}</span>
                        <span>Дата рождения: {data?.person.dateOfBirth}</span>
                        <span>Национальность: {data?.person.nationality}</span>
                        <span>Позиция: {data?.person.position || "Неизвестно"}</span>
                    </div>
                </div>
                {data?.matches[0] && 
                <div className="modPlayerMatch">
                    <h2>Мачи игрока:</h2>
                    { data?.matches.map((elem) => (
                        <div key={elem.id} className="match">
                            <div className="matchCompet">
                                <div className="matchCompetcont">
                                    <span>{elem.area.name}</span>
                                    <img src={elem.area.flag} alt="falg" />
                                </div>
                                <div className="matchCompetcont">
                                    <span>{elem.competition.name}</span>
                                    <img src={elem.competition.emblem} alt="falg" />
                                </div>
                            </div>
                            <div className="matchScore">
                                <div className="scoreCont">
                                    <img src={elem.homeTeam.crest} alt="flag"/>
                                    <p>{elem.homeTeam.name}</p>
                                </div>
                                <span>{elem.score.fullTime.home} - {elem.score.fullTime.away}</span>
                                <div className="scoreCont">
                                    <img src={elem.awayTeam.crest} alt="flag"/>
                                    <p>{elem.awayTeam.name}</p>
                                </div>
                            </div>
                            <div className="matchCompet">
                                <div className="refereesCont">
                                    <p>Сезон:</p>
                                    <p>Начало: {elem.season.startDate}</p>
                                    <p>Конец: {elem.season.startDate}</p>
                                </div>
                                <div className="refereesCont">
                                    <p>Судья:</p>
                                    <p>Имя: {elem.referees[0].name}</p>
                                    <p>Национальность: {elem.referees[0].nationality}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                }
                <AppButton
                    butText="Закрыть"
                    butType="button"
                    butClick={closeModal}
                    isDisabled={false}
                />
            </div>
        </SModalPlayer>
    )
}