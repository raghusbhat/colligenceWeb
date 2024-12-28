import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Button } from "./ui/button";
import { AlignJustify, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const dropdownVariants = {
  hidden: { opacity: 0, y: -20 }, // Start slightly above and invisible
  visible: { opacity: 1, y: 0 }, // Fully visible and in place
  exit: { opacity: 0, y: -20 }, // Slide back up and become invisible
};

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
    <div className="fixed top-0 left-0 right-0 z-50 max-w-7xl md:mx-auto shadow-lg bg-background/50 backdrop-blur">
      {/* Add the class "navbar-height" */}
      <div className="hidden md:flex justify-between items-center">
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
        <div className="flex items-center justify-between">
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
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            transition={{ duration: 0.3 }}
            className="absolute top-12 pt-4 left-0 w-full !h-screen bg-[#1A1A1A] z-10 flex flex-col gap-4 overflow-hidden"
          >
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" aria-label="Home">
                Home
              </Button>
            </Link>
            <hr className="h-px mx-2 bg-white/10 border-0"/>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" aria-label="About">
                About
              </Button>
            </Link>
            <hr className="h-px mx-2 bg-white/10 border-0 "/>
            <Link to="/careers" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" aria-label="Careers">
                Careers
              </Button>
            </Link>
            <hr className="h-px mx-2 bg-white/10 border-0"/>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" aria-label="Contact">
                Contact
              </Button>
            </Link>
          </motion.div>
        )}
      </div>

      <div className="h-[0.5px] mt-2 md:mt-0 opacity-50 w-full bg-gradient-to-r from-[#7B01C5] to-[#DE2B96]"></div>
    </div>
  );
};

export default Navbar;
