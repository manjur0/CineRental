import { useState, useReducer } from "react";

import { movieContext, themeContext } from "./context";
import Page from "./Pages/Page";
import { cartReducer, initialState } from "./Reducers/cartReducer";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <>
      <themeContext.Provider value={{ darkMode, setDarkMode }}>
        <movieContext.Provider value={{ state, dispatch }}>
          <Page />
        </movieContext.Provider>
      </themeContext.Provider>
    </>
  );
};

export default App;
