
import { useParams } from "react-router-dom";
import products from "../ProductData";
import ProductGrid from "../ProductsList";

const ProductDetail = () => {
  const { productId } = useParams();
  
  const product = products.find((p) => p.id.toString() === productId);

  if (!product) return <p className="p-4 text-red-500">Product not found.</p>;

  const similarProducts = products.filter(
    (p) => p.subcategory === product.subcategory && p.id !== product.id
  );

  const whatsappNumber = "923364206751"; 

  return (
    <div className="max-w-5xl mx-auto py-2 px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="overflow-hidden  ">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover hover:scale-150 transition-transform duration-300"
          />
        </div>

        <div className="flex flex-col justify-center space-y-3">
          <h1 className="text-2xl font-semibold text-gray-800">{product.title}</h1>
          <p className="text-gray-500 text-xs">
            Category: {product.category} &raquo; {product.subcategory}
          </p>
          <p className="text-gray-700 text-sm">{product.description}</p>

          <div className="flex space-x-4 mt-4">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in "${product.title}".`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
            >
              WhatsApp Now
            </a>
            
          </div>
        </div>
      </div>

    <div className="mt-6"><h1 className="text-[#1e5d8a] text-xl font-bold"> Related Products</h1></div>
      <ProductGrid randomize={true} limit={4} />
    </div>
  );
};

export default ProductDetail;
