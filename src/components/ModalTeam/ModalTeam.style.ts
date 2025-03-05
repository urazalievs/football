import styled, { css } from "styled-components";

interface SMTeamProps{
    errorId: boolean
    isLight:boolean
}
export const SModalTeam = styled.div<SMTeamProps>`
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
${props => props.errorId && 
    css`
    display: block;
    `
}
h1{
    background-color:red;
    padding: 10px ;
    width:calc(31vw + 100px);
    text-align:center;
    color:white;
    margin: 0 auto calc(1vw + 0.7px) auto;
    border-radius:15px;
}
.modalCont{
    width:calc(31vw + 100px);
    margin:0 auto;
    gap:calc(1vw + 2px);
    background-color: rgba(0, 0, 0, 0.77);
    padding: calc(1.8vw + 4px);
    border-radius: 20px;
}
.teamFlaf{
    display:grid;
    grid-template-columns:1fr 1fr;
    justify-content:space-between;
    align-items:center;
    gap:15px;
    margin-bottom: calc(1vw + 0.7px)
}
.teamFlaginfo{
    display:grid;
    grid-template-rows:1fr 0.5fr;
    text-align:center;
    align-items:center;
    gap:calc(0.7vw + -0.25px);
    height: 100%;
    background-color: #33313196;
    padding:calc(0.7vw + -0.25px) 0;
    border-radius:12px;
    font-size:calc(0.9vw + 3.3px);
}
.teamFlaginfo img{
    width:calc(3vw + 28px);
    margin: 0 auto;
}
.modalTable{
    height:calc(17vw + 49px);
    overflow:auto;
    margin-bottom: calc(1vw + 0.7px);
    
}
.modalTable::-webkit-scrollbar{
    width:0;
}
table{
    border-spacing: 2px;
    text-align:start;
    font-size:calc(0.9vw + 3.3px);
}
th, td{
    background-color: #c3181873;
    padding:4px 0 4px calc(0.4vw + -0.1px);
}
${({isLight})=>
isLight &&
css`
.modalCont{
    background-color: #ffffffa8;
}
.teamFlaginfo{
    background-color: #999999c2;
}
`
}
`