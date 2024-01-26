import { API_URL } from "@/constants";
import { Product } from "@/types/types";

export const getProducts = async (category?: string): Promise<Product[]> => {
  const url = !!category ? `products/category/${category}` : `products`;
  const response = await fetch(`${API_URL}/${url}`);
  return response.json();
};

export const getCategories = async (): Promise<string[]> => {
  const url = `${API_URL}/products/categories`;
  const response = await fetch(url);
  return response.json();
};

export const getProduct = async (
  productId: number | string
): Promise<Product> => {
  const url = `${API_URL}/products/${productId}`;
  const response = await fetch(url);
  return response.json();
};
