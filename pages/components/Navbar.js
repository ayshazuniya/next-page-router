// components/Navbar.js
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const { state } = useCart();
  const items = state?.items ?? [];
  const count = items.reduce((s, i) => s + (Number(i.qty) || 0), 0);

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ marginLeft: '-140px', backgroundColor: '#8B0A1A' }}
    >
      <div className="container">
        <Link href="/" className="navbar-brand">
          <Image
            src="/logolar.png"
            height={100}
            width={100}
            alt="logo"
            className="rounded-4"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
          aria-controls="navmenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link" style={{ color: '#DFC08E' }}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/products"
                className="nav-link"
                style={{ color: '#DFC08E' }}
              >
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/about"
                className="nav-link"
                style={{ color: '#DFC08E' }}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/contact"
                className="nav-link"
                style={{ color: '#DFC08E' }}
              >
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/cart"
                className="nav-link position-relative"
                style={{ color: '#DFC08E' }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="currentColor"
                  className="bi bi-bag"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                </svg>

                <span
                  className="badge bg-success rounded-circle position-absolute"
                  style={{
                    top: '-4px',
                    right: '-10px',
                    fontSize: '10px',
                    padding: '4px 6px',
                  }}
                >
                  {count}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
