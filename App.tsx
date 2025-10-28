import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import ReviewsPage from './pages/ReviewsPage';
import ProductsPage from './pages/ProductsPage';
import ConsultationPage from './pages/ConsultationPage';
import CreditLoanPage from './pages/CreditLoanPage';
import CollateralLoanPage from './pages/CollateralLoanPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/consultation" element={<ConsultationPage />} />
            <Route path="/credit-loan" element={<CreditLoanPage />} />
            <Route path="/collateral-loan" element={<CollateralLoanPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;