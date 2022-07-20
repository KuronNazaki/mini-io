import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from '../Button'
import Gradient1 from './../../assets/images/gradient-1.png'
import NavLink from './NavLink'

/* eslint-disable jsx-a11y/anchor-is-valid */
const NavBar = () => {
  const { pathname } = useLocation()

  const [isExpanded, setIsExpanded] = useState(false)
  const onToggleExpansion = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <div className="container mx-auto pt-5">
      {/* <img
        className="absolute top-0 left-0 -z-10"
        src={Gradient1}
        alt="Gradient 1"
      /> */}
      <nav className="border-gray-200 py-2.5 rounded dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center">
          <a href="#" className="flex items-center gap-x-4">
            <div>
              <svg
                className="w-10"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                {' '}
                <defs>
                  {' '}
                  <linearGradient
                    x1="26%"
                    y1="100%"
                    x2="100%"
                    y2="100%"
                    id="logo_a"
                  >
                    {' '}
                    <stop stopColor="#3ABAB4" offset="0%"></stop>{' '}
                    <stop stopColor="#7F9CF5" offset="100%"></stop>{' '}
                  </linearGradient>{' '}
                  <linearGradient
                    x1="26%"
                    y1="100%"
                    x2="100%"
                    y2="100%"
                    id="logo_b"
                  >
                    {' '}
                    <stop stopColor="#3ABAB4" offset="0%"></stop>{' '}
                    <stop
                      stopColor="#3ABAB4"
                      stopOpacity="0"
                      offset="100%"
                    ></stop>{' '}
                  </linearGradient>{' '}
                </defs>{' '}
                <path
                  d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z"
                  fill="url(#logo_a)"
                ></path>{' '}
                <path
                  d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z"
                  fill="url(#logo_b)"
                ></path>{' '}
              </svg>
            </div>
            <span className="self-center text-3xl font-black whitespace-nowrap dark:text-white">
              Mini.io
            </span>
          </a>
          <div className="flex md:order-2">
            <Link to="/contact">
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="text-white bg-teal-500 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
              >
                Let's talk
              </button>
            </Link>
            <Button variant="borderless" onClick={onToggleExpansion}>
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Button>
          </div>
          <div
            className={`${
              isExpanded ? '' : 'hidden'
            } justify-between items-center w-full md:flex md:w-auto md:order-1`}
            id="mobile-menu-4"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <NavLink
                  name="home"
                  path="/home"
                  active={pathname === '/home' ? true : false}
                >
                  Home
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  name="about"
                  path="/about"
                  active={pathname === '/about' ? true : false}
                >
                  About
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  name="product"
                  path="/product"
                  active={
                    pathname === '/product' || pathname.includes('/product')
                      ? true
                      : false
                  }
                >
                  Product
                </NavLink>
              </li>
              <li>
                <NavLink
                  name="contact"
                  path="/contact"
                  active={pathname === '/contact' ? true : false}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
