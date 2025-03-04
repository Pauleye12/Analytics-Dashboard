import { Activity } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../firebaseconfig.ts";
import { motion } from "motion/react";

const auth = getAuth(app);
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
        //   setShowDropdown(false);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSignOut = (e: React.MouseEvent) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        navigate("/signIn");
        alert("Successfully signed out");
      })
      .catch((error) => {
        alert(`Sign out failed: ${error.message}`);
      });
  };

  // Animation config
  const navVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    initial: {
      y: -70,
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  return (
    <header
      className={`fixed z-40 flex items-center justify-center top-0 left-0 w-full bg-transparent px-3  py-4 transition-all ${
        isScrolled
          ? "backdrop-blur-md bg-[#ffffffb4] shadow-md pt-4 "
          : " bg-transparent "
      } `}
    >
      <motion.div
        variants={navVariants}
        initial="initial"
        animate="animate"
        className="max-w-[1300px] w-full gap-9 flex justify-between items-center "
      >
        <motion.div variants={linkVariants} className="flex items-center">
          <Link to={"/"} className="flex items-center">
            {" "}
            <Activity className="text-blue-600" size={30} />{" "}
            <span className="text-2xl font-bold ml-2 ">Mofelytics</span>{" "}
          </Link>
        </motion.div>

        {location.pathname == "/" ? (
          <motion.div
            variants={linkVariants}
            className="flex text-gray-500 font-medium justify-between items-center gap-5 md:max-w-[400px] md:w-full text-lg"
          >
            <motion.a
              variants={linkVariants}
              className="hidden md:flex "
              href="/#features"
            >
              Features
            </motion.a>
            <motion.a
              variants={linkVariants}
              className="hidden md:flex "
              href="https://github.com/scmofeoluwa/minalytics"
              target="_blank"
            >
              Documentation
            </motion.a>

            <motion.div variants={linkVariants} className="flex items-center">
              <Link
                className="inline-flex items-center px-5 py-[6px] border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                to={"/signIn"}
              >
                Log In
              </Link>
            </motion.div>
          </motion.div>
        ) : location.pathname.includes("/signIn") ? (
          <div className="flex text-gray-500 font-medium justify-end items-center gap-10 md:max-w-[400px] md:w-full text-lg">
            <a
              href="https://github.com/scmofeoluwa/minalytics"
              className="hidden md:flex "
              target="_blank"
            >
              Documentation
            </a>
          </div>
        ) : location.pathname.includes("/dashboard") ? (
          <div className="flex text-gray-500 font-medium justify-between items-center gap-5 md:max-w-[400px] md:w-full text-lg">
            <Link className="hidden md:flex " to={"#"}>
              Documentation
            </Link>
            <button
              onClick={handleSignOut}
              className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex text-gray-500 font-medium justify-between items-center gap-5 md:max-w-[400px] md:w-full text-lg">
            <Link className="hidden md:flex " to={"#"}>
              Features
            </Link>
            <Link className="hidden md:flex " to={"#"}>
              Documentation
            </Link>
            <Link
              className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              to={"/signIn"}
            >
              LogIn
            </Link>
          </div>
        )}
      </motion.div>
    </header>
  );
};

export default Navbar;
