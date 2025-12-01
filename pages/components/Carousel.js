// components/Carousel.js
'use client';
import Image from 'next/image';

export default function Carousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">

      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
      </div>

      <div className="carousel-inner shadow-lg" style={{ borderRadius: "15px", }}>
        <div className="carousel-item active">
          <Image src="/slide1.png" width={1500} height={500} className="d-block w-100" alt="Slide 1" />
        </div>

        <div className="carousel-item">
          <Image src="/slide2.png" width={1500} height={500} className="d-block w-100" alt="Slide 2" />
        </div>

        <div className="carousel-item">
          <Image src="/slide3.png" width={1500} height={500} className="d-block w-100" alt="Slide 3" />
        </div>
      </div>

      {/* FIXED BUTTONS */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}
