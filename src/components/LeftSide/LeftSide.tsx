
import { SeachCountry } from "../searchCountry/SearchCounty";
import { AppInput } from "../UI/AppInput/AppInput"
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