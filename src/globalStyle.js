import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}
html {
    scroll-behavior: smooth;
}
body {
    overflow-x: hidden;
}

body::-webkit-scrollbar {
    width: 10px;
}

body::-webkit-scrollbar-track {
    background: gray;
}

body::-webkit-scrollbar-thumb {
    background: #253D3D;
}
`;

export const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 5px 20px;

    @media screen and (max-width: 990px) {
        padding: 2px 10px;
    }
`

export const Button = styled.button`
    width: 40%;
    margin-top: 30px;
    padding: 8px 20px;
    font-size: 24px;
    border-radius: 2px;
    background: transparent;
    border: 2px solid rgba(255,255,255,0.6);
    cursor: pointer;
    outline: none;
    font-family: 'Raleway', sans-serif;
    letter-spacing: 5px;
    font-weight: 600;
    color: rgba(255,255,255,0.6);
    z-index: 2;

    &:hover {
        border: 2px solid rgba(255,255,255,0.9);
        background: rgba(255,255,255,0.1);
        color: rgba(255,255,255,0.9);
        transition: all 0.5s ease-in-out;
    }

    @media screen and (max-width: 1024px) {
        width: 100%;
        font-size: 20px;
        margin-bottom: 20px;
        border: 2px solid gray;
        color: gray;
    }
`