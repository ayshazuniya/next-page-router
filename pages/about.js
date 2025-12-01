export default function About() {
  return (
    <div>
      <h1
        style={{
          fontSize: "40px",
          marginBottom: "4px",
          textAlign: "center",
        }}
      >
        About Us
      </h1>

      <div
        style={{
          padding: "50px 10px",
          maxWidth: "900px",
          margin: "0 auto",
          lineHeight: "1.6",
        }}
      >
        {/* Hero Image */}
        <img
          src="/aboutpage.png"
          alt="About Image"
          style={{
            width: "80%",
            height: "900px",
            objectFit: "cover",
            borderRadius: "10px",
            marginBottom: "30px",
          }}
        />

        {/* Content */}
        <p style={{ fontSize: "18px", marginBottom: "20px" }}>
          We are a passionate team dedicated to creating beautiful and
          functional digital experiences. Our goal is to build products that
          are simple, elegant, and meaningful for our users.
        </p>

        <p style={{ fontSize: "18px", marginBottom: "20px" }}>
          With a strong focus on design and performance, we aim to deliver
          high-quality services and ensure customer satisfaction in every
          project we work on. Your trust is what motivates us to do better
          every day.
        </p>

        {/* Grid Section */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "40px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: "1",
              minWidth: "250px",
              background: "#8B0A1A",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h3>Our Mission</h3>
            <p>
              To deliver modern, user-friendly digital solutions that help
              people and businesses grow.
            </p>
          </div>

          <div
            style={{
              flex: "1",
              minWidth: "250px",
              background: "#8B0A1A",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h3>Our Vision</h3>
            <p>
              To become a trusted global brand known for innovation, quality,
              and creativity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
