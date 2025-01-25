import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Function to toggle the dropdown visibility
  const toggleDropdown = (event) => {
    event.stopPropagation(); // Prevent event propagation
    setIsDropdownOpen((prev) => !prev);
  };

  // Function to close dropdown explicitly
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Function to toggle the hamburger menu visibility
  const toggleHamburgerMenu = () => {
    setIsHamburgerMenuOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-[rgba(13,23,77,1)] px-[24px] py-[2px] flex justify-between items-center text-[16px] relative">
      <div>
        <img className="w-[186px] mb-2" src="/assets/image 35.png" alt="Logo" />
      </div>

      {/* Hamburger Menu Icon for Medium and Small Screens */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={toggleHamburgerMenu}
          className="text-white focus:outline-none"
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

      {/* Full Menu for Large Screens */}
      <div className="hidden lg:flex gap-2 justify-center items-center">
        <div
          className="flex items-center gap-8 text-white font-semibold tracking-tight "
          ref={dropdownRef}
        >
          <Link>Home</Link>
          <Link to="">Events</Link>
          <Link>Registration</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/about-us">About Us</Link>
          <Link onClick={toggleDropdown}>Other Services</Link>
        </div>

        {/* Dropdown Section */}
        <div className="flex justify-center items-center" ref={dropdownRef}>
          <img
            className={`h-[10px] filter contrast-150 cursor-pointer transition-transform duration-300 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
            src="/assets/drop.png"
            alt="Dropdown Icon"
            onClick={toggleDropdown}
          />
        </div>

        {isDropdownOpen && (
          <div className="absolute z-10 top-[81px] right-[10px] bg-customBlue shadow-lg p-2 rounded-md text-white">
            <div className="flex flex-col items-start space-y-2 z-20">
              <Link
                to="/our-services"
                className="p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  closeDropdown();
                }}
              >
                Our Services
              </Link>
              <Link
                to="/privacy-policy"
                className="p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  closeDropdown();
                }}
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-services"
                className="p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  closeDropdown();
                }}
              >
                Terms of Services
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
          className="absolute top-4 right-4 text-white focus:outline-none"
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
        <div className="flex flex-col p-4 space-y-4">
          <div
            className="relative bg-[rgba(10,20,60,1)] rounded-md overflow-hidden"
            style={{ paddingBottom: "10px" }}
          >
            <img
              className="w-[186px] mb-0"
              src="/assets/image 35.png"
              alt="Logo"
            />
            <div className="absolute bottom-0 left-0 w-full h-[4px] bg-white"></div>
          </div>
          <Link onClick={toggleHamburgerMenu}>Home</Link>
          <Link onClick={toggleHamburgerMenu}>Events</Link>
          <Link onClick={toggleHamburgerMenu}>Registration</Link>
          <Link to="/contact-us" onClick={toggleHamburgerMenu}>
            Contact Us
          </Link>
          <Link to="/about-us" onClick={toggleHamburgerMenu}>
            About Us
          </Link>
          <Link onClick={toggleHamburgerMenu}>Our Services</Link>
          <Link to="/privacy-policy" onClick={toggleHamburgerMenu}>
            Privacy Policy
          </Link>
          <Link to="/terms-of-services" onClick={toggleHamburgerMenu}>
            Terms of Services
          </Link>
        </div>
      </div>

      {/* Overlay to close the menu */}
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
