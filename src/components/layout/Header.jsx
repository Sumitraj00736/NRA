import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiChevronDoubleRight } from "react-icons/hi";
import { CgMenuRight } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/Images/nra-main-logo.png";

const topNavItems = [
  { label: "FAQs", link: "faqs" },
  { label: "Exchange Rates", link: "http://fedan.com.np/" },
];

const navItems = [
  { name: "Home", path: "/" },
  { name: "Acts & Regulations", path: "/acts-regulations" },
  {
    name: "Updates",
    dropdown: ["News", "Gallery"],
    paths: ["news", "gallery"],
  },
  {
    name: "About",
    dropdown: ["About Us", "Remittance Overview", "Message from Central Bank", "Member List"],
    paths: ["about-us", "remittance-overview", "message-from-central-bank", "member-list"],
  },
  { name: "Contact Us", path: "/contact-us" },
];

function Header() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleDropdown = (dropdown) => {
    setIsDropdownOpen((prev) => (prev === dropdown ? null : dropdown));
  };

  const closeDropdown = () => setIsDropdownOpen(null);
  const toggleHamburgerMenu = () => setIsHamburgerMenuOpen((prev) => !prev);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full font-poppins">
      {/* Top Header */}
      <div className="flex flex-col lg:flex-row justify-between items-center pt-3 bg-customBlue text-white px-6 pb-12 sm:gap-y-4 lg:gap-y-0 gap-y-2">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-4 gap-2">
          <div className="flex items-center gap-2">
            <MdEmail />
            <span className="text-sm">info@nra.org.np</span>
          </div>
          <div className="flex items-center gap-2">
            <IoMdCall />
            <span className="text-sm">Call: +977-9801060980</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-4">
            {topNavItems.map((page) =>
              page.label === "Exchange Rates" ? (
                <a key={page.label} className="hover:text-orange-500 font-medium text-sm" href={page.link} target="_blank" rel="noopener noreferrer">
                  {page.label}
                </a>
              ) : (
                <Link key={page.label} className="hover:text-orange-500 font-medium text-sm" to={`/${page.link}`} onClick={handleScrollToTop}>
                  {page.label}
                </Link>
              )
            )}
          </div>
          <div className="h-6 w-0.5 bg-white hidden md:block"></div>
          <div className="flex items-center gap-2">
            {[
              { icon: FaFacebookF, path: "https://facebook.com/nra_org_np" },
              { icon: FaXTwitter, path: "https://x.com/nra_org_np" },
              { icon: FaLinkedinIn, path: "https://linkedin.com/company/nra-org-np" },
          
            ].map(({ icon: Icon, path }) => (
              <a key={path} href={path} className="rounded-full p-2 border border-white hover:bg-white hover:text-blue-900 flex items-center w-7 h-7" target="_blank" rel="noopener noreferrer">
                <Icon className="h-3 w-3" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Navbar */}
      <div className={`transition-all duration-300 bg-white px-6 py-4 flex justify-between items-center text-[16px] mx-6 shadow-md ${isSticky ? "fixed top-0 left-0 z-50 shadow-lg w-full mx-auto rounded-none" : "-mt-8  rounded-xl "}`}>
      <Link to="/">
    <img className="w-32 md:w-48" src={logo} alt="Logo"  onClick={handleScrollToTop}/>
  </Link>
        <button onClick={toggleHamburgerMenu} className="lg:hidden text-black">
          <CgMenuRight className="h-8 w-8" />
        </button>
        <div className="hidden lg:flex gap-8 items-center text-md">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.name} className="relative">
                <span onClick={() => {
                  toggleDropdown(item.name);
                  
                }
              } className={`cursor-pointer flex items-center font-medium ${isDropdownOpen === item.name ? "text-orange-500" : "hover:text-orange-500"}`}>
                  {item.name}
                  <HiChevronDoubleRight className={`ml-1 transition-transform ${isDropdownOpen === item.name ? "rotate-90" : "rotate-0"}`} />
                </span>
                {isDropdownOpen === item.name && (
                  <div className="absolute top-full mt-2 bg-white shadow-lg p-2 rounded-md text-black z-50">
                    {item.dropdown.map((page, index) => (
                      <Link key={page} to={`/${item.paths[index]}`} className="block p-2 hover:text-orange-400" onClick={() => {
                        closeDropdown();
                        handleScrollToTop();
                      }}>
                        {page}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.path} to={item.path} className={`font-medium ${location.pathname === item.path ? "text-orange-500" : "hover:text-orange-500"}`} onClick={handleScrollToTop}>
                {item.name}
              </Link>
            )
          )}
        </div>
        {/* <Link to="http://fedan.com.np/" target="_blank"> */}
        <button className="text-white px-4 py-2 rounded-xl bg-customBlue hover:bg-orange-400 font-normal lg:block hidden" onClick={() => navigate("/registerNow")}>
          BECOME A MEMBER
        </button>
        {/* </Link> */}
      </div>

      {/* Mobile Hamburger Menu */}
      <div className={`fixed top-0 right-0 w-64 h-full bg-blue-900 text-white shadow-lg z-50 transition-transform duration-500 ${isHamburgerMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <button onClick={toggleHamburgerMenu} className="absolute top-4 right-4 text-white">✖</button>
        <div className="flex flex-col p-4 space-y-6 mt-10">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.name}>
                <span className="block p-2 cursor-pointer" onClick={() => toggleDropdown(item.name)}>
                  {item.name}
                </span>
                {isDropdownOpen === item.name && (
                  <div className="ml-4">
                    {item.dropdown.map((page, index) => (
                      <Link key={page} to={`/${item.paths[index]}`} className="block p-2 hover:text-orange-400" onClick={() => setIsHamburgerMenuOpen(false)}>
                        {page}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.path} to={item.path} className="block p-2 hover:text-orange-400" onClick={() => setIsHamburgerMenuOpen(false)}>
                {item.name}
              </Link>
            )
          )}
          <button className="text-white px-4 py-2 rounded-xl bg-customBlue hover:bg-orange-400 font-normal" onClick={() => navigate("/registerNow")}>
            BECOME A MEMBER
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
