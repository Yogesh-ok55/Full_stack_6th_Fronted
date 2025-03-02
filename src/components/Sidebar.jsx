import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X, Home, ShoppingCart, User, Settings } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarVariants = {
    open: { width: "250px", transition: { duration: 0.3 } },
    closed: { width: "80px", transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="fixed left-0 top-0 h-full bg-gray-900 text-white shadow-lg flex flex-col"
      animate={isOpen ? "open" : "closed"}
      variants={sidebarVariants}
    >
      <div className="flex items-center justify-between  p-4 border-b border-gray-700">
        <h1 className={`text-lg font-bold ${!isOpen && "hidden"}`}>Dashboard</h1>
        <button onClick={toggleSidebar} className="p-2 focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav className="flex flex-col space-y-4 mt-6">
        <NavItem isOpen={isOpen} icon={<Home size={24} />} text="Home" link="/dashboard" />
        <NavItem isOpen={isOpen} icon={<ShoppingCart size={24} />} text="Auctions" link="/auctions" />
        <NavItem isOpen={isOpen} icon={<User size={24} />} text="Profile" link="/profile" />
        <NavItem isOpen={isOpen} icon={<Settings size={24} />} text="Settings" link="/settings" />
      </nav>
    </motion.div>
  );
};

const NavItem = ({ isOpen, icon, text, link }) => {
  return (
    <Link to={link} className="flex items-center px-4 py-3 hover:bg-gray-700 transition">
      {icon}
      <span className={`ml-4 ${!isOpen && "hidden"}`}>{text}</span>
    </Link>
  );
};

export default Sidebar;
