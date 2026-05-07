export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", margin: 0 }}>
      <section style={{
        background: "#111",
        color: "white",
        padding: "70px 25px",
        textAlign: "center"
      }}>
        <img
          src="/everhaul-logo.png"
          alt="Everhaul Logo"
          style={{ maxWidth: "260px", marginBottom: "25px" }}
        />

        <h1 style={{ fontSize: "48px", marginBottom: "15px" }}>
          Everhaul Junk Removal
        </h1>

        <p style={{ fontSize: "22px", maxWidth: "750px", margin: "0 auto 30px" }}>
          Professional junk removal, construction debris hauling, dirt hauling,
          and dump truck services in Los Angeles.
        </p>

        <a
          href="tel:8185381072"
          style={{
            background: "#5bbd22",
            color: "white",
            padding: "16px 28px",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: "bold"
          }}
        >
          Call Now: (818) 538-1072
        </a>
      </section>

      <section style={{ padding: "50px 25px", textAlign: "center" }}>
        <h2>Our Services</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "30px auto"
        }}>
          {[
            "Construction Debris Removal",
            "Dirt & Concrete Hauling",
            "Junk Removal",
            "Garage Cleanouts",
            "Yard Waste Removal",
            "Dump Truck Services"
          ].map((service) => (
            <div key={service} style={{
              border: "1px solid #ddd",
              padding: "25px",
              borderRadius: "10px",
              fontWeight: "bold"
            }}>
              {service}
            </div>
          ))}
        </div>
      </section>

      <section style={{
        background: "#f5f5f5",
        padding: "50px 25px",
        textAlign: "center"
      }}>
        <h2>Why Choose Everhaul?</h2>
        <p style={{ maxWidth: "800px", margin: "20px auto", fontSize: "18px" }}>
          Everhaul Solutions LLC is a professional junk removal and hauling company
          serving Los Angeles and surrounding areas. We are fast, reliable,
          affordable, licensed, insured, and focused on customer satisfaction.
        </p>

        <p style={{ fontSize: "22px", fontWeight: "bold" }}>
          ⭐ 5.0 Google Reviews
        </p>
      </section>

      <section style={{ padding: "50px 25px", textAlign: "center" }}>
        <h2>Serving Los Angeles & Surrounding Areas</h2>
        <p>Los Angeles • San Fernando Valley • Arleta • North Hollywood • Van Nuys • Burbank</p>

        <a
          href="tel:8185381072"
          style={{
            display: "inline-block",
            marginTop: "25px",
            background: "#111",
            color: "white",
            padding: "16px 28px",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: "bold"
          }}
        >
          Get a Free Quote
        </a>
      </section>

      <footer style={{
        background: "#111",
        color: "white",
        padding: "25px",
        textAlign: "center"
      }}>
        <p>© 2026 Everhaul Solutions LLC</p>
        <p>Junk Removal • Construction Debris • Dirt Hauling • Los Angeles</p>
      </footer>
    </main>
  )
}
