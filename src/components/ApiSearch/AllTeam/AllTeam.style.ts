import styled from "styled-components";


export const SAllTeam = styled.div`

.allTemCont{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(calc(8.5vw + 27.5px), 1fr));
    gap:calc(1vw + 2px);
    justify-content:center;
}
.teamCard{
    background-color: #333131;
    display: grid;
    grid-template-rows: 1fr 0.3fr 0.3fr;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: calc(1vw + 2px);
    gap: calc(0.8vw + 3px);
    border-radius: 20px;
    border: 1px solid #333131;
}
.teamCard img{
    margin: 0 auto;
    width: calc(4.5vw + 33px);
}
.teamCard span{
    font-size: calc(0.9vw + 5px);
    padding-bottom: 4px;
}
.teamCard a{
    font-size: calc(0.9vw + 4px);
    color: rgb(194, 204, 90);
    padding: 4px 6px;
    background-color: #000;
    border-radius: 12px;
}
.teamCardFav{
    display: flex;
    justify-content: center;
    gap: calc(0.6vw + 1px);
    align-items: center;
}
.teamCardFav img{
    cursor: pointer;
    width: calc(1.5vw + 6.5px);
    min-width: 16px;
    margin: 0;
    background-color: #000;
    padding: 4px;
    border-radius: 12px;
}
.teamCardFav img:hover{
    box-shadow: 0 0 10px 5px #C3CC5A;
}
.teamCard:hover{
    /* border: 1px solid #000; */
    box-shadow: 0 0 10px 5px #000;
}
a:hover{
    box-shadow: 0 0 10px 5px #C3CC5A;
    }
`