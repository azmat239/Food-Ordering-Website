import { createContext, useContext } from "react";

const CartContext = createContext({
  cart: [
    {
      id: "",
      name: "",
      des: "",
      imgSrc: "",
      size: "",
      Quantity: 0,
      totalPrice: 0,
    },
  ],
  addCart: (cart) => {},
  removeCart: () => {},
});

export const CartContextProvider = CartContext.Provider;

export const useCart = () => {
  return useContext(CartContext);
};
