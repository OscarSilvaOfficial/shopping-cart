import { ReactNode } from "react";
import { CartItem } from "../../Models/CardItem";

export type ContextProps = {
  children: ReactNode;
}

export type CartProviderOptions = {
  cartItems: CartItem[];
  addCartItem: (item: CartItem) => void;
}