import React from "react";
import { NavLink } from "react-router-dom";

import imagePath from "../assets/pusheen.jpg";

const styles = {
  container: { textAlign: "center" },
  status: { fontSize: 96, marginBottom: 16 },
};

const NotFound = () => (
  <div style={styles.container}>
    <h1 style={styles.status}>404</h1>
    <img src={imagePath} alt="Cat detective" width="320" />
    <p>
      <NavLink
        exact
        to="/"
        className="NavigationLink"
        activeClassName="NavigationLinkActive"
      >
        Ooops, seems you've lost, here is link to main page
      </NavLink>
    </p>
  </div>
);

export default NotFound;
