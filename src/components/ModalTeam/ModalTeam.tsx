import { useContext } from "react";
import { useGetOneTemaQuery } from "../../store/Api/FootballApi"
import { Loader } from "../loader/Loader";
import { AppButton } from "../UI/AppButton/AppButton";
import { SModalTeam } from "./ModalTeam.style"
import { ThemeContext, themes } from "../../contexts/themeContexts";

interface TModalTeam {
    teamId: number,
    errorIdD: boolean,
    closeModal: () => void,
}


export const ModalTeam = ({ teamId, errorIdD, closeModal }: TModalTeam) => {
    const {theme} =useContext(ThemeContext)
    const { data, isError, isLoading } = useGetOneTemaQuery(teamId);
    if (isLoading) return <Loader />
    if (isError) {
        return (
            <SModalTeam isLight={theme === themes.light} errorId={errorIdD}>
                <h1>У апи нет данных!</h1>
                <AppButton
                    butText="Закрыть"
                    butType="button"
                    butClick={closeModal}
                    isDisabled={false}
                />
            </SModalTeam>

        )
    }
    return (
        <SModalTeam isLight={theme === themes.light}  errorId={errorIdD}>
            <div className="modalCont">
                <div className="teamFlaf">
                    <div className="teamFlaginfo">
                        <img src={data?.area.flag} alt="flag" />
                        <p>Лига: {data?.area.name}</p>
                    </div>
                    <div className="teamFlaginfo">
                        <img src={data?.crest} alt="flag" />
                        <p>Команда: {data?.name}</p>
                    </div>
                </div>
                <div className="modalTable">
                    <table>
                        <thead>
                            <tr>
                                <th>Позиция</th>
                                <th>Имя</th>
                                <th>Дата рождения</th>
                                <th>Национальность</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Тренер</th>
                                <th>{data?.coach.name}</th>
                                <th>{data?.coach.dateOfBirth}</th>
                                <th>{data?.coach.nationality}</th>
                            </tr>
                            {data?.squad.map((elem) => (
                                <tr key={elem.id}>
                                    <td>{elem.position}</td>
                                    <td>{elem.name}</td>
                                    <td>{elem.dateOfBirth}</td>
                                    <td>{elem.nationality}</td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
                <AppButton
                    butText="Закрыть"
                    butType="button"
                    butClick={closeModal}
                    isDisabled={false}
                />
            </div>
        </SModalTeam>
    )
}