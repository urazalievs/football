import styled from "styled-components";

export const SMainPage = styled.div`

    width: 100%;
    height: 100%;
    background-color: #333131;

.rightCont{
    display: block;
    position: relative;
    width: calc(27vw + -85px);
}
.mainPageContainer{
    padding:calc(3.8vw + -6px) calc(2vw + 0.4px) 48px calc(2vw + 0.4px);
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap:calc(1.6vw + -0.1px);
}
#_white{
    color: red;
}
.mainPageContainer._dark{
    background-color:white;
}
.mainInfo{
    display: flex;
    flex-direction: column;
    margin-top: calc(1vw + 2px);
    gap: calc(2vw + 2.8px);
    padding: calc(2vw + 2.7px) calc(1vw + 0.8px) 20px calc(1vw + 0.8px);
    background-color: #1E1E1E;
    width:100%;
    border-radius: 30px;
}
.mainLogo{
    background-image: url(public/img/Banner.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: calc(47vw + 48px);
    height: calc(17vw + 23px);
    border-radius: 30px;
}

@media (max-width:1000px){
    .mainPageContainer{
        grid-template-columns: 3fr 1fr;
    }
    .rightCont{
        display: none;
    }
    .mainLogo{
        width: calc(76vw + -59px);
    }
}
@media (max-width:500px) {
    .mainPageContainer{
        grid-template-columns: 1fr;
    }
    .leftCont{
        display: none;
    }
    .mainLogo{
        width: calc(96vw + -1.5px);
    }
}

`