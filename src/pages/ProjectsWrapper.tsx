import ProjectsNavbar from "../components/ProjectsNavbar";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useNavigate } from "react-router";
import app from "../firebaseconfig";

// const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const ProjectsWrapper = () => {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
      } else {
        // User is signed out
        navigate("/signIn");
      }
    });
  }, [navigate]);
  return (
    <div className="bg-gray-50">
      <ProjectsNavbar />
      <Outlet />
    </div>
  );
};

export default ProjectsWrapper;
