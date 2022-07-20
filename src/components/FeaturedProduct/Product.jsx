/* eslint-disable jsx-a11y/anchor-has-content */

import { Link } from 'react-router-dom'

/* eslint-disable jsx-a11y/anchor-is-valid */
const Product = ({ product }) => {
  return (
    <div className="product-item w-full flex flex-col bg-white relative border border-solid border-slate-300 rounded-2xl p-5 hover:border-teal-300 hover:-translate-y-2 hover:shadow-lg transition-transform">
      <Link to={`/product/${product.id}`} className="flex-shrink-0 p-2">
        <img src={product?.image} alt="Product" />
      </Link>
      <div className="product-info flex flex-col justify-between flex-grow">
        <div className="heading">
          <span className="text-sm font-semibold text-slate-500">
            {product.brand}
          </span>
          <Link to={`/product/${product.id}`}>
            <h3 className="font-bold text-lg text-slate-800">
              {product.title}
            </h3>
          </Link>
        </div>
        <div className="price mt-4 flex gap-x-2 items-end">
          <span className="font-bold text-teal-600 text-4xl">
            ${product.newPrice}
          </span>
          <span className="font-semibold text-slate-300 text-lg line-through">
            ${product.oldPrice}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Product
