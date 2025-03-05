import styled, { css } from "styled-components";


export const SModalCountry = styled.div<{isLight:boolean}>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color:rgba(45, 44, 44, 0.51);
    text-align: center; 
    align-content: center;
    z-index: 51;
.mdalCountryCont{
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.77);
    width: calc(22vw + 78px);
    padding: calc(1.8vw + 4px);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap:calc(1vw + 2px);

}
.mdalCountryCont img{
    width:calc(17vw + 5.5px);
}
.mdalCountryCont h2{
   font-size: calc(1vw + 9px);
}
.mdalCountryCont p{
    font-size: calc(0.9vw + 5px);
}
.mdalCountryCont button{
    width: calc(8vw + 34px);
    padding: calc(0.5vw + 4px) 12px;
}
.mdalCountryCont button:hover{
    color: #C3CC5A;
}
${({isLight})=>
isLight &&
css`
.mdalCountryCont{
    background-color: #ffffffa8;
}
`
}
`