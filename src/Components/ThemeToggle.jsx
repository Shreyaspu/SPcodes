import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '../lib/utils/'; 

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
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
        if (storedTheme === 'light') {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        } else {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    }, []);

    const onClick = () => {
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
        <button 
            onClick={onClick} 
            className={cn(
                'fixed z-50 p-2 transition-all duration-300',
                'min-w-[44px] min-h-[44px] flex items-center justify-center',
                ' left-4 md:right-4 md:left-auto',
                // isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-background/60 backdrop-blur-sm',
                isScrolled ? "md:py-3 top-1.5" : "md:py-4 top-2",
                
            )}
        >
            {isDarkMode ? (
                <Sun className='h-5 w-5 text-yellow-300' />
            ) : (
                <Moon className='h-5 w-5 text-blue-900' />
            )}
        </button>
    );
};
