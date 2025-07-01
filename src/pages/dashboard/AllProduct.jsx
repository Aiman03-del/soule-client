import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/productApi';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
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
    fetchProducts();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Products</h2>
      {error && <p className="text-red-500">{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-2">
          {products.map(prod => (
            <li key={prod.id} className="border p-2 rounded">
              <strong>{prod.name}</strong> - ${prod.price} <br />
              {prod.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllProducts;
