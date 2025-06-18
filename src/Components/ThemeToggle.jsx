import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '../lib/utils/'; 

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        }}, []);
    const toggleTheme = () => {
        if (isDarkMode) {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    };

    return (
        <button onClick={toggleTheme} className={cn(
            'fixed-top-5 md:fixed top-0 right-12 md:right-5 z-50 p-2 py-7 transition-all duration-300',
            isScrolled ? 'md:py-3  bg-background/80 backdrop-blur-md shadow-xs' : 'md:py-5 py-7',
            'focus:outline-hidden')}>
            {isDarkMode ? <Sun className='h-6 w-6 text-yellow-300' /> : <Moon className='h-6 w-6 text-blue-900' />}
        </button>
    );
};
