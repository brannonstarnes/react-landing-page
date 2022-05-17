import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
export const HeroWrap = styled.div`
    
    img {
        object-fit: cover;
        max-width: 100vw;
        max-heigth: 100vh;
        z-index: 0;
    }

    h2 {
        z-index: 1;
        position: absolute;
        font-family: 'Martel', serif;
        top: 40%;
        left: 10%;
    }
    .fade-in {
        opacity: 0;
        transition: opacity 1000ms ease-in;
    }   
`