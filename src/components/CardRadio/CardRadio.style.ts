import styled, { css } from "styled-components";

export const SCardRadio = styled.div<{islight:boolean}>`
color:white;
display: flex;
justify-content: space-around;
align-items: center;
gap: 4px;
margin: 0 10px;
.mainCardsContainer {
    width: 100%;
    text-align: center;
}
.mainCardsContainer label{
    font-size: calc(0.9vw + 5px);
    padding: calc(1vw + -1.5px) ;
    display: block;
    width: 100%;
    background-color: #333131;
    border-radius: 15px;
}
input[type=radio] {
    display: none;
} 
input[type=radio]:checked + label{
    border: 1px solid #C3CC5A;
    color: #C3CC5A;
}
${({islight})=>
islight &&
css`
.mainCardsContainer label{
    background-color: #fff;
    color: black;
}
`
}
`