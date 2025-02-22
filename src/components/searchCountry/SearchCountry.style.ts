import styled from "styled-components";


export const SSearchCountry = styled.div`
.leftSearch{
        text-align: center;
        margin-top: calc(0.9vw + 5px);
    }
    .leftSearch h2{
        color: #C3CC5A;
        font-size: calc(1vw + 9px);
    }
    .formSearch{
       display: flex;
       align-items: center;
       position: relative;
       margin-top: calc(2vw + 0.4px);
    }
    .formSearch input{
        font-size: calc(0.9vw + 3.3px);
        padding:calc(0.9vw + 1px) 0 calc(0.9vw + 1px) calc(2vw + 5px);
        width: 100%;
        background-color: #333131;
        border: none;
        border-radius: 10px;
        color: white;
       cursor: pointer;
    }
    .formSearch img{
        width: calc(1vw + 4px);
        position: absolute;
        left: calc(0.5vw + 1px);
        cursor: pointer;
    }
    .ErrorCount{
        margin-top: 10px;
        font-size: calc(0.9vw + 3.3px);
    }
    .countryContainer{
    font-size:calc(0.9vw + 4px) ;
    display: flex;
    gap: calc(0.5vw + 2px);
    justify-content: start;
    align-items: center;
    padding: calc(0.4vw + 1px);
    cursor: pointer;
}
.countryContainer:hover{
    box-shadow: 0 0 10px 5px #000;
}
.countryContainer img{
    width: calc(1.3vw + 4px);
}
.countryContainer:nth-child(2n){
    background-color: #333131;
  
}
.countryContainer:nth-child(2n):hover{
    box-shadow: 0 0 8px 3px #000;
}
`