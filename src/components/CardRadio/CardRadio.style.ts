import styled from "styled-components";

export const SCardRadio = styled.div`
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
    /* background-color: red; */
    /* padding: 17px 20px;
    background-color: #333131;
    border-radius: 20px; */
    border: 1px solid #C3CC5A;
    color: #C3CC5A;
}
`