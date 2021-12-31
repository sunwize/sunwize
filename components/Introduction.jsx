import {translate} from "../assets/js/utils.js";
import {SectionTitle} from "../assets/js/StyledComponents.js";
import AnimatedBackground from "./AnimatedBackground.jsx";
import {useEffect, useState} from "react";

export default function Introduction() {
    const [isLargeLayout, setIsLargeLayout] = useState(false);

    useEffect(() => {
        setIsLargeLayout(window.innerWidth > 560);
    }, []);

    return (
        <div className="flex items-center">
            <div className="lg:w-3/4">
                <SectionTitle main>
                    <span>Colin Clisson</span>
                </SectionTitle>

                <div className="mt-5 opacity-50 text-xl leading-8 font-light tracking-wider">
                    {
                        translate([
                            `Welcome to my Portfolio. Here you can find my major achievements as well as my areas of expertise. Feel free to explore it!`,
                            `Bienvenue dans mon Portfolio. Vous y trouverez mes réalisations majeures ainsi que mes domaines de compétences. Bonne visite !`
                        ])
                    }
                </div>

                <div className="mt-8">
                    <button onClick={() => window.open('/cv_colin_clisson.pdf')} className="bg-gradient-to-r from-purple-500 to-blue-400 px-14 py-3 rounded-full hover:scale-105 active:scale-90 transition transform duration-150">
                        <span className="text-xl font-bold tracking-wider">{translate('Download my Resume|Télécharger mon CV')}</span>
                    </button>
                </div>
            </div>

            {
                isLargeLayout && (
                    <div style={{marginLeft: -120, width: '35%', height: '100%'}}>
                        <AnimatedBackground />
                    </div>
                )
            }
        </div>
    )
}
