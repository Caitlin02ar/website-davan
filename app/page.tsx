import Image from "next/image";
import Hero from "./components/home/Hero";
import RunningText from "./components/home/RunningText";
import FourPillars from "./components/home/FourPillars";
import Client from "./components/home/Client";
import CTA from "./components/common/CTA";
import Footer from "./components/common/Footer";
import Why from "./components/home/Why";

export default function Home() {
  return (
    <main id="home">
      <Hero/>
      <RunningText/>
      <Why/>
      <FourPillars/>
      <Client/>
      <CTA/>
      <Footer/>
    </main>
  );
}
