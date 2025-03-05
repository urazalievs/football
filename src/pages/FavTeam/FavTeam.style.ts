import styled, { css } from "styled-components";



export const SFavTeam = styled.div<{isLight:boolean}>`
padding: calc(2.8vw + -6px) calc(2vw + 0.4px) 48px calc(2vw + 0.4px);
display: flex;
flex-direction: column;
justify-content: space-between;
gap: calc(1.6vw + -0.1px);
> :nth-child(1){
    display: none;
    padding: 0;
}
> :nth-child(1) >.navContainer{
    margin: 0;

}

.favplaerCont{
    display: grid;
    grid-template-columns: 1fr 3.5fr;
    height: 92vh;
    gap:calc(1.6vw + -0.1px);
}
aside{
}
aside div{
    width: calc(21vw + 1px);
}
main{
    background-color: #1E1E1E;
    border-radius: 20px;
    padding:calc(2vw + 0.1px) calc(0.9vw + 2px) 20px calc(0.9vw + 2px);
};
.playerCard{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(calc(17.5vw + 39.5px), 1fr));
    justify-content: space-around;
    gap: calc(0.9vw + 2px);
}
.teamContCard{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(calc(8.5vw + 27.5px), 1fr));
    gap:calc(1vw + 2px);
    justify-content:center;
}
.teamCard{
    background-color: #333131;
    display: grid;
    grid-template-rows: 1fr 0.3fr 0.3fr;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: calc(1vw + 2px);
    gap: calc(0.8vw + 3px);
    border-radius: 20px;
    border: 1px solid #333131;
}
.teamCard img{
    margin: 0 auto;
    width: calc(4.5vw + 33px);
}
.teamCard span{
    font-size: calc(0.9vw + 5px);
    padding-bottom: 4px;
}
.teamCard a{
    font-size: calc(0.9vw + 4px);
    color: rgb(194, 204, 90);
    padding: 4px 6px;
    background-color: #000;
    border-radius: 12px;
}
.teamCardFav{
    display: flex;
    justify-content: center;
    gap: calc(0.6vw + 1px);
    align-items: center;
}
.teamCard img, .teamCard span{
    cursor: pointer;
}
.teamCardFav img{
    cursor: pointer;
    width: calc(1.5vw + 6.5px);
    min-width: 16px;
    margin: 0;
    background-color: #000;
    padding: 4px;
    border-radius: 12px;
}
.teamCardFav img:hover{
    box-shadow: 0 0 10px 5px #C3CC5A;
}
.teamCard:hover{
    /* border: 1px solid #000; */
    box-shadow: 0 0 10px 5px #000;
}
.teamCard a:hover{
    box-shadow: 0 0 10px 5px #C3CC5A;
    }
${({isLight})=>
isLight && 
css`
main{
    background-color: #666  ;
}
.teamCard{
    background-color: #fff;
    color: black;
}
background-color: #ccc;
`
}
.burgerInfo{
    top: calc(4.2vw + 14.1px);
}
@media (max-width:600px) {
> :nth-child(1){
    display: block;
}
aside{
        display: none;
}
.favplaerCont{
    display: block;
}
}
`