import styled from 'styled-components'

const GeneralStyle = styled.div`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: white;
    text-align: center;

    
`

const LeftHeader = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500;700&display=swap');

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
        nav{
            position: absolute;
            top: 40%;
            /* left: 16.5%; */
            padding-left: 21%;
            li{
                list-style-type: none;
                text-align: right;
                padding-top: 2em;
            }
            
        }
    }
    .rightSideUp {
        position: absolute;
        z-index: 5;
        top: 20%;
        left: 24.5%;
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
        left: 25%;
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
        background-color: white;
        color: black
    }
    .namePosition {
        float: left;
        width: 30%;
        justify-content: center;
        display: block;
        font-family: "Josefin Sans";
        font-size: 30px;
        position: fixed;
        z-index: 6;
        top: 30%;
        left: 10%;
        text-align: center;
    }
    .white{
        margin-right: 1em;
        color: white;
        background-color: #FAD02C;
    }
    .black{
        color: black;
        background-color: none;
    }
    `

    export {
        GeneralStyle, LeftHeader
    }