import React from 'react'

const ShoppingCart = () => {
    return (
        <div className="rounded-mini bg-black flex items-center justify-center text-xl text-black gap-2">
          <div className="font-medium">0</div>
          <img
            className="w-6 h-6"
            alt=""
            src="/vuesaxlinearshoppingcart.svg"
          />
        </div>
      );
}

export default ShoppingCart