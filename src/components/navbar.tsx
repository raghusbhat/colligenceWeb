import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Button } from "./ui/button";
import { AlignJustify, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Effect to manage body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden"); // Prevent scrolling
    } else {
      document.body.classList.remove("overflow-hidden"); // Allow scrolling
    }
  }, [isMobileMenuOpen]);

  return (
    <div className="mx-1">
      <div className="hidden md:flex justify-between items-center my-2">
        <img src={logo} alt="Logo" className="h-16" />
        <div className="flex gap-4">
          <Link to="/">
            <Button variant="ghost" aria-label="Home">
              Home
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="ghost" aria-label="About">
              About
            </Button>
          </Link>
          <Link to="/careers">
            <Button variant="ghost" aria-label="Careers">
              Careers
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="ghost" aria-label="Contact">
              Contact
            </Button>
          </Link>
        </div>
      </div>
      {/* Mobile Navbar */}
      <div className="md:hidden">
        <div className="bg-background flex items-center justify-between">
          <img src={logo} alt="Logo" className="h-10" />
          <Button
            className="!bg-transparent !text-white"
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? (
              <X className="text-gray-400" />
            ) : (
              <AlignJustify className="text-[#DE2B96]" />
            )}
          </Button>
        </div>
        {isMobileMenuOpen && (
          <div className="absolute top-12 left-0 right-0 h-screen bg-background z-10 flex flex-col gap-4 overflow-hidden">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" aria-label="Home">
                Home
              </Button>
            </Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" aria-label="About">
                About
              </Button>
            </Link>
            <Link to="/careers" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" aria-label="Careers">
                Careers
              </Button>
            </Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" aria-label="Contact">
                Contact
              </Button>
            </Link>
          </div>
        )}
      </div>

      <div className="h-[0.5px] opacity-50 w-full bg-gradient-to-r from-[#7B01C5] to-[#DE2B96]"></div>
    </div>
  );
};

export default Navbar;
