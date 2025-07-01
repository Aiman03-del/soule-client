import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/productApi';

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ name: '', price: '', description: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchProducts = async () => {
    try {
      const res = await getProducts();
      setProducts(res.data);
    } catch {
      setError('Failed to load products');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEdit = (product) => {
    setEditId(product.id);
    setForm({ name: product.name, price: product.price, description: product.description });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await updateProduct(editId, { ...form, price: parseFloat(form.price) });
      setEditId(null);
      setForm({ name: '', price: '', description: '' });
      fetchProducts();
    } catch {
      setError('Failed to update product');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setLoading(true);
    setError('');
    try {
      await deleteProduct(id);
      fetchProducts();
    } catch {
      setError('Failed to delete product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Product</h2>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="space-y-2">
        {products.map(prod => (
          <li key={prod.id} className="border p-2 rounded flex justify-between items-center">
            {editId === prod.id ? (
              <form onSubmit={handleUpdate} className="flex flex-col gap-2 w-full">
                <input
                  name="name"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="border p-1 rounded"
                  required
                />
                <input
                  name="price"
                  type="number"
                  value={form.price}
                  onChange={e => setForm({ ...form, price: e.target.value })}
                  className="border p-1 rounded"
                  required
                />
                <textarea
                  name="description"
                  value={form.description}
                  onChange={e => setForm({ ...form, description: e.target.value })}
                  className="border p-1 rounded"
                />
                <div className="flex gap-2">
                  <button type="submit" className="bg-green-600 text-white px-2 py-1 rounded" disabled={loading}>
                    Save
                  </button>
                  <button type="button" className="bg-gray-400 text-white px-2 py-1 rounded" onClick={() => setEditId(null)}>
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <>
                <div>
                  <strong>{prod.name}</strong> - ${prod.price} <br />
                  {prod.description}
                </div>
                <div className="flex gap-2">
                  <button className="bg-yellow-400 px-2 py-1 rounded" onClick={() => handleEdit(prod)}>
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDelete(prod.id)} disabled={loading}>
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageProduct;
