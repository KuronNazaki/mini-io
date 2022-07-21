const Review = ({ review }) => {
  return (
    <div className="p-5 rounded-lg shadow-md bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg">
      <div className="flex items-center mb-4 space-x-4">
        <div className="space-y-1 font-bold dark:text-white">
          <p>{review.author}</p>
        </div>
      </div>
      <div className="flex items-center mb-1">
        <h3 className="text-sm font-semibold text-teal-500 dark:text-white">
          {review.title}
        </h3>
      </div>
      <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
        <p>Reviewed in the {review.location}</p>
      </footer>
      <p className="text-sm mb-2 text-gray-500 dark:text-gray-400">
        {review.content}
      </p>
    </div>
  )
}

export default Review
