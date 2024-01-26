"use client";
import { getProduct } from "@/api/products";
import { API_URL } from "@/constants";
import { Product } from "@/types/types";
import { NextPageContext } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ProductDetail = ({ params }: { params: { id: number } }) => {
  const [product, setProduct] = useState<Product>();

  const fetchData = async () => {
    const response = await getProduct(params.id);
    setProduct(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!product) {
    return <>Loading...</>;
  }

  return (
    <>
      <div className="w-[1354px] m-auto">
        <Link href="/home/">
          <button>Back</button>
        </Link>
        <div className="flex flex-row gap-[146px]">
          <div className="w-full p-[12px] bg-white rounded-md shadow-md">
            <Image
              src={product.image}
              alt={product.title}
              width={587}
              height={477}
            />
          </div>
          <div className="flex flex-col gap-[40px]">
            <h2 className="text-black text-3xl font-bold">{product.title}</h2>
            <div>
              <p className="text-gray-500">Category</p>
              <p className="text-black font-semibold">{product.category}</p>
            </div>
            <div>
              <p className="text-gray-500">Descriptioin</p>
              <p className="text-black font-semibold">{product.description}</p>
            </div>
            <div>
              <p>Price</p>
              <h3 className="text-black text-4xl font-bold">{product.price}</h3>
            </div>
            <button className="bg-black py-[30px] text-white rounded-2xl font-bold">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
