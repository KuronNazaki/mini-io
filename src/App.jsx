import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Home from './containers/home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './containers/about'
import Service from './containers/service'
import Contact from './containers/contact'
import ProductWrapper from './components/FeaturedProduct/ProductWrapper'
import Background from './components/GradientBackground'
import { useEffect, useState } from 'react'
import Product from './containers/product'

function App() {
  const [currentPath, setCurrentPath] = useState(useLocation().pathname)
  const pathname = useLocation().pathname
  useEffect(() => {
    if (currentPath !== pathname) {
      setCurrentPath(pathname)
    }
  }, [currentPath, pathname])
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" exact element={<ProductWrapper />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      <Footer />
      <Background currentPath={currentPath} />
    </div>
  )
}

export default App
