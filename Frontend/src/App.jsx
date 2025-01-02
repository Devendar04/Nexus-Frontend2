import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import WasteTracker from "./pages/WasteTracker";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import Bins from "./pages/Bins";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import Profile from "./pages/Profile";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import DashboardTrack from "./components/dashboard/DashboardTrack";
import DashBoardCommunity from "./components/dashboard/DashBoardCommunity";
import DashBoardEventPage from "./components/dashboard/DashBoardEventPage";
import WasteRecycled from "./components/tracker/WasteDetail/WasteRecycled";
import Co2Reduced from "./components/tracker/WasteDetail/Co2Reduced";
import Efficiency from "./components/tracker/WasteDetail/Efficiency";
import NavbarWrapper from "./components/wrapper/NavbarWrapper";
function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-dark-bg-primary transition-colors ">
          <Navbar />
          <main className="flex-grow pt-16 ">
            <Routes>
              <Route path="/" element={<NavbarWrapper />}/>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/features" element={<Features />} />
              <Route path="/tracker" element={<WasteTracker />} />
              <Route path="/community" element={<Community />} />
              <Route path="/bins" element={<Bins />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Routes>
              <Route path="/dashboard" element={<DashboardLayout />} />
              <Route path="/dashboard/track" element={<DashboardTrack />} />
              <Route path="/dashboard/community" element={<DashBoardCommunity />} />
              <Route path="/dashboard/events" element={<DashBoardEventPage />} />
              <Route path="/dashboard/profile" element={<Profile />} />

            </Routes>
            <Routes>
              <Route path="/dashboard/track/waste-recycled" element={<WasteRecycled />} />
              <Route path="/dashboard/track/co2-reduced" element={<Co2Reduced />} />
              <Route path="/dashboard/track/efficiency" element={<Efficiency />} />
            </Routes>
          </main>
        </div>
      </AuthProvider>
    </Router>
  );
}
export default App;
