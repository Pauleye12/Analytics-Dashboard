import ProjectsNavbar from "../components/ProjectsNavbar";

import { Outlet } from "react-router-dom";

// const provider = new GoogleAuthProvider();

const ProjectsWrapper = () => {
  return (
    <div className="bg-gray-50">
      <ProjectsNavbar />
      <Outlet />
    </div>
  );
};

export default ProjectsWrapper;
