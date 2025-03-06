// import { useState } from "react";
// import { ChevronDown } from "lucide-react";
import ProjectPreviewCard from "../components/ProjectPreviewCard";
// import HistoryPreviewCard from "../components/HistoryPreviewCard";
import { useNavigate } from "react-router";

import { motion } from "motion/react";

const onboardingScreenVariants = {
  initial: { opacity: 0, x: "100%" },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeInOut", when: "beforeChildren" },
  },
  exit: {
    opacity: 0,
    x: "-100%",
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

// const whyDiffrentWrapperVariants = {
//   initial: { opacity: 0 },
//   inView: {
//     opacity: 1,
//     transition: { duration: 0.1, ease: "easeInOut", staggerChildren: 0.2 },
//   },
// };

const projectDets = [
  {
    img: "",
    title: "Analytics Dashboard",
    url: "analytics-dashboard-taupe-alpha.vercel.app",
    gitUrl: "Pauleye12/Analytics-Dashboard",
    commitMSG: "added on boarding page and google sign in",
    date: "Feb 10",
    branch: "main",
  },
  {
    img: "",
    title: "Analytics Dashboard",
    url: "analytics-dashboard-taupe-alpha.vercel.app",
    gitUrl: "Pauleye12/Analytics-Dashboard",
    commitMSG: "added on boarding page and google sign in",
    date: "Feb 10",
    branch: "main",
  },
  {
    img: "",
    title: "Analytics Dashboard",
    url: "analytics-dashboard-taupe-alpha.vercel.app",
    gitUrl: "Pauleye12/Analytics-Dashboard",
    commitMSG: "added on boarding page and google sign in",
    date: "Feb 10",
    branch: "main",
  },
  {
    img: "",
    title: "Analytics Dashboard",
    url: "analytics-dashboard-taupe-alpha.vercel.app",
    gitUrl: "Pauleye12/Analytics-Dashboard",
    commitMSG: "added on boarding page and google sign in",
    date: "Feb 10",
    branch: "main",
  },
];

// const previews = [
//   {
//     title: "fix images not clickable",
//     number: "2",
//     hash: "9q5hcz2wx",
//   },
//   {
//     title: "fix images not clickable",
//     number: "2",
//     hash: "9q5hcz2wx",
//   },
// ];

const ProjectsHome = () => {
  const navigate = useNavigate();
  // const [filterParam, setFilterParam] = useState("Add Filter");
  return (
    <motion.div
      variants={onboardingScreenVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-gray-50 dashbg min-h-screen text-gray-600 "
    >
      <div className="max-w-7xl  flex gap-7 flex-col w-full mx-auto pt-[80px] px-4 py-8">
        <h1 className="text-2xl font-medium text-blue-600 ">Welcome, Mofe</h1>
        {/* <div >

        </div> */}
        <div className=" flex flex-col md:flex-row justify-between md:gap-10 gap-7 items-center w-full ">
          <div className="flex w-full  items-center gap-10">
            <div className="max-w-[700px]  w-full px-4 py-2 bg-white border border-solid border-gray-200 shadow-sm rounded-lg flex gap-3 ">
              <button className="flex justify-center items-center">
                <span className="si--search-line text-blue-600 "></span>
              </button>

              <input
                className="bg-transparent w-full outline-none   "
                type="text"
                placeholder="Search projects"
                name="searchProjects"
                id="searchProjects"
              />
            </div>
            {/* <button className="border hidden border-solid border-gray-200 shadow-sm bg-white rounded-lg px-3 p-2 md:flex items-center gap-2 hover:bg-slate-50 transition-all duration-300 hover:translate-y-0.5  ">
              <h1>{filterParam}</h1>
              <ChevronDown className="text-blue-600" />
            </button> */}
          </div>
          {/* <div className=" mobile w-full md:hidden flex justify-between items-center gap-3 ">
            <button className="border md:hidden border-solid border-gray-200 shadow-sm bg-white rounded-lg px-3 p-2 flex items-center gap-2 hover:bg-slate-50 transition-all duration-300 hover:translate-y-0.5  ">
              <h1>{filterParam}</h1>
              <ChevronDown className="text-blue-600" />
            </button>
            <button
              onClick={() => navigate("new_project")}
              className={`bg-blue-600 md:hidden  w-[180px]  text-white justify-items-end rounded-lg px-4 py-2 hover:scale-105 hover:bg-blue-700 duration-300   ${
                projectDets ? "animate-none" : "animate-bounce"
              }animate-bounce `}
            >
              Add New Project
            </button>
          </div> */}
          <button
            onClick={() => navigate("new_project")}
            className={`bg-blue-600 self-start  flex  w-[180px]  text-white justify-items-end rounded-lg px-4 py-2 hover:scale-105 hover:bg-blue-700 duration-300   ${
              projectDets ? "animate-none" : "animate-bounce"
            }animate-bounce `}
          >
            Add New Project
          </button>
        </div>

        {/* <div className=" w-full  flex flex-col gap-6 ">
            <h1 className="text-gray-900 font-semibold ">Recent History</h1>
            <div className="border w-full border-solid border-gray-200 rounded-xl flex flex-col items-center p-1 pb-0 bg-white">
              {previews.map((preview) => (
                <HistoryPreviewCard
                  key={preview.hash}
                  title={preview.title}
                  number={preview.number}
                  hash={preview.hash}
                />
              ))}
            </div>
          </div> */}
        <div className=" mt-8 md:mt-0 flex flex-col gap-6">
          <h1 className="text-gray-900 font-semibold ">Projects</h1>
          <div
            // variants={whyDiffrentWrapperVariants}
            // initial="initial"
            // whileInView="inView"
            // viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 items-center h-full gap-5"
          >
            {projectDets ? (
              projectDets.map((det, index) => (
                <ProjectPreviewCard key={index} det={det} />
              ))
            ) : (
              <div className="flex flex-col gap-9 w-full items-center">
                <h1 className="text-center text-3xl font-semibold text-gray-800 max-w-[400px] w-full ">
                  Insights start with action—add your first project{" "}
                  <span className="text-blue-600">now!</span>
                </h1>
                <button className="bg-blue-600 w-[180px] text-white justify-items-end rounded-lg px-4 py-2 hover:scale-105 hover:bg-blue-700 duration-300">
                  Add New Project
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsHome;
