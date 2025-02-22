import styled from "styled-components";


export const SAppButton = styled.button`
        width: calc(13vw + 107px);
        margin: 0 auto;
        padding: calc(0.5vw + 6px) 12px ;
        border-radius: 15px;
        background-color: #C3CC5A;
        color: white;
        font-size: calc(1vw + 5px);
        border: 1px solid #C3CC5A;
        cursor: pointer;
        &:hover{
            background-color: white;
            border: 1px solid violet;
            color:black;
            box-shadow: 0 0 16px 4px violet;
        }
        &:active{
            background-color: red;
        }
        &:disabled{
            background-color: gray;  
            box-shadow: none;
            border: none;
            color: black;
        }
`