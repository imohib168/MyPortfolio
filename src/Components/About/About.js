import React from 'react';
import AboutImage from './../../SVGs/About';
import { Container, Button } from '../../globalStyle';
import {
    AboutSec,
    AboutRow,
    DescriptionContainer,
    Heading,
    ParagraphDesc,
    ImageWrapper,
    ToContact
} from './About.elements';

const About = () => {

    return (
        <AboutSec id="about">
            <Container>
                <AboutRow>
                    <DescriptionContainer>
                        <Heading>Hello, I'm Mohib Ismail</Heading>
                        <ParagraphDesc>
                            An undergraduate Computer Science student and have around a year of experience in front-end Development. I'm very passionate about my general love for building web apps using HTML5, CSS3, JS, TS, REACTJS and other related technologies. Further looking forward to learn new skills and add them to my skill-set.
                        </ParagraphDesc>
                        <ToContact href="#contact">
                            <Button>
                                Contact
                            </Button>
                        </ToContact>
                    </DescriptionContainer>
                    <ImageWrapper>
                        <AboutImage />
                    </ImageWrapper>
                </AboutRow>
            </Container>
        </AboutSec>
    )
}

export default About;
