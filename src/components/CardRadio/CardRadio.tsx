import { SCardRadio } from "./CardRadio.style"

interface TCardRadio {
    selectedRadio:string,
    onRadioChange:(id:string)=>void
}

export const CardRadio = ({selectedRadio,onRadioChange}:TCardRadio) => {
    return (
        <SCardRadio>
            <div className="mainCardsContainer">
                <input 
                    id="rd1" 
                    name="CardChek" 
                    type="radio" 
                    checked={selectedRadio === "rd1"}
                    onChange={()=>onRadioChange("rd1")}
                />
                <label htmlFor="rd1">Мачи</label>
            </div>
            <div className="mainCardsContainer">
                <input 
                    id="rd2"
                    name="CardChek"
                    type="radio"
                    checked={selectedRadio === "rd2"}
                    onChange={()=>onRadioChange("rd2")}
                />
                <label htmlFor="rd2">Все лиги</label>
            </div>
            <div className="mainCardsContainer">
                <input 
                    id="rd3"
                    name="CardChek"
                    type="radio"
                    checked={selectedRadio === "rd3"}
                    onChange={()=>onRadioChange("rd3")}
                />
                <label htmlFor="rd3">Игроки</label>
            </div>
            <div className="mainCardsContainer">
                <input 
                    id="rd4"
                    name="CardChek"
                    type="radio"
                    checked={selectedRadio === "rd4"}
                    onChange={()=>onRadioChange("rd4")}
                />
                <label htmlFor="rd4">Все команды</label>
            </div>
        </SCardRadio>
    )
}