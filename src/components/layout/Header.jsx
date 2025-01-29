import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiChevronDoubleRight } from "react-icons/hi";
import { CgMenuRight } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import  logo  from "../../assets/Images/NRA_logo.png";

const topNavItems = [
  {
    label:"Company",
    link:"company"
  },
  {
    label:"FAQs",
    link:"faqs"
  },
  {
    label:"Support",
    link:"support"
  },
  {
    label:"Team",
    link:"team"
  },
]

const navItems = [
  { name: "Home", path: "/" },
  { name: "Acts & Regulations", path: "/acts-regulations" },
  { name: "Updates", dropdown: ["news", "gallery", "events-activities"] },
  { name: "Contact Us", path: "/contact-us" },
];


function Header() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleDropdown = (dropdown) => (event) => {
    event.stopPropagation();
    setIsDropdownOpen((prev) => (prev === dropdown ? null : dropdown));
  };

  const closeDropdown = () => setIsDropdownOpen(null);
  const toggleHamburgerMenu = () => setIsHamburgerMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full font-poppins">
      {/* Top Header */}
      <div className=" flex flex-col lg:flex-row justify-between items-center pt-3 bg-customBlue text-white px-6 pb-12 sm:gap-y-4 lg:gap-y-0 gap-y-2">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-4 gap-2">
          <div className="flex items-center gap-2">
            <MdEmail />
            <span className="text-sm">contact@nra.org.np</span>
          </div>
          <div className="flex items-center gap-2">
            <IoMdCall />
            <span className="text-sm">Call: +977-9876652452</span>
          </div>
        </div>

        <div className="flex items-center gap-4 sm:justify-center lg:justify-normal">
          <div className="hidden md:flex gap-4">
            {topNavItems.map((page) => (
              <Link key={page} className="hover:text-orange-500 font-medium text-sm" to={`/${page.link}`}>
                {page.label}
              </Link>
            ))}
          </div>
          <div className="h-6 w-0.5 bg-white hidden md:block"></div>
          <div className="flex items-center gap-2">
            {[{ icon: FaFacebookF, path: "facebook" }, { icon: FaXTwitter, path: "twitter" }, { icon: FaLinkedinIn, path: "linkedIn" }, { icon: FaInstagram, path: "instagram" }].map(({ icon: Icon, path }) => (
              <Link key={path} to={`/${path}`} className="rounded-full p-2 border border-white cursor-pointer hover:bg-white hover:text-blue-900 flex justify-center items-center w-7 h-7 ">
                <Icon className="h-3 w-3" />
              </Link>
            ))}
            
          </div>
        </div>
      </div>

      {/* Sticky Navbar */}
      <div className={`transition-all duration-300 bg-white px-6 py-2 flex justify-between items-center text-[16px] mx-6 rounded-xl shadow-md ${isSticky ? "fixed top-0 left-0 z-50 shadow-lg w-full mx-auto " : "-mt-8"}`}>
        <img className="w-32 md:w-48 " src={logo} alt="Logo" />
        <button onClick={toggleHamburgerMenu} className="lg:hidden text-black">
          <CgMenuRight className="h-8 w-8" />
        </button>
        <div className="hidden lg:flex gap-8 items-center whitespace-nowrap text-md">
          {navItems.map(({ name, path, dropdown }) => (
            dropdown ? (
              <div key={name} className="relative">
                <span onClick={toggleDropdown(name)} className={`cursor-pointer flex items-center font-medium ${isDropdownOpen === name ? "text-orange-500" : "hover:text-orange-500"}`}>
                  {name}
                  <svg className="ml-1 h-4 w-4" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                {isDropdownOpen === name && (
                  <div className="absolute top-full mt-2 bg-white shadow-lg p-2 rounded-md text-black">
                    {dropdown.map((page) => (
                      <Link key={page} to={`/${page}`} className="block p-2 hover:text-orange-400" onClick={closeDropdown}>
                        {page.charAt(0).toUpperCase() + page.slice(1)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={path} to={path} className={`font-medium ${location.pathname === path ? "text-orange-500" : "hover:text-orange-500"}`}>
                {name}
              </Link>
            )
          ))}
        </div>
        <div className="lg:block hidden">
        <div className="flex gap-2 items-center">
          <button
            className="text-white px-4 py-2 rounded-xl bg-customBlue hover:bg-orange-400 flex items-center gap-2 font-normal "
            onClick={() => navigate("/registerNow")}
          >
            BE A MEMBER
            {/* <HiChevronDoubleRight /> */}
          </button>
          <button className="md:block text-blue-900 px-4 py-2 rounded-xl hover:text-orange-400 ">
            <CgMenuRight className="h-10 w-10 -mr-4" />
          </button>
        </div>
        </div>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className={`fixed top-0 right-0 w-64 h-full bg-blue-900 text-white shadow-lg z-50 transform transition-transform duration-500 ${isHamburgerMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <button onClick={toggleHamburgerMenu} className="absolute top-4 right-4 text-white">✖</button>
        <div className="flex flex-col p-4 space-y-6 mt-10">
          {navItems.map(({ name, path, dropdown }) => (
            dropdown ? (
              <div key={name}>
                <span className="block p-2 cursor-pointer" onClick={toggleDropdown(name)}>
                  {name}
                </span>
                {isDropdownOpen === name && (
                  <div className="ml-4">
                    {dropdown.map((page) => (
                      <Link key={page} to={`/${page}`} className="block p-2 hover:text-orange-400" onClick={toggleHamburgerMenu}>
                        {page.charAt(0).toUpperCase() + page.slice(1)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={path} to={path} className={`block p-2 ${location.pathname === path ? "text-orange-500" : "hover:text-orange-400"}`} onClick={toggleHamburgerMenu}>
                {name}
              </Link>
            )
          ))}
          <button
            className="text-white px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-400 flex items-center gap-2 font-normal mt-4"
            onClick={() => navigate("/registerNow")}
          >
            BE A MEMBER
          </button>
        </div>
      </div>
      {isHamburgerMenuOpen && <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40" onClick={toggleHamburgerMenu}></div>}
    </div>
  );
}

export default Header;
