
import { SeachCountry } from "../searchCountry/SearchCounty";
import { SLeftSide } from "./LeftSide.style"


export const LeftSide = () => {
    return (
        <SLeftSide>
            <div className="leftContainer">
                <SeachCountry/>
            </div>
        </SLeftSide>
    )

}