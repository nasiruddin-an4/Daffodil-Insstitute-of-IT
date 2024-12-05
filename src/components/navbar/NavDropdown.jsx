import { useState, useEffect } from 'react';

const NavDropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the user is on a mobile screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile screens < 768px
    };

    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative ${isMobile ? '' : 'group'}`}> {/* Only apply group for desktop hover */}
      {/* Dropdown Button */}
      <button
        className="hover:text-blue-600 space-x-3"
        onClick={isMobile ? toggleDropdown : undefined} // Only trigger onClick for mobile
      >
        {title}
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute backdrop-blur-lg shadow-lg mt-0 rounded w-48 z-50 transition-all duration-200 ease-in-out opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 ${
          isMobile
            ? isOpen
              ? 'block opacity-100 scale-100'
              : 'hidden opacity-0 scale-95'
            : 'hidden group-hover:block'
        }`}
      >
        <ul className="py-2">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="block px-4 py-2 hover:bg-blue-500"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavDropdown;
