import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Import Lucide icons
import NavLink from './NavLink';
import NavDropdown from './NavDropdown';
import Logo from '..//../assets/diit.png'

const MobileMenu = ({ links, dropdowns }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button (Hamburger) */}
      <button
        onClick={toggleMenu}
        className="lg:hidden hover:text-blue-600 p-2 transition-colors duration-200 cursor-pointer"
        aria-label="Mobile menu"
      >
        <Menu className="h-6 w-6" /> {/* Hamburger Icon from Lucide */}
      </button>

      {/* Mobile menu drawer (opening from the right) */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`fixed top-0 right-0 bg-white w-64 h-full z-50 transform transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent closing on inner click
        >
          <div className="flex justify-between items-center p-2">
            {/* Close Button on the Left */}
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              <X className="h-6 w-6" /> {/* Close Icon from Lucide */}
            </button>

            {/* Logo on the Right */}
            <a href="/" className="flex-shrink-0">
              <img
                className="h-8 w-auto"
                src={Logo}
                alt="Mobile Logo"
              />
            </a>
          </div>

          <div className="px-4 pb-5 w-full backdrop-blur-lg space-y-3 ">
            {links.map((link, index) => (
              <NavLink key={index} href={link.href} mobile >
                {link.label}
              </NavLink>
            ))}

            {dropdowns.map((dropdown, index) => (
              <NavDropdown key={index} title={dropdown.title} items={dropdown.items} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
