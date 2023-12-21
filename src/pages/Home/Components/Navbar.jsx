import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styles } from "../../../styles";
import { navLinks } from "../../../constants/constants";
import { menu, close } from "../../../assets/index";
import { Context } from "../../../Context/AllContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { user, logOut } = useContext(Context);
  const navigate = useNavigate();

  const userName = user?.displayName;
  const userPhoto = user?.photoURL;
  const userEmail = user?.email;

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        const notifyLogOut = () => toast("Logged out user");
        notifyLogOut();
        navigate("/");
        closeDropdown();
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-[#00011F]" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-[18px] font-bold cursor-pointer flex">Dooito</p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {!user && (
          <Link to="/login">
            <button className="py-1 hidden md:block md:py-3 lg:py-3 px-1 md:px-4 lg:px-4 text-xs md:text-sm lg:text-sm glass rounded-md hover:bg-gradient-to-r from-[#06beb6] to-[#48b1bf] text-[#D7D7DE]">
              Log In
            </button>
          </Link>
        )}

        {user && (
          <div className="hidden md:flex items-center gap-3">
            <div className="relative" onClick={toggleDropdown}>
              <img
                className="w-5 h-5 cursor-pointer md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full"
                src={userPhoto}
                alt=""
              />
              {dropdownOpen && (
                <div className="absolute w-[150px] z-30 top-full mt-1 -ml-[115px] py-2 bg-white text-gray-800 shadow-md rounded-lg">
                  <h1 className="block px-4 py-2 text-sm">{userName}</h1>
                  <p className="block px-4 py-2 text-xs">{userEmail}</p>
                  <Link
                    to="/Dashboard"
                    className="block px-4 py-2 text-sm hover:bg-violet-400"
                    onClick={closeDropdown}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogOut}
                    className="px-4 w-full text-start py-2 text-sm hover:bg-violet-400"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={menuOpen ? close : menu}
            alt="menu"
            className="w-[28px] text-black h-[28px] object-contain"
            onClick={toggleMenu}
          />
          <div
            className={`${
              menuOpen ? "flex" : "hidden"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {!user && (
                <Link to="/login">
                  <button className="py-1 md:py-3 lg:py-3 px-1 md:px-4 lg:px-4 text-xs md:text-sm lg:text-sm glass rounded-md hover:bg-gradient-to-r from-[#06beb6] to-[#48b1bf] text-[#D7D7DE]">
                    Log In
                  </button>
                </Link>
              )}

              {user && (
               
                  <div className="">
                    <div className="flex gap-2 mb-1 items-start">
                        <img
                        className="w-5 h-5 mt-1 cursor-pointer md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full"
                        src={userPhoto}
                        alt=""
                        />
                        <div>
                        <h1 className=" text-sm">{userName}</h1>
                        <p className="text-xs">{userEmail}</p>
                        </div>
                    </div>
                      <Link
                        to="/Dashboard"
                        className="font-medium cursor-pointer text-[16px]"
                      >
                        Dashboard
                      </Link>
                  
                    </div>
            
            
              )}

              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={` font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    toggleMenu();
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              {user && (
    <button
    onClick={handleLogOut}
    className=" font-medium cursor-pointer text-[16px]"
  >
    Log Out
  </button>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
