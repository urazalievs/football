import styled, { css } from "styled-components";



export const SModalPlayer = styled.div<{isLight:boolean}>`
display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color:rgba(45, 44, 44, 0.51);
    text-align: center; 
    align-content: center;
    z-index: 51;
    .modplayerCont{
        width:  calc(37vw + 110px);
        margin: 0 auto;
        background-color: rgba(0, 0, 0, 0.77);
        padding: calc(1.8vw + 4px);
        border-radius: 20px;
    }
.modPlayerInfo{
    display: grid;
    grid-template-columns: 1fr 3fr;
    text-align: center;
    align-items: center;
    gap:10px;
    margin-bottom: calc(1vw + 0.7px)
}
.modPlayerInfo img{
    width:  calc(17vw + 55px);
}
.infoText{
    text-align: start;
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: calc(0.9vw + 5px);
}
.modPlayerMatch{
    font-size: calc(0.9vw + 3.3px);
    height:  calc(23vw + 65px);
    overflow: auto;
    margin-bottom: calc(1vw + 0.7px)
}
.modPlayerMatch::-webkit-scrollbar{
    width:0;
}
.match{
    background-color: #33313196;
    margin-bottom: calc(1vw + 0.7px);
    border-radius: 15px;
    overflow: auto;
    border: 1px solid #ffffff63;
}
.matchCompet{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: calc(0.7vw + -0.25px) 0;
    background-color: #000;
}
.matchCompetcont{
    display: flex;
    justify-content: center;
    align-items: center;
}
.matchCompetcont img{
    width:  calc(6vw + 3px)
}
.matchScore{
    display: grid;
    grid-template-columns: 1fr 50px 1fr;
    align-items: center;
    padding: calc(0.7vw + -0.25px) 0;
}
.scoreCont img{
    width: calc(4.5vw + 33px);
}
.refereesCont{
    text-align: start;
    margin: 0 auto;
}
${({isLight})=>
isLight &&
css`
.modplayerCont{
    background-color: #ffffffa8;
}
.matchCompet{
    background-color: #999;
}
`
}
`