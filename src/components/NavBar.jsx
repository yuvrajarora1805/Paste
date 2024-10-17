import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDarkMode(darkModeMediaQuery.matches)

    const handleChange = (e) => setIsDarkMode(e.matches)
    darkModeMediaQuery.addEventListener('change', handleChange)

    return () => darkModeMediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <FontAwesomeIcon icon="paste" className="text-blue-500 text-2xl mr-2" />
            <span className="font-bold text-xl text-gray-800 dark:text-white">PasteApp</span>
          </div>
          <div className="flex items-center space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:bg-blue-100 dark:text-gray-300 dark:hover:bg-gray-700'
                }`
              }
            >
              <FontAwesomeIcon icon="home" className="mr-1" /> Home
            </NavLink>
            <NavLink
              to="/pastes"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:bg-blue-100 dark:text-gray-300 dark:hover:bg-gray-700'
                }`
              }
            >
              <FontAwesomeIcon icon="list" className="mr-1" /> Pastes
            </NavLink>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={isDarkMode ? 'sun' : 'moon'} />
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default NavBar;