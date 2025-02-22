import { SAllMatches } from "./AllMatches.style"
import { OneMatch} from "./OneMatch"



export const AllMatches = () => {

    return (
        <SAllMatches>
            <div className="containerMatch">
                <OneMatch matchId={2016} matchStatus="SCHEDULED" matchName="старые матчи"/>
                <OneMatch matchId={2003} matchStatus="SCHEDULED" matchName="старые матчи"/>
                <OneMatch matchId={2021} matchStatus="SCHEDULED" matchName="старые матчи"/>
                <OneMatch matchId={2017} matchStatus="SCHEDULED" matchName="старые матчи"/>
                <OneMatch matchId={2019} matchStatus="SCHEDULED" matchName="старые матчи"/>
                <OneMatch matchId={2021} matchStatus="SCHEDULED" matchName="старые матчи"/>
            </div>
        </SAllMatches>
    )
}