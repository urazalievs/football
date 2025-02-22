import { useRef, useState } from "react";
import { useGetCountyQuery } from "../../../store/Api/FootballApi"
import { SCountry } from "./Country.style";


interface TCountry{
    parentsName:string
    parentsCount: string,
    allOrOne: boolean,
    upTable:boolean,
    toogleCount: (country:any)=>void
}

export const Country = ({parentsName,parentsCount,allOrOne,upTable,toogleCount}:TCountry) => {

    const vecorRef = useRef<HTMLSpanElement | null>(null);
    const mapRef = useRef<HTMLDivElement | null>(null);
    const borderRef = useRef<HTMLDivElement | null>(null);
    const [seriaAllCountry] = useState(allOrOne)
    const [upTableClass, ] = useState(upTable)

    const { data, error, isLoading } = useGetCountyQuery(undefined,{refetchOnFocus: false,refetchOnReconnect: false } )

    const handelclik = () => {
        if (borderRef.current) {
            borderRef.current.classList.toggle("br")
        }
        if (vecorRef.current) {
            vecorRef.current.classList.toggle("rotate")
        }
        if (mapRef.current) {
            mapRef.current.classList.toggle("_up")
        }
    }
    
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;
    if (!data || !data) return <div>No scorers found</div>;

    return (
        <SCountry>
            <div className="AllCounty">
                <div ref={borderRef} onClick={handelclik} className={`AllCountyCount ${upTableClass ? 'br' : ''} `}>
                    <span>{parentsName}</span>
                    <span ref={vecorRef} className={`VectorCountry ${upTableClass ? 'rotate' : ''}`}>
                        <img src="public/img/che.png" alt="vector" />
                    </span>
                </div>
                <div ref={mapRef} className={`AllCountryMap ${upTableClass ? '': "_up"}`} >
                    {seriaAllCountry && data.areas.map((country: any) => (
                        <div onClick={() => toogleCount(country)} key={country.id} className="countryContainer ">
                            <img width="30px" src={`${country.flag ? country.flag : "public/img/1647.png"}`} alt="flag" />
                            <p>{country.name}</p>
                        </div>
                    ))}
                    {!seriaAllCountry && data?.areas
                        .filter((country: any) => country.parentArea === parentsCount)
                        .map((allcountry:any) => (
                            <div onClick={()=> toogleCount(allcountry)} key={allcountry.id} className="countryContainer">
                                <img width="30px" src={`${allcountry.flag ? allcountry.flag : "public/img/1647.png"}`} alt="flag" />
                                <p>{allcountry.name}</p>
                            </div>  
                        ))
                    }
                </div>
            </div>
        </SCountry>
    )
} 