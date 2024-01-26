export type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export type CartItem = Pick<Product, "id" | "title" | "image" | "price"> & {
  quantity: number;
};
