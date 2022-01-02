import React, { useState } from "react";
import Logo from "../Icons/Logo";
import Navbar from "../navbar/Navbar";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    const mobileIcon = document.querySelector(".mobile-menu ");
    setOpen((open) => !open);
    mobileIcon?.classList.toggle("open");
  };
  return (
    <header className="header-area">
      <div className="container">
        <div className="row justify-content-space-between align-items-center">
          <div className="header-area__logo">
            <a href={`${process.env.PUBLIC_URL}/`}>
              <Logo />
            </a>
          </div>
          <div className="header-area__navigation">
            <Navbar />
          </div>
          <div className="header-area__hamburger">
            {open === false ? (
              <>
                <svg
                  width="16"
                  height="15"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={handleOpen}
                >
                  <path
                    d="M14.5 12a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13zm0-6a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13zm0-6a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13z"
                    fill="#333D4B"
                    fillRule="evenodd"
                  />
                </svg>
              </>
            ) : (
              <>
                {" "}
                <svg
                  width="14"
                  height="13"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={handleOpen}
                >
                  <path
                    d="M12.657.843a1.5 1.5 0 010 2.121L9.12 6.5l3.536 3.536a1.5 1.5 0 11-2.121 2.12L7 8.622l-3.536 3.536a1.5 1.5 0 11-2.12-2.121L4.877 6.5 1.343 2.964A1.5 1.5 0 113.464.844L7 4.377 10.536.843a1.5 1.5 0 012.12 0z"
                    fill="#333D4B"
                    fillRule="evenodd"
                  />
                </svg>
              </>
            )}

            <div className="mobile-menu">
              <div className="inner">
                <Navbar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
