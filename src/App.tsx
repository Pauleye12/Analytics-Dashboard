import Dashboard from "./Dashboard";
import OnboardingScreen from "./HomeSections/OnboardingScreen";
import LandingPage from "./LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signIn" element={<OnboardingScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
