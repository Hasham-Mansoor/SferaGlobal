


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

// Public pages
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from './pages/AboutUs'
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./pages/PolicyPages/PrivacyPolicy";
import ReturnRefundPolicy from "./pages/PolicyPages/ReturnRefundPolicy";
import ShippingPolicy from "./pages/PolicyPages/ShippingPolicy";
import IndustrialSalts from "./pages/IndustrialSalts";
// import Shop from "./pages/Shop";

// Admin pages
// import AdminDashboard from "./pages/admin/Dashboard";
// import AdminProducts from "./pages/admin/Products";

function App() {
  return (
    <Router>
       <ScrollToTop/>
      <Routes>
        {/* Public Layout with Navbar + Footer */}
        <Route element={<MainLayout />}>
        
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/return-refund-policy" element={<ReturnRefundPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/industrial-specialty-salts" element={<IndustrialSalts />} />

          

       
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
          {/* Add more public routes */}
        </Route>

        {/* Admin Layout without public Navbar/Footer */}
        <Route element={<AdminLayout />}>
          {/* <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/products" element={<AdminProducts />} /> */}
          {/* Add more admin routes */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
