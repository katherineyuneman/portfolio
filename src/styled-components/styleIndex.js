import styled from 'styled-components'

const GeneralStyle = styled.div`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: white;
    text-align: center;
`
const content_width= `1000px`;
const breakpoint = `799px`;
const nav_height = `300px`;
const nav_background = `#262626`;
const nav_font_color = `#ffffff`;
const link_hover_color = `#2581DC`;

const NewContainer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500;700&display=swap');

font-size: 15;

.navigation {
  min-height: ${nav_height};
  background: ${nav_background};
}

.brand {
  position: absolute;
  padding-left: 20px;
  margin: 20px;
  float: left;
  width: 50%;
  /* line-height: ${nav_height}; */
  text-transform: uppercase;
  font-size: 1.4em;
  justify-content: center;
  a,
  a:visited {
    color: ${nav_font_color};
    text-decoration: none;
  }
  img {
        justify-content: center;
        text-align: center;
        min-width: 125px;
        max-width: 200px;
        float: left;
        width: 30%;
        border-radius: 50%;
        background-color: green;
    }
    h3{
        min-width: 120px;
        text-align: center;
        width: 30%;
        max-width: 200px;
        color: gray;
    }
}


    


.nav-container {
  max-width: ${content_width};
  margin: 0 auto;
}

nav {
  float: right;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      float: left;
      position: relative;
      a,
      a:visited {
        display: block;
        padding: 0 20px;
        line-height: ${nav_height};
        background: ${nav_background};
        color: ${nav_font_color};
        text-decoration: none;
        &:hover {
          background: ${link_hover_color};
          color: ${nav_font_color};
        }
        &:not(:only-child):after {
          padding-left: 4px;
          content: ' ▾';
        }
      } // Dropdown list
      ul li {
        min-width: 190px;
        a {
          padding: 15px;
          line-height: 20px;
        }
      }
    }
  }
}

// Dropdown list binds to JS toggle event
.nav-dropdown {
  position: absolute;
  display: none;
  z-index: 1;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
}

/* Mobile navigation */

// Binds to JS Toggle
.nav-mobile {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  background: ${nav_background};
  height: ${nav_height};
  width: ${nav_height};
}
@media only screen and (max-width: 798px) {
  // Hamburger nav visible on mobile only
  .nav-mobile {
    display: block;
  }
  nav {
   width: 100%;
    padding: ${nav_height} 0 15px;
    ul {
      display: none;
      li {
        float: none;
        a {
          padding: 15px;
          line-height: 20px;
        }
        ul li a {
          padding-left: 30px;
        }
      }
    }
  }
  .nav-dropdown {
    position: static;
  }
}
@media screen and (min-width: ${breakpoint}) {
    .navigation {
        background: ${nav_background};
    }
  .nav-list {
    display: block !important;
  }
}
#nav-toggle {
  position: absolute;
  left: 18px;
  top: 22px;
  cursor: pointer;
  padding: 10px 35px 16px 0px;
  span,
  span:before,
  span:after {
    cursor: pointer;
    border-radius: 1px;
    height: 5px;
    width: 35px;
    background: ${nav_font_color};
    position: absolute;
    display: block;
    content: '';
    transition: all 300ms ease-in-out;
  }
  span:before {
    top: -10px;
  }
  span:after {
    bottom: -10px;
  }
  &.active span {
    background-color: transparent;
    &:before,
    &:after {
      top: 0;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
}


// Page content 
article {
  max-width: ${content_width};
  margin: 0 auto;
  padding: 10px;
}



@media only screen and (min-width: 481px) {
    
}
@media only screen and (min-width: 920px) {
    .navigation {
  min-height: ${nav_height};
  background: ${nav_background};
}
    
}
@media only screen and (min-width: 1030px) {
    
}
@media only screen and (min-width: 1240px) {
    
}


`





const LeftHeader = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500;700&display=swap');

@media screen and (min-width: 1025px) {
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
    .projectInfo{
        text-align: left;
    }
}
`

    export { NewContainer, GeneralStyle, LeftHeader}