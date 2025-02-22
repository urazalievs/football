import styled from "styled-components";


export const SRightSide = styled.div`
    position: fixed;
    height: 92%;
    padding: 31px 0 20px 0;
    background-color: #1E1E1E;
    width:calc(27vw + -85px);
    border-radius: 30px;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
.leftNavPage{
   cursor: pointer;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: calc(1vw + -0.4px);
    height: calc(1.8vw + 24px);
}
.leftNavPage img{
    width: calc(1.5vw + 4px);
}

.leftNavPage span {
    display: block;
    width: 7px;
    height: 70%;
    background-color: #1E1E1E;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
 }
 .leftNavPage span.bg{
    background-color: #C3CC5A;
 }
 .leftNavPage a {
    font-size: calc(0.9vw + 5px);
 }
 .leftNavPage a.navtext{
    color: #C3CC5A;
 }
 .rightNavCont{
    text-align: center;
    
 }
 .rightNavCont a img{
    margin-bottom: 20px;
    width: calc(11vw + 23px)
 }
 .brNav{
    width: 80%;
    height: 1px;
    background-color:#fff;
    margin: 30px auto;
 }
 .rightLightCont .rihghtNavTheme{
    margin: 0 auto;
 }
`