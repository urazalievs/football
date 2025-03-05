import styled, { css } from "styled-components";


export const SAllLeagues = styled.div<{islight:boolean}>`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(calc(19vw + 90px), 1fr));
gap: calc(1vw + 2px);
.leagueCont{
    height: 100%;
    border: 1px solid #000;
    background-color: #333131;
    border-radius: 20px;
    
}
.leagueCont:hover{
    box-shadow: 0 0 10px 5px #000;
}
.leagueName{
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-around;
    align-items: center;
    padding: calc(1vw + 2px);
    background-color: #000;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
}
.leagueName h2{
    text-align: center;
    font-size: calc(1.2vw + 5px);
    
    align-content: center;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
}
.leagueName a {
    cursor: pointer;
    font-size: calc(0.9vw + 4px)
}
.leaguaInfo{
    height: 50%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    justify-content: center;
    align-items: center;
    padding: calc(1vw + 0.7px) 0;
}
.leaguaImg{
    text-align: center;
    margin-left: calc(0.4vw + 3.5px);
   
}
.leaguaImg img{
   width: calc(4.5vw + 33px);
}
.leagueInfoText{
    font-size: calc(0.9vw + 4px);
    display: flex;
    flex-direction: column;
    gap: calc(0.5vw + 0.5px);
    margin-left: calc(0.4vw + 3.5px);
}
${({islight})=>
islight &&
css`
.leagueName{
    background-color: #999;
}
.leagueCont{
    background-color: #fff;
}
`
}
`