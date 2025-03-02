import React from "react";
import './App.css'
import { BrowserRouter as Router,Routes,Route,useLocation } from 'react-router-dom'


import HandleError from './pages/HandleError'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useAuth } from "./context/AuthContext";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function Layout() {
  const { auth } = useAuth();
  const location = useLocation();

  
  const hideSidebar = location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/" ;

  return (
    <div className="flex h-screen">
      {!hideSidebar && <Sidebar />} 
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={auth ? <Dashboard /> : <Login />} />
          <Route path="*" element={<HandleError />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;