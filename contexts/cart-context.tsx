import { Cart } from "@/api/cart";
import { CartItem } from "@/types/types";
import { PropsWithChildren, createContext } from "react";

type CartContextType = {
  cart: Cart;
};

export const CartContext = createContext<CartContextType>(undefined as any);

export const CartProvider = ({ children }: PropsWithChildren) => {
  const cart = new Cart();

  return (
    <CartContext.Provider
      value={{
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
