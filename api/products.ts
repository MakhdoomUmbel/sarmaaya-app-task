import { API_URL } from "@/constants";
import { Product } from "@/types/types";

export const getProducts = async (category?: string): Promise<Product[]> => {
  const url = !!category ? `products/category/${category}` : `products`;
  const response = await fetch(`${API_URL}/${url}`);
  return response.json();
};
