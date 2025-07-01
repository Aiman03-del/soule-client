import React, { useState } from 'react';
import { createProduct } from '../../services/productApi';
import ProductForm from '../../components/ProductForm';
import { toast } from "react-hot-toast";

const AddProductPage = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleCreate = async (product) => {
    try {
      await createProduct(product);
      setSuccess('Product added successfully!');
      setError('');
      toast.success("Product added!", { position: "top-center" });
    } catch {
      setError('Failed to add product');
      setSuccess('');
      toast.error("Add failed!", { position: "top-center" });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-600">{success}</p>}
      <ProductForm onSubmit={handleCreate} />
    </div>
  );
};

export default AddProductPage;
