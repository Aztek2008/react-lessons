import React from "react";
// import withFetch from "../components/hoc/withFetch";
// import MyComponent from "./MyComponent";
import ThemeContext from "../contexts/ThemeContext";
import Toggler from "./Toggler";
import Button from "../contexts/ThemeContext";
console.log("Button", Button);

const App = (props) => (
  // return <h1>In my props will be DATA, LOAING and ERROR</h1>;
  // return <MyComponent />;
  <ThemeContext>
    <>
      {/* <Button theme={"light"} /> */}
      <Toggler>
        {({ isOpen, onToggle }) => (
          <>
            <button type="button" onClick={onToggle}>
              {isOpen ? "Hide" : "Show"}
            </button>
            {isOpen && <p>Open some text in App omponent with Toggle</p>}
          </>
        )}
      </Toggler>
      {/*  */}
      <Toggler>
        {({ isOpen, onToggle }) => (
          <>
            <label>
              <input type="checkbox" checked={isOpen} onChange={onToggle} />
              {isOpen ? "Hide" : "Show"}
            </label>
            {isOpen && <p>Open some text in App omponent with Toggle</p>}
          </>
        )}
      </Toggler>
    </>
  </ThemeContext>
);

const user = {
  name: "Alyosha",
  age: 38,
};

const FetchUser = () =>
  new Promise((resolve) => setTimeout(() => resolve(user), 3000));

console.log("FetchUser", FetchUser());

export default App;

// export default withFetch("https://jsonplaceholder.typicode.com/todos")(App);
