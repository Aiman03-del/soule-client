import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import ProductListPage from "./pages/dashboard/ProductListPage";
import AddProductPage from "./pages/dashboard/AddProductPage";
import Login from "./pages/Login";
import DashboardLayout from "./layouts/DashboardLayout";
import { Toaster } from "react-hot-toast";
import MainLayout from "./layouts/MainLayout";

// ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("access_token");
  return token ? children : <Navigate to="/login" replace />;
};

function App() {
  const [editProduct, setEditProduct] = useState(null);

  return (
    <div style={{ background: "#fff", minHeight: "100vh", color: "#000" }}>
      <Router>
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route
            path="/login"
            element={
              <Login />
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="products" replace />} />
            <Route
              path="products"
              element={<ProductListPage onEdit={setEditProduct} />}
            />
            <Route path="add-product" element={<AddProductPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
// <Route
//                     path="products"
//                     element={<ProductListPage onEdit={setEditProduct} />}
//                   />
