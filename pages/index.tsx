'use client';
// pages/index.js
import Link from "next/link";
import Carousel from "./components/Carousel"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="container-fluid">
      <Carousel />

      <div className="container py-5">
        {/* QUICK FEATURES */}
        <div className="row text-center mb-5 gx-4">
          <div className="col-md-4 mb-4">
            <div className="p-4 border rounded h-100">
              <h5 className="fw-semibold">Free Returns</h5>
              <p className="text-muted small mb-0">30-day easy returns.</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="p-4 border rounded h-100">
              <h5 className="fw-semibold">Secure Payments</h5>
              <p className="text-muted small mb-0">All major cards & wallets.</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="p-4 border rounded h-100">
              <h5 className="fw-semibold">Support</h5>
              <p className="text-muted small mb-0">Chat & email support.</p>
            </div>
          </div>
        </div>

        {/* VIDEO GRID */}
        <div className="row row-cols-2 row-cols-md-4 g-4">
          <div className="col">
            <div className="card">
              <video
                className="w-100"
                src="/video1.mp4"
                controls
                muted
                autoPlay
                loop
                playsInline
                style={{ objectFit: "cover", height: "350px" }}
              />
            </div>
          </div>

          <div className="col">
            <div className="card">
              <video
                className="w-100"
                src="/video2.mp4"
                controls
                muted
                autoPlay
                loop
                playsInline
                style={{ objectFit: "cover", height: "350px" }}
              />
            </div>
          </div>

          <div className="col">
            <div className="card">
              <video
                className="w-100"
                src="/video3.mp4"
                controls
                muted
                autoPlay
                loop
                playsInline
                style={{ objectFit: "cover", height: "350px" }}
              />
            </div>
          </div>

          <div className="col">
            <div className="card">
              <video
                className="w-100"
                src="/video4.mp4"
                controls
                muted
                autoPlay
                loop
                playsInline
                style={{ objectFit: "cover", height: "350px" }}
              />
            </div>
          </div>
        </div>

        {/* FEATURED PRODUCTS (static preview) */}
        <section className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="mb-0 mt-5">Featured Products</h3>
            <Link href="/products" className="small">View all</Link>
          </div>

          <div className="row gx-3">
            {[
              { id: "1", title: "Wireless Headphones", price: "₹2,299", img: "/HeadPHone1.png" },
              { id: "2", title: "Leather Bag", price: "₹3,499", img: "/leatherbag1.png" },
              { id: "3", title: "Smart Watch", price: "₹4,199", img: "/smartwatch1.png" },
              { id: "4", title: "Sunglasses", price: "₹1,999", img: "/sun glasses1.png" }, // rename recommended
            ].map((p) => (
              <div key={p.id} className="col-6 col-md-3 mb-4">
                <div className="card h-100">
                  <img
                    src={p.img}
                    alt={p.title}
                    style={{ height: 240, objectFit: "cover" }}
                    className="card-img-top"
                  />
                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title mb-1">{p.title}</h6>
                    <p className="text-muted small mb-3">{p.price}</p>
                    <div className="mt-auto d-flex gap-2">
                      <Link href={`/products/${p.id}`} className="btn btn-sm button w-100">View</Link>
                      <button className="btn btn-sm btn button w-100">Add</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SIMPLE TESTIMONIALS */}
        <section className="mb-5">
          <h4 className="mb-3">Customer Reviews</h4>
          <div className="row gx-3">
            <div className="col-md-4 mb-3">
              <div className="p-3 border rounded" style={{ color: "#8B0A1A" }}>
                <p className="mb-1 fst-italic">"Amazing quality and quick delivery."</p>
                <small className="text-muted">— Anu</small>
              </div>
            </div>

            <div className="col-md-4 mb-3" style={{ color: "#8B0A1A" }}>
              <div className="p-3 border rounded">
                <p className="mb-1 fst-italic">"Great customer service."</p>
                <small className="text-muted">— Ramesh</small>
              </div>
            </div>

            <div className="col-md-4 mb-3" style={{ color: "#8B0A1A" }}>
              <div className="p-3 border rounded">
                <p className="mb-1 fst-italic">"Exactly as shown — happy purchase."</p>
                <small className="text-muted">— Meera</small>
              </div>
            </div>
          </div>
        </section>
      </div>

     
    </main>
  );
}
