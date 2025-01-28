import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = (dropdown) => (event) => {
    event.stopPropagation();
    setIsDropdownOpen((prev) => (prev === dropdown ? null : dropdown));
  };

  const closeDropdown = () => {
    setIsDropdownOpen(null);
  };

  const toggleHamburgerMenu = () => {
    setIsHamburgerMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".dropdown-menu") &&
        !event.target.closest(".dropdown-toggle")
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = (path) => {
    closeDropdown();
    navigate(path);
  };

  return (
    <div className="sticky bg-white px-[32px] py-[4px] flex justify-between items-center text-[16px] relative">
      <div>
        <img
          className=" relative w-[30%] mb-2"
          src="http://www.nra.org.np/assets/image/nra-logo.png"
          alt="Logo"
        />
      </div>

      <div className="lg:hidden flex items-center">
        <button
          onClick={toggleHamburgerMenu}
          className="text-black focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div className="hidden bg-blue-500 p-4 rounded-full lg:flex gap-2  justify-center items-center">
        <div className="flex items-center gap-8 text-sm text-white font-bold">
          <Link to="/" className="">Home</Link>
          <Link to="/">Acts & Regulations</Link>
          <span
            onClick={toggleDropdown("updates")}
            className="cursor-pointer dropdown-toggle flex items-center "
          >
            Updates
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
          <span
            onClick={toggleDropdown("about")}
            className="cursor-pointer dropdown-toggle flex items-center"
          >
            About Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
          <Link to="/contact-us">Contact Us</Link>
        </div>

        {/* Dropdown Section */}
        {isDropdownOpen === "updates" && (
          <div className="absolute z-10 top-[85px] right-[20] bg-orange-500 shadow-lg p-2 rounded-md text-white dropdown-menu">
            <div className="flex flex-col items-start space-y-2 z-20">
              <Link
                to="/news"
                className="p-2 w-full hover:bg-orange-400 border-b border-white"
                onClick={closeDropdown}
              >
                News
              </Link>
              <Link
                to="/gallery"
                className="p-2 w-full hover:bg-orange-400 border-b border-white"
                onClick={closeDropdown}
              >
                Gallery
              </Link>
              <Link
                to="/events-activities"
                className="p-2 w-full hover:bg-orange-400"
                onClick={closeDropdown}
              >
                Events and Activities
              </Link>
            </div>
          </div>
        )}

        {isDropdownOpen === "about" && (
          <div className="absolute z-10 top-[85px] right-[100px] bg-orange-500 w-32 shadow-lg p-2 rounded-md text-white dropdown-menu">
            <div className="flex flex-col items-start space-y-2 z-20">
              <Link to="/about-us" className="p-2" onClick={closeDropdown}>
                About Us
              </Link>
              <Link to="/our-story" className="p-2" onClick={closeDropdown}>
                Our Story
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Hamburger Menu */}
      <div
        className={`fixed top-0 right-0 w-1/2 h-full bg-[rgba(13,23,77,1)] text-white shadow-lg z-50 transform transition-transform duration-500 ${
          isHamburgerMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleHamburgerMenu}
          className="absolute top-4 right-4 text-black focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col p-4 space-y-6 border-t border-white">
          <Link to="/" onClick={toggleHamburgerMenu}>
            Home
          </Link>
          <Link to="/" onClick={toggleHamburgerMenu}>
            Acts & Regulations
          </Link>
          <div className="border-t border-gray-500 py-2">
            <h1 className="font-semibold mb-2 text-orange-500">Updates</h1>
            <div className="space-y-2">
              <Link
                to="/news"
                className="block hover:bg-orange-400 p-2 border-b border-gray-500"
                onClick={toggleHamburgerMenu}
              >
                News
              </Link>
              <Link
                to="/gallery"
                className="block hover:bg-orange-400 p-2 border-b border-gray-500"
                onClick={toggleHamburgerMenu}
              >
                Gallery
              </Link>
              <Link
                to="/events-activities"
                className="block hover:bg-orange-400 p-2"
                onClick={toggleHamburgerMenu}
              >
                Events and Activities
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-500 py-2">
            <h1 className="font-semibold mb-2">About Us</h1>
            <div className="space-y-2">
              <Link to="/about-us" onClick={toggleHamburgerMenu}>
                About Us
              </Link>
              <Link to="/our-story" onClick={toggleHamburgerMenu}>
                Our Story
              </Link>
            </div>
          </div>
          <Link to="/contact-us" onClick={toggleHamburgerMenu}>
            Contact Us
          </Link>
        </div>
      </div>

      {isHamburgerMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
          onClick={toggleHamburgerMenu}
        ></div>
      )}
    </div>
  );
}

export default Header;
