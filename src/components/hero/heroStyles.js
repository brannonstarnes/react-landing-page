import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
export const HeroWrap = styled.div`
    border: 1px solid red;    
    position: relative;
    font-family: "Martel", serif;
    color: white; 
    img {
        object-fit: cover;
        max-width: 100vw;
        max-heigth: 100vh;
        z-index: 0;
    }

    h2 {
        position: absolute;
        top: 25%;
        left: 10%;
        border: 1px solid blue;
        z-index: 1;
        font-family: 'Martel', serif;
    }
    
    .fade-in {
        opacity: 0;
        transition: opacity 1000ms ease-in;
    }   
    
    .heroEmailForm {
        display: flex;
        flex-flow: row nowrap;
        border: 2px solid yellow;
        width: 50%;
        position: absolute;
        bottom: 20%;
        left: 10%;
        z-index: 2;
    }

    .emailInput{
        width: 90%;
    }
    

`