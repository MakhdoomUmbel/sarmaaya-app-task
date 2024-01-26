import { useCart } from "@/contexts/use-cart";
import { Product } from "@/types/types";
import Image from "next/image";

const ProductCard = ({ product }: { product: Product }) => {
  const cart = useCart();

  const onAddToCart = () => {
    cart.cart.onAddItem({ ...product, quantity: 1 });
    alert(`${product.title} added to cart`);
  };

  const shortenedDescription =
    product.description.length > 100
      ? `${product.description.substring(0, 100)}...`
      : product.description;
  const shortenedTitle =
    product.title.length > 30
      ? `${product.title.substring(0, 30)}...`
      : product.title;

  return (
    <div className="flex flex-col bg-white rounded-lg px-3 py-[30px] shadow-md">
      <div
        className="w-full h-[235px] bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: `url('${product.image}')` }}
      />
      <div className="flex flex-col px-[24px]" style={{ gap: 32 }}>
        <div>
          <h2 className="text-xl text-black font-bold">{shortenedTitle}</h2>
          <p>{product.category}</p>
        </div>
        <p className="font-medium text-base">{shortenedDescription}</p>
        <div className="flex flex-row align-middle">
          <span>Price</span>
          <span className="text-xl text-black font-bold space-x-5">
            {product.price}
          </span>
        </div>
        <button
          onClick={onAddToCart}
          className="bg-black text-white py-5 rounded-xl"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
