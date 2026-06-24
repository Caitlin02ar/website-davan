
import HeroAbout from "../components/about/HeroAbout";
import AboutDavan from "../components/about/AboutDavan";
import AboutSlogan from "../components/about/AboutSlogan";
import Principles from "../components/about/Principles";
import HowWeWork from "../components/about/HowWeWork";

export default function About(){
    return(
        <main>
            <HeroAbout/>
            <AboutDavan/>
            <AboutSlogan/>
            <Principles/>
            <HowWeWork/>
        </main>
    )
}