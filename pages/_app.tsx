// pages/_app.tsx
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';




import type { AppProps } from 'next/app';
import Script from 'next/script';
import CartProvider from '../context/CartContext';     // <-- default provider
import { useCart } from '../context/CartContext'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Navbar />

      <div className="container my-4 page-container">
        <Component {...pageProps} />
      </div>

      <Footer />

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
    </CartProvider>
  );
}
