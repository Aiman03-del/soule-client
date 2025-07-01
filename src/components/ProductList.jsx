import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const ProductList = ({ products, onDelete, onEdit }) => {
  const handleDelete = id => {
    onDelete(id);
  };

  const handleEdit = product => {
    onEdit(product);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {products.map(product => (
        <div
          key={product.id}
          className="p-4 rounded-xl shadow-lg bg-white/30 backdrop-blur-md border border-white/40 flex flex-col"
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
          <h3 className="text-xl font-bold mb-1 break-words">{product.name}</h3>
          <p className="mb-2 break-words">{product.description}</p>
          <p className="text-gray-700 font-semibold mb-3">${product.price}</p>
          <div className="flex gap-2 mt-auto">
            <button
              className="bg-yellow-400 px-3 py-1 rounded flex items-center gap-1 w-full sm:w-auto justify-center"
              onClick={() => handleEdit(product)}
              title="Edit"
            >
              <FaEdit />
            </button>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded flex items-center gap-1 w-full sm:w-auto justify-center"
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
