import styled, { css } from "styled-components";


export const SAllMatches = styled.div<{isLight?:boolean}>`
.matches{
    margin-bottom: calc(0.9vw + 17px);
    border-radius: 20px;
}
.matches:hover{
    box-shadow: 0 0 10px 5px #000;
}
.matchesInfoName img{
    display: inline-block;
    width: calc(1.5vw + 14px);
    min-width: 20px;
    height: 100%;
    border-radius: 25px;
    padding: 3px;
    background-color: #fff;
}
.matchesInfoName h3{
    font-size: calc(1vw + 7px)
   
}
.matchesInfo{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #000;
    padding: calc(0.7vw + -2px) 0 ;
    border: 1px solid #000;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}
.matchesInfo span{
    font-size: calc(0.9vw + 4px)
}
.matchesInfoName{
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 15px;
}
.matchesTable{
    border: 1px solid #000;
    border-radius: 0 0 20px 20px;
    overflow: auto;
}
.matchesData{
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-left: 15px;
}
ul{

}
li{
    font-size: calc(0.9vw + 4px);
    text-decoration: none;
    display: grid;
    grid-template-columns:1fr 1fr calc(2.7vw + 11.5px) 1fr;
    justify-content: center;
    align-items: center;
    padding: calc(0.5vw + 1.2px) 0;
    background-color: #333131;
}
li:nth-child(2n){
    background-color: #1E1E1E;
}
.nextMatch{
    background-color: #000; 
    grid-template-columns: 1fr;
    text-align: center;
    text-transform: uppercase;
    border-radius: 20px;
}
.nextMatch p {
    font-size: calc(0.9vw + 6px);
}
.matchesHome{
    display:flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}
.matchesName{
    text-align: center;
    align-items: center;
}
.matchesAway {
    display: flex;
    align-items: center;
    gap: 10px;
}
.mImg img{
    width:  calc(1.3vw + 4px);
}
${({isLight})=>
isLight && 
css`
.matchesInfo{
    background-color: #999;
}
li{
    background-color: #fff;
}
li:nth-child(2n){
    background-color: #ccc;
}
.nextMatch{
    background-color: #999;
    border-radius: 0px;
}
`
}
`