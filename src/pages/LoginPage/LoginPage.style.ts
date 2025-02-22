import styled from "styled-components";


export const SLoginPage = styled.div`
        height: 100vh;
        align-content: center;
        background-image: url("public/img/16.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        .LoginPageContainer{
        padding: calc(2vw + 15px) calc(1vw + 4.5px);
        border-radius: 20px;
        margin: 40px auto;
        align-content: center;
        width: calc(22.3vw + 178px);
        background-color: #adadad36;
        color: white;
    }
    h1{
        text-align: center;
        font-size: calc(1vw + 13px);
        margin-bottom: calc(1vw + 15px);
        text-transform: uppercase;
    }
    h1>span{
        color: #C3CC5A !important;
    }
    form{
        display: flex;
        flex-direction: column;
        gap: calc(1vw + 7px);
        margin-bottom: calc(1vw + 15px);
    }
    input{
        padding: calc(0.4vw + 5px) 13px;
        border-radius: 15px;
        font-size: calc(1vw + 5px);
        border: 1px solid #c1c6d3b5;
        outline: none;
        background-color: #1e1e1ecf;
        color: white;
    }
    input:hover {
        border-color: #C3CC5A;
    }
  
    .registLink{
        font-size: calc(1vw + 1.2px);
        display: flex;
        flex-direction: column;
        gap: 35px;
        align-items: center;
        text-decoration: none;
    }
    .inpError{
        color: red;
        font-size: calc(1vw + 5px);
    }
    a{
        text-decoration: none;
        vertical-align: inherit;
        background-color: #000000;
        color: #e2f22b;
        padding: 9px 22px;
        border-radius: 12px;
        font-size: calc(1vw + 6px);
    }
    a:hover{
            box-shadow: 0 0 10px 5px #C3CC5A;
    }
    .passwordSee{
        position: relative;
    }
    .passwordSee input{
        width: 100%;

    }
    .passwordSee img{
        position: absolute;
        right: 5px;
        top: calc(0.4vw + 2.5px);
        width: calc(1.3vw + 10px);
        cursor: pointer;
    }
`