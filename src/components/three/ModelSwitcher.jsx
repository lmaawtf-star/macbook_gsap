import { useRef} from "react";
import {PresentationControls} from "@react-three/drei";
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";

import MacbookModel16 from "../models/Macbook-16.jsx";
import MacbookModel14 from "../models/Macbook-14.jsx";


const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

export const ModelSwitcher = ({ scale, isMobile }) => {

    const SCALE_LARGE_DESKTOP = 0.08;
    const SCALE_LARGE_MOBILE = 0.05;

    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();

    const showLargeMacbook = scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;


    const controlsConfig = {
        snap: true,
        speed: 1,
        zoom: 1,
        azimuth: [-Infinity, Infinity],
        config: {
            mass:1,
            tension: 0,
            friction: 26
        }
    }

    return (
        <>
            <PresentationControls  {...controlsConfig}>
                <group ref={largeMacbookRef}>
                    <MacbookModel16 scale={isMobile ? 0.05: 0.08} />
                </group>
            </PresentationControls>

            <PresentationControls  {...controlsConfig}>
                <group ref={smallMacbookRef}>
                    <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
                </group>
            </PresentationControls>

        </>
    )
}