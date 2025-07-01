import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct, updateProduct } from '../../services/productApi';
import ProductList from '../../components/ProductList';
import ProductForm from '../../components/ProductForm';
import { toast } from "react-hot-toast";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editProduct, setEditProduct] = useState(null);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const res = await getProducts();
      setProducts(res.data);
    } catch {
      setError('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      loadProducts();
      // toast handled in ProductList
    } catch {
      toast.error("Delete failed!", { position: "top-center" });
    }
  };

  const handleEdit = (product) => {
    setEditProduct(product);
  };

  const handleUpdate = async (product) => {
    try {
      await updateProduct(product.id, product);
      setEditProduct(null);
      loadProducts();
      toast.success("Product updated!", { position: "top-center" });
    } catch {
      toast.error("Update failed!", { position: "top-center" });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Products</h2>
      {error && <p className="text-red-500">{error}</p>}
      {editProduct && (
        <div className="mb-6">
          <ProductForm
            productToEdit={editProduct}
            onSubmit={handleUpdate}
            onCancel={() => setEditProduct(null)}
          />
        </div>
      )}
      {loading ? <p>Loading...</p> : (
        <ProductList products={products} onDelete={handleDelete} onEdit={handleEdit} />
      )}
    </div>
  );
};

export default ProductListPage;
