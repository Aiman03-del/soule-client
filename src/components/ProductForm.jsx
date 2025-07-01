import { useState, useEffect } from "react";

const initialData = {
  name: "",
  description: "",
  price: "",
};

const ProductForm = ({ onSubmit, productToEdit, onCancel }) => {
  const [product, setProduct] = useState(initialData);

  useEffect(() => {
    if (productToEdit) setProduct(productToEdit);
  }, [productToEdit]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name || !product.price) return;

    const finalProduct = {
      ...product,
      price: Number(product.price), // ✅ ensure it's a number
    };

    onSubmit(finalProduct);
    setProduct(initialData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4  p-4 rounded shadow">
      <input
        name="name"
        placeholder="Name"
        className="border w-full p-2"
        onChange={handleChange}
        value={product.name}
      />
      <input
        name="description"
        placeholder="Description"
        className="border w-full p-2"
        onChange={handleChange}
        value={product.description}
      />
      <input
        name="price"
        placeholder="Price"
        type="number"
        className="border w-full p-2"
        onChange={handleChange}
        value={product.price}
      />
      <div className="flex gap-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          {productToEdit ? "Update Product" : "Add Product"}
        </button>
        {productToEdit && onCancel && (
          <button
            type="button"
            className="bg-gray-400 text-white px-4 py-2 rounded"
            onClick={onCancel}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default ProductForm;
