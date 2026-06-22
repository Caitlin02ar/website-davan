import Image from "next/image";
import Hero from "./components/home/Hero";
import RunningText from "./components/home/RunningText";
import FourPillars from "./components/home/FourPillars";

export default function Home() {
  return (
    <main id="home">
      <Hero/>
      <RunningText/>
      <FourPillars/>
    </main>
  );
}
