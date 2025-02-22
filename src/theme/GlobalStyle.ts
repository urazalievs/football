import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }
    .inpError{
        color: red;
    }
    a{
        text-decoration: none;
        color: white;
    }
    body{
        background-color: #333131;
        color: white;
    }
`