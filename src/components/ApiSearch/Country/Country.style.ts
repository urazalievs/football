import styled from "styled-components";


export const SCountry = styled.div`
color: white;
.AllCounty{
    margin:calc(0.9vw + 7px) 0 ;
}


.VectorCountry img{
    margin: calc(0.4vw + -1px) ;
    width: calc(0.9vw + 7px);
}
.VectorCountry.rotate{
    transition: 200ms;
    transform: rotate(90deg);
}
.AllCountyCount.br{
    border: 1px solid #000;
}
.AllCountryMap._up{
  display: none;
  transition: 2s;
}
.AllCountyCount {
    text-align: center;
    font-size: calc(0.9vw + 5px);
    padding: calc(0.4vw + -1px) 5px;
    border-radius: 12px;
    background-color: #333131;
    /* margin-top: 20px; */
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.AllCountryMap{
    border: 1px solid #000;
    border-top: none;
    border-radius: 12px;
    width: 100%;
    height: calc(16vw + 68px);   
    overflow: auto;
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
.AllCountryMap::-webkit-scrollbar {
  width: 1px;
}
`