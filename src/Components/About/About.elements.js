import styled from 'styled-components';

export const AboutSec = styled.div`
    padding: 25px 0px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgb(0, 43, 43));

    @media screen and (max-width: 1000px) {
        background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgb(0, 43, 43));
    }
`
export const AboutRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        justify-content: start;
    }
`
export const DescriptionContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`
export const Heading = styled.h1`
    font-size: 35px;
    margin-bottom: 30px;
    font-weight: 300;
    letter-spacing: 2px;
    /* color: rgb(165,165,5); */
    color: rgba(255,255,255,0.8);

    @media screen and (max-width: 1000px) {
        margin: 20px 0px;
        font-size: 25px;
        margin-bottom: 10px;
    }
`

export const ParagraphDesc = styled.p`
    font-size: 24px;
    width: 90%;  
    line-height: 35px;
    letter-spacing: 2px;
    color: rgb(195,195,195);
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;
    font-weight: 200;

    @media screen and (max-width: 1000px) {
        width: 100%;
        line-height: 35px;
        margin-bottom: 25px;
        margin-top: 25px;
    }
`
export const ImageWrapper = styled.div`
    display: flex;
    justify-self: flex-start;
    height: 600px;
    width: 600px;

    @media screen and (max-width: 1000px) {
        display: none;
        /* margin-left: -80px; */
        /* justify-content: center; */
        /* align-items: center; */
        /* height: 200px; */
        /* width: 300px; */
        /* z-index: 1; */
    }
`;

export const ToContact = styled.a`
    text-decoration: none;  

    @media screen and (max-width: 900px) {
        margin-bottom: 60px;
        z-index: 2;
    }

    &:hover {
        color: black;
    }
`