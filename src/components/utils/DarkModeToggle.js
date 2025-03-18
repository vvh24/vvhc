import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <motion.button
      className="dark-mode-toggle"
      onClick={toggleDarkMode}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        background: 'transparent',
        border: 'none',
        position: 'fixed',
        right: '20px',
        bottom: '20px',
        zIndex: 1000,
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        background: darkMode ? '#333' : '#fff'
      }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: darkMode ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <FontAwesomeIcon 
          icon={darkMode ? faSun : faMoon} 
          className={darkMode ? 'text-white' : 'text-dark'}
          size="lg"
        />
      </motion.div>
    </motion.button>
  );
};

export default DarkModeToggle;