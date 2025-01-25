import React, { useState, useEffect } from 'react';
import { FaSearch, FaMoon, FaSun, FaUser, FaBell, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [notifications, setNotifications] = useState(3);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`header ${scrolled ? 'header-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="header-content">
        <motion.div 
          className="logo-container"
          whileHover={{ scale: 1.05 }}
        >
          <h1>Reeltor<span className="highlight">Elite</span></h1>
        </motion.div>

        <div className="header-controls">
          

          <div className="header-actions">
            <motion.button 
              className="notification-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaBell />
              {notifications > 0 && (
                <span className="notification-badge">{notifications}</span>
              )}
            </motion.button>

            <motion.button 
              className="messages-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope />
            </motion.button>

            <motion.button 
              className="theme-toggle"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isDarkMode ? 'sun' : 'moon'}
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isDarkMode ? <FaSun /> : <FaMoon />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            <motion.div 
              className="user-profile"
              whileHover={{ scale: 1.05 }}
            >
              <FaUser />
              {/* <span className="user-name">John Doe</span> */}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
