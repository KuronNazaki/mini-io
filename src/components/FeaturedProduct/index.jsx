import { PRODUCTS } from '../../shared/database'
import Product from './Product'

const { useState } = require('react')

const FeaturedProduct = () => {
  const [products, setProducts] = useState(PRODUCTS)
  return (
    <section className='pt-10 pb-20'>
      <div className="container mx-auto">
				<h2 className='text-6xl font-bold mb-20'>Featured Products to Pre-oder</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Product product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProduct
