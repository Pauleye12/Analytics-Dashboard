import Navbar from "./components/Navbar";
import Features from "./HomeSections/Features";
import Footer from "./HomeSections/Footer";
import Herosection from "./HomeSections/Herosection";
import WhyDiffrent from "./HomeSections/WhyDiffrent";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Herosection />
      <Features />
      <WhyDiffrent />
      <Footer />
    </div>
  );
};

export default LandingPage;
