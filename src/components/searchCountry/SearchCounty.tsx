import { useState } from "react"
import { Country } from "../ApiSearch/Country/Country"
import { AppInput } from "../UI/AppInput/AppInput"
import { SSearchCountry } from "./SearchCountry.style"
import { ModalCountry } from "../ModalCountry/ModalCountry"
import { useGetCountyQuery } from "../../store/Api/FootballApi"
import { Loader } from "../loader/Loader"




export const SeachCountry = () => {
    const [getModal, setGetModal] = useState(false)
    const { data, isError, isLoading } = useGetCountyQuery()
    const [searchGuery, setSearchQuery] = useState('')

    const toogleCount = (country: any) => {
        localStorage.setItem("favCountry", (JSON.stringify(country)))
        setGetModal(!getModal)
    }
    let countryMap 
    if(searchGuery){
        countryMap  = data?.areas.filter((e)=> e.name.toLowerCase().includes(searchGuery.toLowerCase())) || []
    }
    

    return (
        <>
            <SSearchCountry>
                {getModal && <ModalCountry />}
                <div className="leftSearch">
                    <h2>Поиск стран</h2>
                    <form className="formSearch">
                        <AppInput
                            inpPlacehol="Названия страны..."
                            inpName="search"
                            inpType="search"
                            inpValue={searchGuery}
                            errorText=""
                            inpChange={(e) => setSearchQuery(e.target.value)}
                            isError={false}
                        />
                        <img src="public/img/search.png" alt="search" />
                    </form>
                </div>
                {isLoading && <Loader />}
                {isError && <p>Ошибка: нет данных!</p>}
                {searchGuery && (!countryMap || countryMap.length === 0) && <p className="ErrorCount">Нет такой страны</p>}
                {countryMap !== undefined  &&
                    countryMap?.map((count:any)=>(
                        <div onClick={()=> toogleCount(count)} key={count.id} className="countryContainer">
                                <img width="30px" src={`${count.flag ? count.flag : "public/img/1647.png"}`} alt="flag" />
                                <p>{count.name}</p>
                        </div>  
                    ))
                }
                {!countryMap && 
                <>
                    <Country upTable={true} toogleCount={toogleCount} allOrOne={true} parentsCount="Все страны" parentsName="Все страны"/>
                    <Country upTable={true} toogleCount={toogleCount} allOrOne={false} parentsCount="Europe" parentsName="Европа"/>
                    <Country upTable={true} toogleCount={toogleCount} allOrOne={false} parentsCount="Asia" parentsName="Азия"/>
                    <Country upTable={false} toogleCount={toogleCount} allOrOne={false} parentsCount="Africa" parentsName="Африка"/>
                    <Country upTable={false} toogleCount={toogleCount} allOrOne={false} parentsCount="Oceania" parentsName="Океания"/>
                    <Country upTable={false} toogleCount={toogleCount} allOrOne={false} parentsCount="N/C America" parentsName="Северная Америка"/>
                    <Country upTable={false} toogleCount={toogleCount} allOrOne={false} parentsCount="South America" parentsName="Южная америка"/>
                </>
                }
                    
            
            </SSearchCountry>
        </>
    )
}