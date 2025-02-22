import styled from "styled-components";


export const SPersonApi = styled.div`
///// PERSONAPI style
.personContainer{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(calc(17.5vw + 39.5px), 1fr));
    justify-content: space-around;
    gap:calc(0.9vw + 2px);
}



///  PERSONSETTING style
.personCard{
    /* width: calc(17.5vw + 39.5px); */
    height: calc(5.8vw + 16.5px);
    background-color: #333131;
    display: grid;
    grid-template-columns: 1fr 1.3fr 0.4fr;
    border-radius:10px;
    justify-content: space-between;
    /* align-items: center; */
    overflow: hidden;
}
.personCard:hover{
    box-shadow: 0 0 10px 5px #000;
}
.personCardInfo{
    display: flex;
    flex-direction: column;
    gap: calc(1.2vw + 1.5px);
    font-size: calc(0.9vw + 4px);
    padding: calc(0.5vw + 2px);
}
.personImg{
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.personTeamImg{
    /* width: calc(1.5vw + 6.5px); */
}
.personCardStar{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    padding: calc(0.5vw + 2px);
}
.personCardStar img{
    width: calc(1.5vw + 6.5px);
}
.favIcon{
    cursor: pointer;
}
` 