import { useContext, useState } from "react"
import { useGetAllTeamQuery } from "../../../store/Api/FootballApi"
import { Loader } from "../../loader/Loader"
import { SAllTeam } from "./AllTeam.style"
import { ModalTeam } from "../../ModalTeam/ModalTeam"
import { ThemeContext, themes } from "../../../contexts/themeContexts"



export const AllTeam = () => {
    const {theme} = useContext(ThemeContext)
    const { data, isError, isLoading } = useGetAllTeamQuery(100)

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
    const [idteamMap, setIdtamMap] = useState<any>()
    const [displayModal,setDisplayModal] = useState<boolean>(false)
    const getTeamId = (teamId:any)=>{
        setIdtamMap(teamId)
        setDisplayModal(true)
    }
    const closeModal= ()=> {
        setDisplayModal(false)
    }
    
    if (isLoading) return <Loader />
    if (isError) return <p>Ошибка: нет данных!</p>
    return (
        <SAllTeam isLight={theme ===themes.light}>
            <div className="allTemCont">
                <ModalTeam closeModal={closeModal}  errorIdD={displayModal} teamId={idteamMap}/>
                {data && data.teams.map((elem) => {
                    const stateImg = getIdTeam.some((team)=>team.id === elem.id)
                    return(
                    <div key={elem.id} className="teamCard">
                        <img onClick={()=>getTeamId(elem.id)} src={elem.crest} alt="flag" />
                        <span onClick={()=>getTeamId(elem.id)}>{elem.name}</span>
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