
import { useContext, useState } from "react"
import { CardRadio } from "../../components/CardRadio/CardRadio"
import { LeftSide } from "../../components/LeftSide/LeftSide"
import { SMainPage } from "./MainPage.style"
import { AllLeagues } from "../../components/ApiSearch/AllLeagues/AllLeagues"
import { RightSide } from "../../components/RightSide/RightSide"
import { AllMatches } from "../../components/ApiSearch/AllMatches/AllMatches"
import { PersonApi } from "../../components/ApiSearch/PersonApi/PersonApi"
import { AllTeam } from "../../components/ApiSearch/AllTeam/AllTeam"
import { MainHeader } from "../../components/MainHeader/MainHeader"
import { ThemeContext, themes } from "../../contexts/themeContexts"

export const MainPage = () => {
    const { theme } = useContext(ThemeContext)

    const [selectRadio, setSelectRadio] = useState<string>('rd3')

    const handlerChacge = (id: string) => {
        setSelectRadio(id);
    }
    return (

        <SMainPage>
            <div className="mainHeader">
                <MainHeader
                    homePage={true}
                    playerPage={false}
                    teamPage={false}
                />
            </div>
            <div className={`mainPageContainer ${theme === themes.light && '_dark'}`}>
                <div className="rightCont">
                    <RightSide
                        homePage={true}
                        playerPage={false}
                        teamPage={false}
                    />
                </div>
                <main className="Main">
                    <div className="mainLogo">
                    </div>
                    <div className="mainInfo">
                        <CardRadio
                            onRadioChange={handlerChacge}
                            selectedRadio={selectRadio}
                        />
                        <div className="">
                            {selectRadio === "rd1" && <AllMatches />}
                            {selectRadio === 'rd2' && <AllLeagues />}
                            {selectRadio === "rd3" && <PersonApi />}
                            {selectRadio === "rd4" && <AllTeam />}
                        </div>
                        <div>
                        </div>
                    </div>
                </main>
                <div className="leftCont">
                    <LeftSide />
                </div>
            </div>
        </SMainPage>
    )
}