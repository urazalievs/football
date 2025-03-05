import styled, { css } from "styled-components";


export const SMainHeader = styled.div<{isLight:boolean}>`
    display: none;  
   padding: calc(1vw + 14px) 0 0 0;
   position: relative;
.burgerInfo{
    display: none;
    width: 100%;
    position: absolute;
    top:calc(4.9vw + 29.2px);
    left: 0;
    background-color:rgba(0, 0, 0, 0.39);
   }
.burgerInfo.display{
    display: block;
}
.navContainer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: calc(4vw + 15px);
    background-color: #1E1E1E;
    margin:0 calc(2vw + 0.4px);
    padding: calc(1vw + 3px);
    border-radius: 20px;
    }
.navBurger{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}
.navBurger img{
    width: calc(11vw + 23px);
}
.burger{
    display: none;
    position: relative;
    z-index: 50;
    align-items: center;
    width: calc(0.9vw + 7px);
    height: calc(1vw + 3px);
}
.burger span{
    display: block;
    width: 100%;
    height: calc(0.2vw + -0.4px);
    transform: scale(1);
    background-color: white;
 }
 .burger::before, .burger::after{
    content: '';
    position: absolute;
    height: calc(0.2vw + -0.4px);
    width: 100%;
    background-color: white;
    transition: all 0.3s ease 0s;
 }
 .burger::before{top:0;}
 .burger::after{bottom:0;}
.burger.activ span{transform: scale(0);}
.burger.activ::before{
    top:50%;
    transform: rotate(-45deg) translate(0, -50%);
}
.burger.activ::after{
    bottom:50%;
    transform: rotate(45deg) translate(0, 50%);
}
ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: calc(1vw + 4px);
    
}
li {
    width: calc(5vw + 32px);
    text-align: center;
    list-style: none;
    color: white;
    padding: calc(0.7vw + 1px) calc(1vw + -3px);
    background-color: #333131;
    border-radius: 17px;
    border: 1px solid #333131;
    font-size: calc(0.9vw + 4px);
}
li.activ{
    border: 1px solid #C3CC5A;
}
.mainNav{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
}
.headerNavPage{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: calc(0.4vw + -0.1px);
    padding: calc(0.7vw + 1px) calc(1.5vw + -3px);
    border-radius: 15px;
    background-color: #333131;
    font-size: calc(0.9vw + 3.3px);
}
.headerNavPage img{
    width: calc(1.3vw + 4px)
}
.headerNavPage a.navtext{
    color: #C3CC5A;
}
${({isLight})=>
isLight &&
css`
.navContainer{
    background-color: #666;
}
.headerNavPage{
    background-color: #999;
}
.headerNavPage a{
    color: black;
}
`
}
@media (max-width: 1000px) {
        display: block;
}
@media (max-width:500px){
    .burger{
        display: flex;
    }
    .navBurger img{
        display: none;
    }
}
`