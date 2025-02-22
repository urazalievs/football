import styled from "styled-components";


export const SLigftTheme = styled.div`
text-align: center;
.rihghtNavTheme{
    width: calc(15vw + 29px);
    padding: calc(0.3vw + 1px) 5px;
    background-color: #333131;
    border-radius: 15px;
    display: flex;
    justify-content:center;
    align-items: center;
    gap:calc(0.5vw + 2px);
}
.rightTheme{
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: calc(0.3vw + 1px);
    padding: calc(0.7vw + 1px) calc(1.5vw + -1px);
    border-radius: 15px;
    font-size: calc(0.9vw + 4px);
}
.rightTheme img {
    width:calc(1.3vw + 4px);
}
.darkTheme{
    background-color: #1E1E1E;
}
.rightTheme.lightTheme{
    background-color: white;
    color: black;
}
`