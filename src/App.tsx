import Dashboard from "./pages/Dashboard";
import OnboardingScreen from "./pages/OnboardingScreen";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectsHome from "./pages/ProjectsHome";

import ProjectsWrapper from "./pages/ProjectsWrapper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/signIn" element={<OnboardingScreen />} />
        <Route path="/projects" element={<ProjectsWrapper />}>
          <Route index element={<ProjectsHome />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
