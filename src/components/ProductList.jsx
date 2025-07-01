import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-hot-toast";

const ProductList = ({ products, onDelete, onEdit }) => {
  // Wrapper for delete with toast
  const handleDelete = async id => {
    try {
      await onDelete(id);
      toast.success("Product deleted!", { position: "top-center" });
    } catch {
      toast.error("Delete failed!", { position: "top-center" });
    }
  };

  // Wrapper for edit with toast (optional, for update you can show toast in the form submit)
  const handleEdit = product => {
    onEdit(product);
    // toast("Edit mode", { position: "top-center" }); // Uncomment if you want a toast on edit
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {products.map(product => (
        <div
          key={product.id}
          className="p-4 rounded-xl shadow-lg bg-white/30 backdrop-blur-md border border-white/40"
          style={{
            background:
              "rgba(255,255,255,0.25)",
            boxShadow:
              "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        >
          <h3 className="text-xl font-bold mb-1">{product.name}</h3>
          <p className="mb-2">{product.description}</p>
          <p className="text-gray-700 font-semibold mb-3">${product.price}</p>
          <div className="flex gap-2 mt-3">
            <button
              className="bg-yellow-400 px-3 py-1 rounded flex items-center gap-1"
              onClick={() => handleEdit(product)}
              title="Edit"
            >
              <FaEdit />
            </button>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded flex items-center gap-1"
              onClick={() => handleDelete(product.id)}
              title="Delete"
            >
              <FaTrash /> 
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
