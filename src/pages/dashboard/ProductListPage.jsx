import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct, updateProduct } from '../../services/productApi';
import ProductList from '../../components/ProductList';
import ProductForm from '../../components/ProductForm';
import { toast } from "react-hot-toast";

const PRODUCTS_PER_PAGE = 6;

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editProduct, setEditProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

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
      // ডিলিটের পর নতুন প্রোডাক্ট লিস্ট
      const res = await getProducts();
      const updatedProducts = res.data;
      setProducts(updatedProducts);

      // ডিলিটের পর যদি কারেন্ট পেজে কোনো প্রোডাক্ট না থাকে এবং কারেন্ট পেজ > 1 হয়, তাহলে আগের পেজে নিয়ে যাবে
      const totalPagesAfterDelete = Math.ceil(updatedProducts.length / PRODUCTS_PER_PAGE);
      if (currentPage > totalPagesAfterDelete && totalPagesAfterDelete > 0) {
        setCurrentPage(totalPagesAfterDelete);
      }

      toast.success("Product deleted!", { position: "top-center" });
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

  // Pagination logic
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = products.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
        <>
          <ProductList products={paginatedProducts} onDelete={handleDelete} onEdit={handleEdit} />
          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6 gap-2">
              <button
                className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx + 1}
                  className={`px-3 py-1 rounded ${currentPage === idx + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                  onClick={() => handlePageChange(idx + 1)}
                >
                  {idx + 1}
                </button>
              ))}
              <button
                className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductListPage;
