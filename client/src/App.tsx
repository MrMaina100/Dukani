import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import LandingPage from './components/layout/LandingPage';
import AllProductsPage from './components/layout/AllProductsPage';
import ProductDetailsPage from './components/layout/ProductDetailsPage';
import ElectronicsPage from './components/layout/ElectronicsPage';
import JeweleryPage from './components/layout/JeweleryPage';
import MenClothingPage from './components/layout/MenClothingPage';
import WomenClothingage from './components/layout/WomenClothingPage';
import CartPage from './components/layout/CartPage';

export default function App() {
  return (
    <>
      <Router>
        <div className="">
          <NavBar />
        </div>
        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<AllProductsPage />} path="/allproducts" />
          <Route path="/electronics" element={<ElectronicsPage />} />
          <Route path="/jewelery" element={<JeweleryPage />} />
          <Route path="/men clothing" element={<MenClothingPage />} />
          <Route path="/women clothing" element={<WomenClothingage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/:id" element={<ProductDetailsPage />} />
        </Routes>
      </Router>
    </>
  );
}
