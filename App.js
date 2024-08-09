import './input.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home.js';
import { About } from './pages/aboutUs.js';
import Header from './components/header';
import Footer from './components/footer';
import ScrollToTop from './components/ScrollToTop';
import { Contactus } from './pages/contactUs';
import { Products } from './pages/Products';
import { ProductDetails } from './pages/ProductDetails';
import { Quality } from './pages/quality';
import { PageNotFound } from './pages/PageNotFound';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<About />}></Route>
          <Route path="/shop" element={<Products />}></Route>
          <Route
            path="/shop/product/:productID"
            element={<ProductDetails />}
          ></Route>
          <Route path="/contact-us" element={<Contactus />}></Route>
          <Route path="/quality" element={<Quality />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
