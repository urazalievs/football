import styled from "styled-components";



export const SFavPlayer = styled.div`
padding: calc(2.8vw + -6px) calc(2vw + 0.4px) 48px calc(2vw + 0.4px);
display: flex;
flex-direction: column;
justify-content: space-between;
gap: calc(1.6vw + -0.1px);
> :nth-child(1){
    display: none;
    padding: 0;
}
> :nth-child(1) >.navContainer{
    margin: 0;

}

.favplaerCont{
    display: grid;
    grid-template-columns: 1fr 3.5fr;
    height: 92vh;
    gap:calc(1.6vw + -0.1px);
}
aside{
}
aside div{
    width: calc(21vw + 1px);
}
main{
    background-color: #1E1E1E;
    border-radius: 20px;
    padding:calc(2vw + 0.1px) calc(0.9vw + 2px) 20px calc(0.9vw + 2px);
    /* height: 100vh; */
};
/* .mainPlayer{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(calc(17.5vw + 39.5px), 1fr));
    justify-content: space-around;
    gap:calc(0.9vw + 2px);
} */
.playerCard{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(calc(17.5vw + 39.5px), 1fr));
    justify-content: space-around;
    gap: calc(0.9vw + 2px);
}


@media (max-width:600px) {
> :nth-child(1){
    display: block;
}
aside{
        display: none;
}
.favplaerCont{
    display: block;
}
}
`