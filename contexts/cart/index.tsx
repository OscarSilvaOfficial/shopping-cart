import { useContext } from "react";
import { CartContext } from "./provider";

export const useCartContext = () => useContext(CartContext);
