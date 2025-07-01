import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import ProductListPage from './dashboard/ProductListPage';
import AddProductPage from './dashboard/AddProductPage';

const Dashboard = () => {
  const [editProduct, setEditProduct] = useState(null);

  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Navigate to="products" replace />} />
        <Route path="products" element={<ProductListPage onEdit={setEditProduct} />} />
        <Route path="add-product" element={<AddProductPage />} />
      </Routes>
    </DashboardLayout>
  );
};

export default Dashboard;
