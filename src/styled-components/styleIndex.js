import styled from 'styled-components'

const GeneralStyle = styled.div`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: white;
    text-align: center;

    
`

const LeftHeader = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Montserrat:ital,wght@1,500&family=Playfair+Display:ital,wght@1,800&display=swap');
  /* background: white;
  color: #000080;
  position: fixed;
  top: 0;
  height: 100px;
  line-height: 20px;
  width: 100vw;
  /* z-index: 10; */
  /* border-bottom: double 10.5px #E7717D; */ */

    .centeredName{
    position: absolute;
    z-index: 4;
    top: 35%;
    left: 20%;
    transform: translate(-50%, -50%);
    text-align: center;
    border-radius: 50%;
     }
    .staticLeft {
        position:absolute;
        vertical-align:middle;
        width:100%;
        height:100%;
        left: 0;
        background-color: #FAD02C;
        color: white;
    }
    .rightSideUp {
    position: absolute;
    z-index: 5;
    top: 20%;
    left: 20%;
    transform: translate(-50%, -50%);
    text-align: center;
    border-radius: 50%;
    display: block;
    width: 175px;
    height: 175px;
    }
    .upsideDown {
    position:absolute;
    z-index: 4;
    top: 20%;
    left: 20%;
    transform: translate(-50%, -50%);
    text-align: center;
    border-radius: 50%;
    display: none;
    width: 175px;
    height: 175px;
    }
    .right {
        height: 100%;
  width: 75%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: scroll;
  padding-top: 10%;
    right: 0;
    background-color: rgb(255, 255, 255);
    color: black
    }
    `

    export {
        GeneralStyle, LeftHeader
    }