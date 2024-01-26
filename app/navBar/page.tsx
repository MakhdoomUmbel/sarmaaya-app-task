import Link from 'next/link'
import React from 'react'
import CategoryLinks from './categories'
import ShoppingCart from './cart'

const NavigationBar
 = () => {
  return (
    <>
    <div className="absolute top-12 left-20 w-full flex items-center justify-between">
    <div className="text-black font-playfair-display text-2xl">
      Ecommerce
    </div>
    <div className="flex gap-12">
      <CategoryLinks />
      {/* <SearchBar />  */}
      <ShoppingCart />
    </div>
  </div>

    </>
    

  )
}

export default NavigationBar
