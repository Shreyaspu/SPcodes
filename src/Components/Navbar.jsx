import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "#hero" },
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.scrollTo({ top: 0 }); // Scroll to top when menu opens
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-300 py-3 md:py-5 ", 
        isScrolled ? "md:py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between space-around ml-4">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground ml-4">SP</span>
            codes
          </span>
        </a>

        {/* desktop nav  */}
        <div className="hidden md:flex space-x-8 space-around">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.path}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile nav */}
        {/* Only show menu button in navbar when menu is closed */}
        {!isMenuOpen && (
          <button onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 text-foreground z-50"
            aria-label="Open Menu">
            <Menu size={24}/>
          </button>
        )}
      </div>
      {/* Mobile menu overlay moved outside container */}
      <div className={cn(
          "fixed top-0 left-0 w-screen h-screen bg-background/95 backdrop-blur-md z-[9999] flex flex-col items-center justify-center",
          "transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
        {/* X button inside overlay */}
        {isMenuOpen && (
          <button onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-foreground z-[10000]"
            aria-label="Close Menu">
            <X size={28}/>
          </button>
        )}
        <div className="flex flex-col space-y-8 text-xl">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.path}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
