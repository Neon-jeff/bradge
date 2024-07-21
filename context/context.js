import { createContext, useState } from "react";

const AppContext = createContext([]);

const AppContextProvider = ({ children }) => {
  const [products, SetProducts] = useState([]);
  const [error, SetError] = useState(null);
  const [loading, SetLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [history,setHistory]=useState([])
  const [wishlist,setWishlist]=useState([])

  return (
    <AppContext.Provider
      value={{
        products,
        SetProducts,
        error,
        SetError,
        loading,
        SetLoading,
        orders,
        setOrders,
        history,
        setHistory,
        wishlist,
        setWishlist
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
