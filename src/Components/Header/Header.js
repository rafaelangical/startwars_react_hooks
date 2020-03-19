import React from "react";

const Header = ({ title, className }) => (
  <header className={className} id="header">
    <h1>{title}</h1>
  </header>
);
export default Header;
