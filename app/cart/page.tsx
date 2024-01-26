"use client";

import React, { useState } from "react";
import RootLayout from "../layout";
import Image from "next/image";
import { Cart } from "@/api/cart";
import { CartProvider } from "@/contexts/cart-context";
import CartWrapper from "./cart-wrapper";

const CartPage = () => {
  return (
    <CartProvider>
      <CartWrapper />
    </CartProvider>
  );
};

export default CartPage;
