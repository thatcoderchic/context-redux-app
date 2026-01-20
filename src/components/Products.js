import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../redux/productsSlice";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const PRODUCT_OPTIONS = [
  "MacBook Pro",
  "iPhone 15",
  "AirPods Pro",
  "Mechanical Keyboard",
  "Gaming Mouse"
];

function Products() {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  const { role } = useAuth();
  const [selectedProduct, setSelectedProduct] = useState(PRODUCT_OPTIONS[0]);

  return (
    <div className="card">
      <h2>Products</h2>

      {role === "admin" && (
        <>
          <select onChange={(e) => setSelectedProduct(e.target.value)}>
            {PRODUCT_OPTIONS.map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>

          <button
            onClick={() =>
              dispatch(addProduct({ id: Date.now(), name: selectedProduct }))
            }
          >
            Add Product
          </button>
        </>
      )}

      {products.map(p => (
        <div key={p.id} className="product-item">
          <span>{p.name}</span>
          {role === "admin" && (
            <button onClick={() => dispatch(removeProduct(p.id))}>
              ❌
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Products;
