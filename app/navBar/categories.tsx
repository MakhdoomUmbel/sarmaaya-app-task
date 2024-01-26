import React from 'react'

const CategoryLinks = () => {
    const categories = ['Electronic', 'Mens Fashion', "Women's Fashion", 'Jewelry'];
//call api here to get categories.
    return (
      <div className="flex gap-12">
        {categories.map((category) => (
          <div key={category} className="font-semibold text-black">
            {category}
          </div>
        ))}
      </div>
    );
}

export default CategoryLinks