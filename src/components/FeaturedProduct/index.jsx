import Product from './Product'
import { useSelector } from 'react-redux'

const FeaturedProduct = ({ all }) => {
  const products = useSelector((state) => state.product.value)
  const numberOfProducts = all ? products?.length : 4
  return (
    <section className="pt-10 pb-20">
      <div className="container mx-auto">
        {all ? (
          <h2 className="text-6xl font-bold mb-20 text-center">
            Electronics Shop
          </h2>
        ) : (
          <h2 className="text-6xl font-bold mb-20">
            Featured Products to Pre-oder
          </h2>
        )}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products
            .filter((product) => product.id < numberOfProducts)
            .map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProduct
