import React from "react";
import { useNavigate } from "react-router-dom";
import allProducts from "../ProductData";

const ProductGrid = ({ products = allProducts, randomize = false, limit = null }) => {
  const navigate = useNavigate();

  // Shuffle array if randomize is true
  const shuffled = randomize
    ? [...products].sort(() => 0.5 - Math.random())
    : [...products];

  const displayedProducts = limit ? shuffled.slice(0, limit) : shuffled;

  return (
    <div className="py-8 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {displayedProducts.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-2xl shadow-sm hover:shadow-md transition hover:scale-[1.02] overflow-hidden cursor-pointer"
          onClick={() => navigate(`/products/${product.id}`)}
        >
          <div className="overflow-hidden h-40">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-3">
            <p className="text-xs text-gray-400 mb-1">
              {product.category} &raquo; {product.subcategory}
            </p>
            <h3 className="text-sm font-semibold text-gray-800 truncate">
              {product.title}
            </h3>
            <p className="text-xs text-gray-600 truncate">
              {product.description}
            </p>
            <button className="mt-2 text-blue-600 text-sm underline hover:text-blue-800">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
