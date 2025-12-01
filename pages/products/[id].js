// pages/products/[id].js
import AddToCart from '../components/AddToCart';
import { products } from '../../data/products';

export async function getStaticPaths() {
  const paths = products.map((p) => ({
    params: { id: String(p.id) },
  }));

  return {
    paths,
    fallback: false, // false => other paths show 404
  };
}

export async function getStaticProps({ params }) {
  const product = products.find((p) => String(p.id) === String(params.id)) || null;

  if (!product) {
    return { notFound: true };
  }

  return {
    props: { product },
  };
}

export default function ProductPage({ product }) {
  // product is provided by getStaticProps
  if (!product) {
    return <div style={{ padding: 20 }}>Product not found</div>;
  }

  return (
    <div style={{ padding: 20 }}>
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: '80%',
          maxWidth: 280,
          borderRadius: 12,
          overflow: 'hidden',
          border: '1px solid #eee',
          boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
        }}
      />

      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>₹{product.price}</p>

      <AddToCart product={product} />
    </div>
  );
}
