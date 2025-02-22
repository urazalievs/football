import { useGetEredivisieQuery } from "../../../store/Api/FootballApi";
import { SEredivisie } from "./Eredivisie.style"


export const Eredivisie = () => {

    const { data, error, isLoading } = useGetEredivisieQuery();
    console.log(data);
    // const ArrayEredivise = [...data]
    // console.log(ArrayEredivise);



    if (isLoading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка загрузки</p>;
    if (!data || !data.scorers) return <p>Нет данных</p>;
    return (
        <SEredivisie>
            <ul>
                {data.scorers.map((scorer) => (
                    <li key={scorer.player.id}>
                        {scorer.player.name} ({scorer.team.name}) - {scorer.numberOfGoals} голов
                    </li>
                ))}
            </ul>

        </SEredivisie>
    )
}