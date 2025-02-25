import Navbar from "../components/Navbar";
import Features from "../HomeSections/Features";
import Footer from "../HomeSections/Footer";
import Herosection from "../HomeSections/Herosection";
import WhyDiffrent from "../HomeSections/WhyDiffrent";
import { motion } from "motion/react";

const landingPageVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut", when: "beforeChildren" },
  },
  exit: {
    opacity: 0,
    x: "-100%",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const LandingPage = () => {
  return (
    <motion.div
      variants={landingPageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-gray-50"
    >
      <Navbar />
      <Herosection />
      <Features />
      <WhyDiffrent />
      <Footer />
    </motion.div>
  );
};

export default LandingPage;
