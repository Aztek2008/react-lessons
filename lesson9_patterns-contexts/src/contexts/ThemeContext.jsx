import React, { createContext } from "react";

const ThemeContext = createContext();
ThemeContext.displayName = "ContexT";

const App = () => (
  <ThemeContext.Provider value="light">
    <div className="App">
      <Toolbar />
    </div>
  </ThemeContext.Provider>
);

const Toolbar = () => (
  <div className="Toolbar">
    <Button label="Log In" />
    <Button label="Log Out" />
  </div>
);

const Button = ({ label }) => (
  <ThemeContext.Consumer>
    {(theme) => (
      <button
        className={theme === "light" ? "btn-light" : "btn-dark"}
        type="button"
      >
        {label}
      </button>
    )}
  </ThemeContext.Consumer>
);

export default Button;
