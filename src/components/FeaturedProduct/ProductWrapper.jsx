import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Review from './Review'
import Breadcrumb from '../Breadcrumb'
import BreadcrumbItem from '../Breadcrumb/BreadcrumbItem'

const ProductWrapper = () => {
  const { id } = useParams()
  const products = useSelector((state) => state.product.value)
  const reviews = useSelector((state) => state.review.value)
  const product = products.filter(
    (product) => product.id === parseInt(id, 10)
  )[0]
  const filteredReviews = reviews.filter(
    (review) => review.productId === parseInt(id, 10)
  )

  return (
    <section className="my-20">
      <div className="container mx-auto flex flex-col gap-10 items-start">
        <Breadcrumb>
          <BreadcrumbItem home path="/product">
            Product
          </BreadcrumbItem>
          <BreadcrumbItem path={`/product/${product.id}`}>
            {product.title}
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="flex gap-5 flex-col lg:flex-row items-start">
          <div className="flex flex-col gap-10 justify-center items-center basis-1/2">
            <div className="product-image w-fit overflow-hidden rounded-3xl shadow-lg">
              <img src={product?.image} alt="Product" />
            </div>
            <div className="product-info flex-col justify-center items-center flex-grow">
              <div className="heading text-center">
                <span className="text-sm font-semibold text-slate-500">
                  {product.brand}
                </span>
                <h3 className="font-bold text-lg text-slate-800">
                  {product.title}
                </h3>
              </div>
              <div className="price mt-4 flex gap-x-2 items-end justify-center">
                <span className="font-bold text-teal-600 text-4xl">
                  ${product.newPrice}
                </span>
                <span className="font-semibold text-slate-300 text-lg line-through">
                  ${product.oldPrice}
                </span>
              </div>
            </div>
          </div>
          <div className="review basis-1/2 flex flex-col gap-5">
            <h3 className="text-2xl font-bold text-slate-600">Reviews</h3>
            {filteredReviews.length > 0
              ? filteredReviews.map((review) => (
                  <Review key={review.id} review={review} />
                ))
              : ''}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductWrapper
