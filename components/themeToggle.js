"use client"
import { FaMoon, FaRegSun } from "react-icons/fa6";
import { useState, useEffect } from 'react';


const ThemeToggle = () => {
  const [light, setLight] = useState(false);

  useEffect(() => {
    setLight(document.documentElement.classList.contains('light'));
  }, []);

  function toggle() {
    setLight(prev => {
      const next = !prev;
      const root = document.documentElement;
      root.classList.add('theme-snap');
      root.classList.toggle('light', next);
      try {
        localStorage.setItem('theme', next ? 'light' : 'dark');
      } catch (e) {}
      void root.offsetHeight;
      requestAnimationFrame(() => root.classList.remove('theme-snap'));
      return next;
    });
  }

  return (
    <button type="button" aria-label={light ? 'Switch to dark theme' : 'Switch to light theme'} className={"md:bg-al rounded-full p-5 hover:bg-hw transition-colors md:text-base text-xl flex gap-5 items-center "}  onClick={toggle}>{light ? <FaMoon className="animate-like" /> : <FaRegSun className="animate-like" />}</button>
  )
};

export default ThemeToggle;
