import { createContext, useState } from "react";

const AppContext = createContext([]);

const AppContextProvider = ({ children }) => {
  const [products, SetProducts] = useState([]);
  const [error, SetError] = useState(null);
  const [loading, SetLoading] = useState(true);

  return (
    <AppContext.Provider
      value={{ products, SetProducts, error, SetError, loading, SetLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };