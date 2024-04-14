import "./App.css";
import Business from "./components/Business";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PaymentMethod from "./components/PaymentMethod";
import Security from "./components/Security";

function App() {
  return (
    <div className="box-border m-0 overflow-hidden ">
      <Navbar />
      <HeroSection />
      <Business />
      <PaymentMethod />
      <Security />
    </div>
  );
}

export default App;
