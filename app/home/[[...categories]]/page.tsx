"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "../../../lib/product-card";
import { Product } from "@/types/types";
import { API_URL } from "@/constants";
import RootLayout from "@/app/layout";
import { getProducts } from "@/api/products";
import { CartContext, CartProvider } from "@/contexts/cart-context";

type Categories = string[];

const HomePage = ({ params }: { params: { categories: Categories } }) => {
  const { categories } = params;
  const category = categories?.[0] ?? "";
  const [products, setProducts] = useState<Product[]>([]);
  const fetchData = async () => setProducts(await getProducts(category));

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CartProvider>
      <div className="grid grid-cols-4  gap-x-[36px] gap-y-[12px]">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </CartProvider>
  );
};

export default HomePage;
