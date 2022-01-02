import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li className="nav-link">
          <Link
            to={`${process.env.PUBLIC_URL}/`}
            className={`${location.pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>
        </li>
        <li className="nav-link">
          <Link
            to={`${process.env.PUBLIC_URL}/about-us`}
            className={`${location.pathname === "/about-us" ? "active" : ""}`}
          >
            About-us
          </Link>
        </li>
        <li className="nav-link">
          <Link
            to={`${process.env.PUBLIC_URL}/subscribe`}
            className={`${location.pathname === "/subscribe" ? "active" : ""}`}
          >
            Create your plan
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
