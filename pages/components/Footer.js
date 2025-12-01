
import React from 'react'

export default function Footer() {
  return (
   <footer
  style={{
    backgroundColor: "#8B0A1A",
    color: "#DFC08E",
    
  }}
>
  <div className="container-fluid">
    <div className="row">

      {/* Company section */}
      <div className="col-md-4 mb-3">
        <h4 className="mb-3">MyShop</h4>
        <p style={{ opacity: 0.8 }}>
          Quality products delivered to your doorstep.  
          Fast, secure and reliable shopping experience.
        </p>
      </div>

      {/* Links */}
      <div className="col-md-4 mb-3">
        <h5 className="mb-3">Quick Links</h5>
        <ul className="list-unstyled" style={{ opacity: 0.9}}>
          <li><a href="/" style={{ color: "#DFC08E",textDecoration:"none" }}>Home</a></li>
          <li><a href="/products" style={{ color: "#DFC08E",textDecoration:"none"  }}>Products</a></li>
          <li><a href="/contact" style={{ color: "#DFC08E",textDecoration:"none"  }}>Contact</a></li>
          <li><a href="/about" style={{ color: "#DFC08E",textDecoration:"none"  }}>About</a></li>
        </ul>
      </div>

      {/* Contact info */}
      <div className="col-md-4 mb-3">
        <h5 className="mb-3">Contact</h5>
        <p style={{ opacity: 0.9 }}> India</p>
        <p style={{ opacity: 0.9 }}> +91 98765 43210</p>
        <p style={{ opacity: 0.9 }}> support@myshop.com</p>
      </div>

    </div>

    <hr style={{ borderColor: "#DFC08E" }} />

    <p className="text-center mt-3" style={{ opacity: 0.7 }}>
      © {new Date().getFullYear()} MyShop — All Rights Reserved.
    </p>
  </div>
</footer>

  )
}
