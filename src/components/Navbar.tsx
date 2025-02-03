import { Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
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
          <Link
            className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            to={"/dashboard"}
          >
            LogIn
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
