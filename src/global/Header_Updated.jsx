import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Header.css"; // Ensure your header styles are in this file

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowHeader(currentY < lastScrollY || currentY < 100);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: showHeader ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="site-header"
    >
      {/* Your existing header content here */}
      <div className="header-inner">
        <h1>Zoey Huang</h1>
        {/* Add nav or other elements here */}
      </div>
    </motion.header>
  );
};

export default Header;
