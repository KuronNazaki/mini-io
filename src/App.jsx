import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './containers/home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './containers/about'
import Service from './containers/service'

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/request-code" />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}

export default App
