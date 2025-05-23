import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHeaderSticky, setIsHeaderSticky] = useState(true);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarItems = [
    { id: 1, label: "About", to: "about" },
    { id: 2, label: "Contact", to: "contact" },
    { id: 3, label: "Education", to: "education" },
    { id: 4, label: "Skills", to: "tech" },
    { id: 5, label: "Projects", to: "project" },
  ];

  const sortedSidebarItems = sidebarItems.sort((a, b) => a.id - b.id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsHeaderSticky(false);
      } else {
        setIsHeaderSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`sidebar w-full h-24 fixed top-0 right-0 left-0 z-20 max-[945px]:hidden sm:flex justify-center items-center rounded shadow-sm transition-all duration-700 ${
          isHeaderSticky ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
        }`}
      >
        <div className="w-[50%] h-full text-6xl text-[#00CF5D] flex items-center relative left-[5.4rem] px-6 font-semibold">
          M
        </div>
        <div className="w-[50%] h-full flex gap-x-12 justify-center items-center px-6">
          {sortedSidebarItems.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              spy={true}
              smooth={true}
              duration={500}
              className="link"
            >
              <span className="span text-xl text-white cursor-pointer">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="sidebar w-full h-24 fixed z-20 flex justify-around min-[946px]:hidden items-center rounded shadow-sm">
        <div className="w-44 h-full text-6xl text-[#00CF5D] flex justify-center items-center relative -left-[13%] max-[655px]:-left-[24%] text-start font-semibold">
          R
        </div>
        <div className="text-black p-2 bg-[#00CF5D] rounded-sm shadow-md menu">
          <AiOutlineMenu className="w-8 h-8" onClick={handleSidebarToggle} />
        </div>
      </div>

      {isSidebarOpen && (
        <div className="fixed min-[945px]:hidden inset-y-0 left-0 w-64 h-screen transition-all duration-500 ease-out flex flex-col justify-between bg-white shadow-lg z-20">
          <div className="sidebar w-full h-24 shadow-md flex justify-center items-center text-2xl text-white font-semibold gap-x-8">
            <p>Portfolio</p>
            <div className="w-8 h-8">
              <AiOutlineClose className="w-8 h-8" onClick={handleSidebarToggle} />
            </div>
          </div>
          <div className="sidebar  w-full h-full flex flex-col justify-evenly items-center">
            {sortedSidebarItems.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                className="link"
                onClick={handleSidebarToggle}
              >
                <span className="span text-xl text-white cursor-pointer">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
