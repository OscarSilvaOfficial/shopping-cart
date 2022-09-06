import { createContext, ReactNode, useState } from "react";
import { CartItem } from "../../Models/CardItem";
import { CartProviderOptions, ContextProps } from "./types";

export const CartContext = createContext({} as CartProviderOptions);

export const CartProvider = ({ children }: ContextProps) => {
  const [cartItems, setCartItems] = useState([] as CartItem[]);

  const addCartItem = (item: CartItem) => setCartItems([...cartItems, item]);

  return (
    <CartContext.Provider value={{ cartItems, addCartItem }}>
      {children}
    </CartContext.Provider>
  );
};
