import React from "react";
import Navigation from "./Navigation";

const styles = {
  background: "tomato",
  padding: 10,
  color: "snow",
  fontWeight: "bold",
  fontSize: 18,
};

const Header = () => (
  <div style={styles}>
    <Navigation />
    <hr />
  </div>
);

export default Header;
