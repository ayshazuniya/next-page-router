// src/app/components/ProductCard.js
'use client';

import Link from 'next/link';
import AddToCart from './AddToCart';

export default function ProductCard({ product }) {
  // Defensive guard: avoid crashing during prerender if product is undefined
  if (!product) return null;

  const { id, title, image, price, description } = product;

  return (
    <article className="card h-100 shadow-sm">
      <Link href={`/products/${id}`} className="text-decoration-none" aria-label={`View ${title}`}>
        <img
          src={image}
          alt={title}
          className="card-img-top"
          style={{ height: 290, objectFit: 'cover' }}
        />
      </Link>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title mb-1" style={{ lineHeight: 1.1 }}>
          <Link href={`/products/${id}`} className="text-dark text-decoration-none">
            {title}
          </Link>
        </h5>

        <p className="text-muted mb-2">₹{price}</p>

        <p className="card-text text-muted mb-3" style={{ fontSize: 14, flex: 1 }}>
          {description?.slice(0, 90)}{description && description.length > 90 ? '…' : ''}
        </p>

        <div className="d-flex gap-2 align-items-center mt-auto">
          <Link href={`/products/${id}`} className="btn btn-sm">
            View
          </Link>

          {/* AddToCart must be a client component (see note below) */}
          <AddToCart product={product} />
        </div>
      </div>
    </article>
  );
}




