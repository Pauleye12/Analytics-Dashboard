import { Users, MousePointerClick, Globe, Link } from "lucide-react";
import { MetricCard } from "../components/MetricCard";
import { DataTable } from "../components/DataTable";
import { BarChart } from "../components/BarChart";
import type { AnalyticsData } from "../types/analytics";
// import { useNavigate } from "react-router";
import { useState } from "react";
import Settings from "../components/Settings";
import { motion } from "motion/react";

//firebase configs
// import app from "../firebaseconfig";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import Navbar from "../components/Navbar";
// const auth = getAuth(app);

const mockData: AnalyticsData = {
  totalVisitors: 25420,
  totalPageViews: 47891,
  topPages: [
    { path: "/home", views: 12500, uniqueVisitors: 8900 },
    { path: "/products", views: 8700, uniqueVisitors: 6200 },
    { path: "/about", views: 5400, uniqueVisitors: 4100 },
  ],
  topReferrers: [
    { source: "Google", visitors: 12500, percentage: 45 },
    { source: "Direct", visitors: 8700, percentage: 32 },
    { source: "Twitter", visitors: 4200, percentage: 23 },
  ],
  locations: [
    { country: "United States", visitors: 12500, percentage: 45 },
    { country: "United Kingdom", visitors: 5600, percentage: 22 },
    { country: "Germany", visitors: 4200, percentage: 18 },
  ],
  browsers: [
    { name: "Chrome", count: 15600, percentage: 62 },
    { name: "Firefox", count: 5200, percentage: 21 },
    { name: "Safari", count: 4300, percentage: 17 },
  ],
  operatingSystems: [
    { name: "Windows", count: 12400, percentage: 49 },
    { name: "MacOS", count: 8900, percentage: 35 },
    { name: "Linux", count: 4100, percentage: 16 },
  ],
  devices: [
    { name: "Desktop", count: 18200, percentage: 72 },
    { name: "Mobile", count: 5900, percentage: 23 },
    { name: "Tablet", count: 1300, percentage: 5 },
  ],
};

const onboardingScreenVariants = {
  initial: { opacity: 0, x: "100%" },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    x: "-100%",
    transition: { duration: 0.2, ease: "easeOut" },
  },
};
const Dashboard = () => {
  // const navigate = useNavigate();

  const [view, setView] = useState("Overview");

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // const uid = user.uid;
  //   } else {
  //     // User is signed out
  //     navigate("/signIn");
  //   }
  // });

  // const copyTrackingId = () => {
  //   navigator.clipboard.writeText("12345678910").then(() => {
  //     setIsCopied(true);
  //     setTimeout(() => setIsCopied(false), 2000);
  //   });
  // };

  // const handleSignOut = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   signOut(auth)
  //     .then(() => {
  //       navigate("/signIn");
  //       alert("Successfully signed out");
  //     })
  //     .catch((error) => {
  //       alert(`Sign out failed: ${error.message}`);
  //     });
  // };
  return (
    <motion.div
      variants={onboardingScreenVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-gray-50"
    >
      <div className="max-w-7xl mx-auto pt-[70px] px-4 py-8">
        <div className="w-full border-b border-solid border-gray-400 flex items-center mb-[30px] font-medium text-gray-600 pb-2 gap-4 ">
          <button
            className={`${
              view == "Overview" ? "text-blue-600 font-medium " : ""
            } hover:bg-blue-100 transition-all duration-300 px-3 py-1 rounded-md `}
            onClick={() => setView("Overview")}
          >
            Overview
          </button>
          <button
            className={`${
              view == "Settings" ? "text-blue-600 font-medium " : ""
            } hover:bg-blue-100 transition-all duration-300 px-3 py-1 rounded-md  `}
            onClick={() => setView("Settings")}
          >
            Settings
          </button>
        </div>

        {view == "Overview" ? (
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-5 items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Analytics Dashboard
                </h1>
                <p className="mt-2 text-gray-600">
                  Track your website's performance and user behavior
                </p>
              </div>
              <button className="px-4 h-fit py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer">
                Export Report
              </button>
            </div>

            {/* Key Metrics */}
            <div className="grid mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <MetricCard
                title="Total Visitors"
                value={mockData.totalVisitors.toLocaleString()}
                icon={Users}
                trend={{ value: 12.5, isPositive: true }}
              />
              <MetricCard
                title="Page Views"
                value={mockData.totalPageViews.toLocaleString()}
                icon={MousePointerClick}
                trend={{ value: 8.2, isPositive: true }}
              />
              <MetricCard
                title="Avg. Session Duration"
                value="4m 32s"
                icon={Globe}
                trend={{ value: 3.1, isPositive: true }}
              />
              <MetricCard
                title="Bounce Rate"
                value="32.5%"
                icon={Link}
                trend={{ value: 2.4, isPositive: false }}
              />
            </div>

            {/* Top Pages */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Top Pages
                </h2>
                <div className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer">
                  View All Pages
                </div>
              </div>
              <DataTable
                data={mockData.topPages}
                columns={[
                  { header: "Page", accessor: "path" },
                  { header: "Views", accessor: "views" },
                  { header: "Unique Visitors", accessor: "uniqueVisitors" },
                ]}
              />
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <BarChart
                title="Top Referrers"
                data={mockData.topReferrers.map((ref) => ({
                  label: ref.source,
                  value: ref.visitors,
                  percentage: ref.percentage,
                }))}
              />
              <BarChart
                title="Visitor Locations"
                data={mockData.locations.map((loc) => ({
                  label: loc.country,
                  value: loc.visitors,
                  percentage: loc.percentage,
                }))}
              />
            </div>

            {/* Technology Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <BarChart
                title="Browsers"
                data={mockData.browsers.map((browser) => ({
                  label: browser.name,
                  value: browser.count,
                  percentage: browser.percentage,
                }))}
              />
              <BarChart
                title="Operating Systems"
                data={mockData.operatingSystems.map((os) => ({
                  label: os.name,
                  value: os.count,
                  percentage: os.percentage,
                }))}
              />
              <BarChart
                title="Devices"
                data={mockData.devices.map((device) => ({
                  label: device.name,
                  value: device.count,
                  percentage: device.percentage,
                }))}
              />
            </div>
          </div>
        ) : (
          <Settings />
        )}

        {/* Footer */}
      </div>
    </motion.div>
  );
};

export default Dashboard;
