import styled from 'styled-components';

import { FiFacebook } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si'

export const AboutSec = styled.div`
    padding: 15px 0px;
    /* background: linear-gradient(to bottom right, rgb(0, 43, 43), rgb(0,0,0)); */
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgb(0, 43, 43));

    @media screen and (max-width: 1024px) {
        /* background: linear-gradient(to top right, rgb(0, 0, 0), rgb(0, 43, 43)); */
        background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgb(0, 43, 43));
    }
`
export const AboutRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        justify-content: start;
    }
`

export const Heading = styled.h1`
    font-size: 50px;
    margin-bottom: 20px;
    font-weight: 300;
    letter-spacing: 3px;
    /* color: rgb(165,165,15); */
    color: rgba(255,255,255,0.8);

    @media screen and (max-width: 1024px) {
        margin: 20px 0px;
        font-size: 45px;
        margin-bottom: 20px;
        text-align: center;
    }
`

export const ImageWrapper = styled.div`
    display: flex;
    justify-self: flex-start;
    justify-content: center;
    align-items: center;
    height: 600px;
    width: 600px;

    @media screen and (max-width: 1024px) {
        margin-left: 60px;
        margin-top: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
        width: 300px;
    }
`;

export const ContactWrapper = styled.div`
    margin: 15px 0px;
`

export const MobileNumber = styled.p`
    letter-spacing: 3px;
    font-size: 25px;
    color: gray;
    margin-bottom: 10px;

    @media screen and (max-width: 1024px) {
        font-size: 20px;
        text-align: center;
        margin-bottom: 16px;
    }
`
export const Email = styled.p`
    letter-spacing: 3px;
    font-size: 25px;
    color: gray;
    margin-bottom: 10px;

    @media screen and (max-width: 1024px) {
        font-size: 20px;
        text-align: center;
        margin-bottom: 26px;
    }
`

export const SocialAccountsIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    margin: 20px 0px;

    @media screen and (max-width: 1024px) {
        /* z-index: 999; */
        /* width: 60%;
        margin: 20px auto; */
        justify-content: center;
    }
`

export const Icon = styled.a`
    padding: 2px;
    text-decoration: none;
    z-index: 999;

    &:not(:nth-child(1)) {
        margin-left: 20px;
    }

    &:nth-child(1) {
        border: 2px solid #4267B2;
        color: #4267B2;
        background: transparent;
        height: 50px;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;

        &:hover {
            border: 2px solid transparent;
            background: #4267B2;
            color: #fff;
            transition: all .3s ease-in-out;
        }

        @media screen and (max-width: 1024px 880px) {
            height: 40px;
            width: 40px;
        }
    }

    &:nth-child(2) {
        border: 2px solid #BB001B;
        color: #BB001B;
        background: transparent;
        height: 50px;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;

        &:hover {
            border: 2px solid transparent;
            background: #BB001B;
            color: #fff;
            transition: all .3s ease-in-out;
        }

        @media screen and (max-width: 1024px 880px) {
            height: 40px;
            width: 40px;
        }
    }

    &:nth-child(3) {
        border: 2px solid #25D366;
        color: #25D366;
        background: transparent;
        height: 50px;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;

        &:hover {
            border: 2px solid transparent;
            background: #25D388;
            color: #000;
            transition: all .3s ease-in-out;
        }

        @media screen and (max-width: 1024px 880px) {
            height: 40px;
            width: 40px;
        }
    }
`
export const Facebook = styled(FiFacebook)`
    font-size: 30px;

    @media screen and (max-width: 1024px 880px) {
        font-size: 23px;
    }
`

export const Gmail = styled(SiGmail)`
    font-size: 25px;

    @media screen and (max-width: 1024px 880px) {
        font-size: 18px;
    }
`

export const Whatsapp = styled(FaWhatsapp)`
    font-size: 25px;

    @media screen and (max-width: 1024px 880px) {
        font-size: 18px;
    }
`