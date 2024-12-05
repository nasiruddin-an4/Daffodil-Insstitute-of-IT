import { Search } from 'lucide-react';
import NavLink from './navbar/NavLink';
import NavDropdown from './navbar/NavDropdown.jsx';
import MobileMenu from './navbar/MobileMenu';
import { links, dropdowns } from '../constants';
import Logo from '..//assets/diit.png'

const Navbar = () => {
  return (
    <nav className="sticky backdrop-blur-lg shadow-lg w-full top-0 left-0 z-50 bg-white">
      <div className="container mx-auto px-2 lg:px-0">
        <div className="flex justify-between items-center py-3">
          <div>
          <a href="/" className="flex-shrink-0">
              <img
                className="h-8 w-auto"
                src={Logo}
                alt="DIIT Logo"
              />
            </a>
          </div>
          <div className="flex items-center">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-3">
              {links.map((link, index) => (
                <NavLink key={index} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
              
              {dropdowns.map((dropdown, index) => (
                <NavDropdown
                  key={index}
                  title={dropdown.title}
                  items={dropdown.items}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              className="hover:text-blue-600 p-2 transition-colors duration-200"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            
            {/* Mobile Menu Button */}
            <MobileMenu links={links} dropdowns={dropdowns} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
