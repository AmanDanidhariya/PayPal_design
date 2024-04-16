import "./App.css";
import "./locomotive-scroll.css";
import LocomotiveScroll from "locomotive-scroll";
import Business from "./components/Business";
import FeatureModule from "./components/FeatureModule";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Orchestration from "./components/Orchestration";
import PaymentMethod from "./components/PaymentMethod";
import RiskManagement from "./components/RiskManagement";
import Security from "./components/Security";
import { useEffect } from "react";
import VideoContent from "./components/VideoContent";
import Testimonials from "./components/Testimonials";
import About_us from "./components/About_us";
import Marketing from "./components/Marketing";

function App() {
  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector("#main_div"),
  //     smooth: true,
  //   });
  //   return () => {
  //     scroll.destroy();
  //   };
  // }, []);

  return (
    <div id="main_div" className="box-border m-0 overflow-hidden ">
      <Navbar />
      <HeroSection />
      <Business />
      <PaymentMethod />
      <Security />
      <Orchestration />
      <RiskManagement />
      <FeatureModule />
      <VideoContent />
      <Testimonials />
      <About_us />
      <Marketing />
    </div>
  );
}

export default App;
