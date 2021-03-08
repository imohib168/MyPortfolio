import React from 'react';
import InfoSection from './../InfoSection';
import {
    homeObjOne,
    homeObjTwo,
    homeObjThree,
    homeObjFour,
    homeObjFive,
    homeObjSix,
    homeObjSeven,
    homeObjEight,
    homeObjNine,
    homeObjTen,
    homeObjEleven,
} from './Data';

const ReactProjects = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
            <InfoSection {...homeObjFive} />
            <InfoSection {...homeObjSix} />
            <InfoSection {...homeObjSeven} />
            <InfoSection {...homeObjEight} />
            <InfoSection {...homeObjNine} />
            <InfoSection {...homeObjTen} />
            <InfoSection {...homeObjEleven} />
        </>
    )
}

export default ReactProjects;

