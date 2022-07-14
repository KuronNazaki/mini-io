import PropTypes from 'prop-types'

const VARIANTS = {
  primary:
    'text-white bg-teal-500 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800',
  borderless:
    'inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600',
}

const Button = ({ children, variant, onClick, className }) => {
  return (
    <button type="button" className={`${VARIANTS[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  onClick: PropTypes.func,
	className: PropTypes.string,
}

Button.defaultProps = {
  children: '',
  variant: 'primary',
  onClick: null,
	className: ''
}

export default Button
