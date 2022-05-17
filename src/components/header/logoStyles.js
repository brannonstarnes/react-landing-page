import styled from "styled-components";

const media = {desktop: '@media(min-width:1000px)'}


export const LogoWrap = styled.div`
    font-family: 'Martel', serif;
    font-size: medium;
    border: 1px solid green;
    align-items: center;
    justify-content: center;
    

    ${media.desktop}{
        font-size: large;
    }
`;