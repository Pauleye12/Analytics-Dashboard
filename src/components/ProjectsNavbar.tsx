import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { Activity } from "lucide-react";
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
        <h1 className="flex items-center">
          {" "}
          <Activity className="text-blue-600" size={30} />{" "}
          <span className="text-2xl font-bold ml-2 ">Mofelytics</span>{" "}
        </h1>

        <div className="flex text-gray-500 font-medium justify-between items-center gap-5 md:max-w-[400px] md:w-full text-lg">
          <Link className="hidden md:flex " to={"#"}>
            Features
          </Link>
          <Link className="hidden md:flex " to={"#"}>
            Documentation
          </Link>
          <div className="flex items-center justify-center gap-4     ">
            <button className="inline-flex p-[7px] items-center  border border-solid border-gray-500 rounded-full text-base font-medium  shadow-sm     transition-colors">
              <span className="zondicons--notification"></span>
            </button>
            <button
              onClick={handleSignOut}
              className="inline-flex items-center  border border-transparent rounded-full text-base font-medium  shadow-sm text-white bg-gray-500   transition-colors"
            >
              <span className="qlementine-icons--user-16"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProjectsNavbar;
