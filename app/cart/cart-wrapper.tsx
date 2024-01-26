import { useCart } from "@/contexts/use-cart";
import React from "react";

const CartWrapper = () => {
  const cart = useCart();

  return (
    <div>
      <h1>Your Cart</h1>
      <div className="flex flex-row gap-x-[41px]">
        <div className="flex flex-col">
          <div className="flex flex-row gap-x-[136px] px-[52px]">
            <div className="w-[136px]"></div>
            <h3>Name</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
          </div>
          <div className="flex flex-col gap-4">
            {cart.cart.products.map((product) => (
              <div className="flex flex-row gap-x-[136px] shadow-xl rounded-2xl items-center px-[52px]">
                <div className="w-[136px] h-[120px]">Image</div>
                <div>{product.title}</div>
                <div>{product.price}</div>
                <div className="flex flex-row gap-x-3">
                  <button
                    onClick={() => cart.cart.onDecrement(product.id)}
                    className="bg-black w-[40px] py-[3px] text-white rounded-md"
                  >
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    onClick={() => cart.cart.onIncrement(product.id)}
                    className="bg-black w-[40px] py-[3px] text-white rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between shadow-md bg-white rounded-2xl px-[28px] py-[20px] w-[427px] min-h-[500px]">
          <h2 className="text-xl text-black font-bold mb-3">Your Total</h2>
          <div>
            {cart.cart.products.map((product) => (
              <div className="flex flex-row justify-between">
                <div>
                  <span className="mr-2">{product.title}</span>
                  <span className="text-base text-gray-500">
                    x{product.quantity}
                  </span>
                </div>
                <span className="text-base font-semibold">{product.price}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-row justify-between">
            <span className="text-lg font-semibold">Total</span>
            <span className="text-base font-semibold">{cart.cart.total}</span>
          </div>
          <button className="bg-black text-white rounded-2xl py-3">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartWrapper;
