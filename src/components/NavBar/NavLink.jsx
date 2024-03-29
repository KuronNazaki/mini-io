import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const STATUS_STYLES = {
  true: 'text-lg block py-2 pr-4 pl-3 text-white bg-teal-500 rounded md:bg-transparent md:text-teal-500 md:p-0 dark:text-white',
  false:
    'text-lg block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-teal-500 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700',
}

const NavLink = ({ path, children, active, className }) => {
  return (
    <Link
      to={path}
      className={className ? className : STATUS_STYLES[active.toString()]}
    >
      {children}
    </Link>
  )
}

NavLink.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  children: PropTypes.node,
  active: PropTypes.bool,
}

NavLink.defaultProps = {
  children: '',
  active: false,
}

export default NavLink
