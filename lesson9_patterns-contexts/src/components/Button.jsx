import React from "react";
import withTheme from "./hoc/withTheme";

const Button = ({ label, theme }) => (
  <>
    <button
    // className={theme === "light" ? "btn-light" : "btn-dark"}
    // type="button"
    >
      {label}
    </button>
  </>
);

export default withTheme(Button);
