/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="border-4 border-solid border-red-400 flex justify-center items-center mb-4">
      <ul className="list-none flex gap-4 py-4">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/review"}>Order Review</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
