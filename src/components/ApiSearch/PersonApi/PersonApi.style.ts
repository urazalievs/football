import styled, { css } from "styled-components";


export const SPersonApi = styled.div<{isLight?:boolean}>`
.personContainer{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(calc(17.5vw + 39.5px), 1fr));
    justify-content: space-around;
    gap:calc(0.9vw + 2px);
}

.personCard{
    height: calc(5.8vw + 16.5px);
    background-color: #333131;
    display: grid;
    grid-template-columns: 1fr 1.3fr 0.4fr;
    border-radius:10px;
    justify-content: space-between;
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
    cursor: pointer;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.personTeamImg{
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
.personCardInfo h4{
    cursor: pointer;
}
${({isLight})=>
isLight &&
css`
.personCard {
    background-color: #ccc;
}
`
}
` 