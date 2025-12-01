// pages/contact.js
export default function ContactPage() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        padding: "40px",
        background: "#DFC08E",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* LEFT IMAGE */}
      <div style={{ flex: 1, paddingRight: "40px" }}>
        <img
          src="/contact.jpg"
          alt="Contact"
          style={{
            width: "100%",
            height: "500px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </div>

      {/* RIGHT SECTION */}
      <div
        style={{
          flex: 1,
          background: "#DFC08E",
          padding: "40px",
          borderRadius: "8px",
          border: "1px solid #ddd",
        }}
      >
        <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
          Contact Us
        </h1>

        {/* Form */}
        <div style={{ marginBottom: "30px" }}>
          <label style={{ color: "#8B0A1A" }}>Full Name</label>
          <input
            type="text"
            style={{
              width: "100%",
              padding: "10px",
              border: "none",
              borderBottom: "1px solid #000",
              marginBottom: "20px",
              background: "transparent",
            }}
          />

          <label style={{ color: "#8B0A1A" }}>E-mail</label>
          <input
            type="email"
            style={{
              width: "100%",
              padding: "10px",
              border: "none",
              borderBottom: "1px solid #000",
              marginBottom: "20px",
              background: "transparent",
            }}
          />

          <label style={{ color: "#8B0A1A" }}>Message</label>
          <textarea
            rows="3"
            style={{
              width: "100%",
              padding: "10px",
              border: "none",
              borderBottom: "1px solid #000",
              background: "transparent",
            }}
          ></textarea>
        </div>

        <button
          style={{
            background: "#8B0A1A",
            padding: "12px 25px",
            borderRadius: "30px",
            border: "none",
            cursor: "pointer",
            marginBottom: "30px",
            color: "#fff",
          }}
        >
          Contact Us
        </button>

        {/* Contact Details */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#8B0A1A",
          }}
        >
          <div>
            <h4>Contact</h4>
            <p>hi@fashion.com</p>
          </div>

          <div>
            <h4>Based in</h4>
            <p>
              San Francisco,
              <br />
              California
            </p>
          </div>
        </div>

        {/* Social Icons (placeholders) */}
        <div style={{ marginTop: "20px", display: "flex", gap: "20px" }}>
          <a href="#" style={{ fontSize: "20px" }}></a>
          <a href="#" style={{ fontSize: "20px" }}></a>
          <a href="#" style={{ fontSize: "20px" }}></a>
        </div>
      </div>
    </div>
  );
}
