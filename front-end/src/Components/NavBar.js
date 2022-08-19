import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      NavBar
      <Link to="/"></Link>
      <Link to="/snacks/new">New Snack</Link>
    </>
  );
}

export default NavBar;
