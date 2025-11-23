// Libs
import React, { useEffect, useRef, useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

// Styles
import './App.css';

// Pages
import {
  MainPage,
  ProductPage,
  AccountDetailSettings,
  BusketPage,
  BlogPage,
  ShopsPage,
  PlantCarePage
} from './pages/imports';

// Components
import { Cookie } from './components/imports';

// Hooks
import ScrollToTop from './hooks/ScrollToTop';

function App() {

  return (
    <BrowserRouter>
      <Cookie />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/basket" element={<BusketPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/shops" element={<ShopsPage />} />
        <Route path="/plantcare" element={<PlantCarePage />} />
        <Route path="/user/settings/accountdetail" element={<AccountDetailSettings />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
