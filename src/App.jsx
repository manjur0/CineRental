import { useState } from "react";

import { movieContext, themeContext } from "./context";
import Page from "./Pages/Page";

const App = () => {
  const [CartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <themeContext.Provider value={{ darkMode, setDarkMode }}>
        <movieContext.Provider value={{ CartData, setCartData }}>
          <Page />
        </movieContext.Provider>
      </themeContext.Provider>
    </>
  );
};

export default App;
