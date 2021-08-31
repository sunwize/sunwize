import Header from "../components/Header.js";
import Introduction from "../components/Introduction.js";
import Projects from "../components/Projects.js";
import {SectionDivider} from "../assets/js/StyledComponents.js";
import Technologies from "../components/Technologies.js";
import AboutMe from "../components/AboutMe.js";
import Footer from "../components/Footer.js";
import {useEffect} from "react";

export default function Home() {
    useEffect(() => {
        document.title = 'Colin Clisson';
    }, []);

    return (
        <div className="lg:w-3/5 container lg:mx-auto p-5 lg:px-0 pb-20">
            <Header/>

            <div className="mt-10 lg:mt-32">
                <Introduction />
            </div>

            <SectionDivider divider />

            <div id="projects">
                <Projects />
            </div>

            <SectionDivider divider />

            <div id="technologies">
                <Technologies />
            </div>

            <SectionDivider divider />

            <div id="about-me">
                <AboutMe />
            </div>

            <hr className="opacity-20 my-14" />

            <div id="footer">
                <Footer />
            </div>
        </div>
    )
}
