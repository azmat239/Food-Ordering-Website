import { createContext, useContext } from "react";

const CartContext = createContext({
  cart: [
    {
      id: "",
      name: "",
      des: "",
    },
  ],
  addCart: (cart) => {},
});

export const CartContextProvider = CartContext.Provider;

export const useCart = () => {
  return useContext(CartContext);
};
