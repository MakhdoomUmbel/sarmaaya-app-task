import { getCategories } from "@/api/products";
import { API_URL } from "@/constants";
import { CartContext, CartProvider } from "@/contexts/cart-context";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const fetchData = async () => {
    const response = await getCategories();
    setCategories(response);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CartProvider>
      <div className="flex flex-row gap-4 py-5 fixed top-0">
        <h1 className="text-2xl font-bold">ECommerce</h1>
        <div className="flex flex-row gap-4 ml-4">
          {categories.map((category) => (
            <button className="capitalize">
              <Link href={`/home/${category}`}>{category}</Link>
            </button>
          ))}
        </div>
        <Link href="/cart">
          <button type="button" className="bg-black px-5 py-2 text-white">
            Cart
          </button>
        </Link>
      </div>
    </CartProvider>
  );
};

export default NavBar;
