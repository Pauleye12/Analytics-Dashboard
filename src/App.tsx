import Dashboard from "./pages/Dashboard";
import OnboardingScreen from "./pages/OnboardingScreen";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectsHome from "./pages/ProjectsHome";

import ProjectsWrapper from "./pages/ProjectsWrapper";
import NewProject from "./pages/NewProject";
import { AnimatePresence } from "motion/react";

function App() {
  return (
    <AnimatePresence>
      <BrowserRouter>
        <Routes>
          <Route key="landingPage" path="/" element={<LandingPage />} />

          <Route
            key="onboardingScreen"
            path="/signIn"
            element={<OnboardingScreen />}
          />
          <Route
            key="projectsWrapper"
            path="/projects"
            element={<ProjectsWrapper />}
          >
            <Route index element={<ProjectsHome />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="new_project" element={<NewProject />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
