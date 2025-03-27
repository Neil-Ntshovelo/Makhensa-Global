import React, { useState, useRef, useEffect } from 'react';
import { NavLink as RouterNavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const NavLinks = () => {
  return (
    <>
      <RouterNavLink to="/" className="nav-link text-white font-semibold hover:text-yellow-500 mb-2">Home</RouterNavLink>
      <RouterNavLink to="/about" className="nav-link text-white font-semibold hover:text-yellow-500 mb-2">About</RouterNavLink>
      <RouterNavLink to="/contact" className="nav-link text-white font-semibold hover:text-yellow-500 mb-2">Contact Us</RouterNavLink>
    </>
  );
}

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
      setIsOpen(prev => !prev);
  };

  useEffect(() => {
      const handleClickOutside = (event) => {
          if (menuRef.current && !menuRef.current.contains(event.target)) {
              setIsOpen(false);
          }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
          document.removeEventListener('mousedown', handleClickOutside);
      };
  }, []);

  return (
      <>
          <nav className="flex w-1/3 justify-end">
              <div className="hidden w-full justify-end pr-20 space-x-10 md:flex">
                  <NavLinks />
              </div>
              <div className="md:hidden">
                  <button 
                      onClick={toggleMenu} 
                      className="text-white" 
                      aria-expanded={isOpen}
                      aria-label="Toggle menu"
                  >
                      {isOpen ? <X className='bg-white text-blue-900 rounded-full px-1 font-medium' /> : <Menu />}
                  </button>
              </div>
          </nav>
          {isOpen && (
              <div ref={menuRef} className='flex basis-full flex-col items-center md:hidden bg-blue-900 p-4'>
                  <NavLinks />
              </div>
          )}
      </>
  );
};

const NavBar = () => {
  return (
    <header className="bg-blue-900 sticky top-0 flex-wrap z-20 mx-auto flex w-full items-center justify-between p-4 shadow-lg">
      <Logo />
      <Nav />
    </header>
  );
}

export default NavBar;