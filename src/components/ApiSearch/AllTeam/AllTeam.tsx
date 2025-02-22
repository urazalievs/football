import { useState } from "react"
import { useGetAllTeamQuery } from "../../../store/Api/FootballApi"
import { Loader } from "../../loader/Loader"
import { SAllTeam } from "./AllTeam.style"



export const AllTeam = () => {
    const { data, isError, isLoading } = useGetAllTeamQuery(50)

    const [getIdTeam, setGetIdTeam] = useState<any[]>(()=>{
        const saveFav = localStorage.getItem("favTeam");
        return saveFav ? JSON.parse(saveFav) : []
    })
    const toogleFav = (team: any)=>{
        const isGetTeam = getIdTeam.some((elem)=>elem.id === team.id );
        
        let setLocalFavTeam;
        if(isGetTeam){
            setLocalFavTeam = getIdTeam.filter((del)=> del.id !== team.id)
        }else{
            setLocalFavTeam = [...getIdTeam, team]
        }

        setGetIdTeam(setLocalFavTeam);
        localStorage.setItem("favTeam", JSON.stringify(setLocalFavTeam))
    }
    
    
    if (isLoading) return <Loader />
    if (isError) return <p>Ошибка: нет данных!</p>
    return (
        <SAllTeam>
            <div className="allTemCont">
                {data && data.teams.map((elem) => {
                    const stateImg = getIdTeam.some((team)=>team.id === elem.id)
                    return(
                        <div key={elem.id} className="teamCard">
                        <img src={elem.crest} alt="flag" />
                        <span>{elem.name}</span>
                        <div className="teamCardFav">
                            <a href={elem.website}>Сайт</a>
                            <img 
                                src={`${stateImg ? "public/img/StarG.svg" : "public/img/StarW.svg"}`} alt="favorit" 
                                onClick={()=> toogleFav(elem)}
                            />
                        </div>
                    </div>
                    )
                })}
            </div>
        </SAllTeam>
    )
}