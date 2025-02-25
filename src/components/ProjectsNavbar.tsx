import { useEffect, useState } from "react";

import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { Activity } from "lucide-react";
import { Link } from "react-router-dom";
import app from "../firebaseconfig";

const auth = getAuth(app);
const ProjectsNavbar = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
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
  const [isScrolled, setIsScrolled] = useState(false);
  return (
    <header
      className={`fixed z-40 flex items-center justify-center top-0 left-0 w-full bg-transparent px-3  py-4 transition-all ${
        isScrolled
          ? "backdrop-blur-md bg-[#ffffffb4] shadow-md pt-4 "
          : " bg-transparent "
      } `}
    >
      <div className="max-w-[1300px] w-full gap-9 flex justify-between items-center ">
        <Link to={"/"} className="flex items-center">
          {" "}
          <Activity className="text-blue-600" size={30} />{" "}
          <span className="text-2xl font-bold ml-2 ">Mofelytics</span>{" "}
        </Link>

        {/* <Link className="hidden md:flex " to={"#"}>
            Features
          </Link> */}

        <div className="flex text-lg text-gray-500 font-medium items-center justify-center gap-6     ">
          <a
            href="https://github.com/scmofeoluwa/minalytics"
            className="hidden mr-7 md:flex self-end "
            target="_blank"
          >
            Documentation
          </a>
          <button className="inline-flex p-[7px] items-center  border border-solid border-blue-600 rounded-full text-base font-medium  shadow-sm     transition-colors">
            <span className="zondicons--notification text-blue-600  "></span>
          </button>
          <button
            onClick={handleSignOut}
            className="inline-flex items-center  border border-transparent rounded-full text-base font-medium  shadow-sm text-white    transition-colors"
          >
            <span className="qlementine-icons--user-16 text-blue-600 "></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default ProjectsNavbar;
