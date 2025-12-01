// components/AddToCart.js
'use client';

import { useCart } from '../../context/CartContext';

export default function AddToCart({ product, children }) {
  const { add } = useCart();

  return (
    <button
      onClick={() => add(product)}
      className="btn btn-outline-primary"
      type="button"
    >
      {children ?? 'Add to cart'}
    </button>
  );
}
