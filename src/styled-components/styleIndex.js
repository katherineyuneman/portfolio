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
        color: black;
        nav{
            text-align: right;
            width: 10%;
            position: fixed;
            top: 40%;
            /* left: 16.5%; */
            padding-left: 12%;
            li{
                list-style-type: none;
                text-align: right;
                padding-top: 2em;
            }
            
        }
    }
    .rightSideUp {
        position: fixed;
        z-index: 2;
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
        position:fixed;
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
        display: flex;
        height: 100%;
        width: 75%;
        position: absolute;
        justify-content: center;
        z-index: 1;
        top: 0;
        overflow-x: scroll;
        padding-top: 10%;
        right: 0;
        background-color: white;
        color: black;
        p {
            color: green;
        }
        .rightContentContainer{
            top: 50%;
            left: 50%;
            padding-top: 30%;
            /* background-color: blue; */
            height: 20%;
            width: 75%;
            /* justify-content: center;
            
            
            
            
            padding-right: 20%;
            padding-left: 20%; */
            text-align: center;
            border-radius: 4px;
            border: black;
            /* padding-left: 50%;
            padding-top: 40%;
            width: 50%;
            height: auto;
            top: 40% */
    }
    }
    .namePosition {
        z-index: 2;
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