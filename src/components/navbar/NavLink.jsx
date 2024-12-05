const NavLink = ({ href, children, mobile }) => {
  return (
    <a
      href={href}
      className={`${
        mobile
          ? 'block w-full px-3 py-2'
          : 'px-3'
      } hover:text-blue-600 transition-colors duration-200 rounded-md`}
    >
      {children}
    </a>
  );
};

export default NavLink;