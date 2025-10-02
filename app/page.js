import Image from "next/image";
import Navbar from "./components/ui/navbar";
import HeroShowcase from "./components/home/heroShowcase";
import HeroShowcaseMd from "./components/home/heroShowcaseMd";
import EventExplorer from "./components/home/eventExplorer";
import AllEventSection from "./components/home/allEventSection";
import Footer from "./components/ui/footer";
export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <HeroShowcase className="block md:hidden"/>
      <HeroShowcaseMd className="hidden md:block"/>
      <EventExplorer/>
      <AllEventSection/>
      {/* <Footer/> */}
    </div>
  );
}
