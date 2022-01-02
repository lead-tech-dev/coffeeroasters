import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    const navLink = document.querySelectorAll("li.nav-link");

    navLink.forEach((item) => {
      item.addEventListener("click", (e) => handleClick(e));
    });
  }, []);

  const handleClick = (e: any) => {
    const activeClass = document.querySelector(".active");

    activeClass?.classList.remove("active");
    e.target.classList.add("active");
  };

  return (
    <nav>
      <ul>
        <li className="nav-link">
          <Link to={`${process.env.PUBLIC_URL}/`} className="active">
            Home
          </Link>
        </li>
        <li className="nav-link">
          <Link to={`${process.env.PUBLIC_URL}/about-us`}>About-us</Link>
        </li>
        <li className="nav-link">
          <Link to={`${process.env.PUBLIC_URL}/subscribe`}>
            Create your plan
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
