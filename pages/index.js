export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        margin: 0,
        backgroundColor: "#f4f4f4",
        color: "#222",
      }}
    >
<header
  style={{
    position: "sticky",
    top: 0,
    zIndex: 999,
    backgroundColor: "#1f1f1f",
    borderBottom: "1px solid #333",
    padding: "14px 22px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }}
>
  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
    <img
      src="/everhaul-logo.png"
      alt="Everhaul Logo"
      style={{ width: "70px", height: "auto" }}
    />
    <strong style={{ color: "white", fontSize: "20px" }}>
      Everhaul
    </strong>
  </div>

  <a
    href="tel:8185381072"
    style={{
      backgroundColor: "#7CFC00",
      color: "#111",
      padding: "12px 18px",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: "bold",
      fontSize: "16px",
    }}
  >
    Call Now
  </a>
</header>      
{/* HERO */}
      <section
        style={{
          background: "linear-gradient(to bottom, #1f1f1f, #2d2d2d)",
          color: "white",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <img
          src="/everhaul-logo.png"
          alt="Everhaul Logo"
          style={{
            width: "220px",
            marginBottom: "30px",
          }}
        />

        <h1
          style={{
            fontSize: "54px",
            marginBottom: "20px",
            lineHeight: "1.1",
          }}
        >
          Los Angeles Junk Removal
          <br />
          & Hauling Services
        </h1>

        <p
          style={{
            fontSize: "22px",
            maxWidth: "850px",
            margin: "0 auto",
            color: "#d1d1d1",
            lineHeight: "1.6",
          }}
        >
          Fast, reliable junk removal, construction debris hauling,
          dirt hauling, concrete disposal, and dump truck services
          throughout Los Angeles and the San Fernando Valley.
        </p>

        <div style={{ marginTop: "40px" }}>
          <a
            href="tel:8185381072"
            style={{
              backgroundColor: "#7CFC00",
              color: "#111",
              padding: "18px 34px",
              borderRadius: "10px",
              textDecoration: "none",
              fontSize: "22px",
              fontWeight: "bold",
              boxShadow: "0 4px 15px rgba(124,252,0,0.35)",
            }}
          >
            Call Now: (818) 538-1072
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section
        style={{
          padding: "70px 25px",
          backgroundColor: "#f4f4f4",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "50px",
            color: "#222",
          }}
        >
          Our Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {[
            "Construction Debris Removal",
            "Dirt & Concrete Hauling",
            "Junk Removal",
            "Garage Cleanouts",
            "Yard Waste Removal",
            "Dump Truck Services",
          ].map((service) => (
            <div
              key={service}
              style={{
                backgroundColor: "white",
                padding: "35px 25px",
                borderRadius: "14px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                borderTop: "5px solid #7CFC00",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        style={{
          backgroundColor: "#2b2b2b",
          color: "white",
          padding: "80px 25px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "30px",
          }}
        >
          Why Choose Everhaul?
        </h2>

        <p
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            fontSize: "21px",
            lineHeight: "1.8",
            color: "#d1d1d1",
          }}
        >
          Everhaul Solutions LLC provides professional junk removal
          and hauling services for homeowners, contractors, businesses,
          and property managers across Los Angeles.
          We focus on fast response times, reliable service,
          clean job sites, and affordable pricing.
        </p>

        <div
          style={{
            marginTop: "40px",
            fontSize: "28px",
            color: "#7CFC00",
            fontWeight: "bold",
          }}
        >
          ⭐ 5-Star Customer Service
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section
        style={{
          padding: "70px 25px",
          textAlign: "center",
          backgroundColor: "white",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            marginBottom: "25px",
          }}
        >
          Service Areas
        </h2>

        <p
          style={{
            fontSize: "21px",
            color: "#555",
            maxWidth: "850px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          Proudly serving Los Angeles, San Fernando Valley,
          North Hollywood, Van Nuys, Burbank, Arleta,
          Glendale, Pasadena, and surrounding areas.
        </p>

        <div style={{ marginTop: "45px" }}>
          <a
            href="tel:8185381072"
            style={{
              backgroundColor: "#222",
              color: "white",
              padding: "18px 34px",
              borderRadius: "10px",
              textDecoration: "none",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            Get a Free Quote
          </a>
        </div>
      </section>
<section
  style={{
    padding: "90px 25px",
    backgroundColor: "#f4f4f4",
    textAlign: "center",
  }}
>
  <p
    style={{
      color: "#7CFC00",
      letterSpacing: "3px",
      fontWeight: "bold",
      marginBottom: "15px",
    }}
  >
    WHAT WE DO
  </p>

  <h2
    style={{
      fontSize: "48px",
      marginBottom: "20px",
      color: "#111",
    }}
  >
    Complete Junk Removal Solutions
  </h2>

  <p
    style={{
      color: "#666",
      fontSize: "20px",
      maxWidth: "800px",
      margin: "0 auto 60px",
      lineHeight: "1.6",
    }}
  >
    Serving contractors, property managers, and homeowners across Los Angeles and the San Fernando Valley.
  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "30px",
      maxWidth: "1200px",
      margin: "0 auto",
    }}
  >

    <div style={{
      background: "#fff",
      padding: "35px",
      borderRadius: "18px",
      textAlign: "left",
      boxShadow: "0 8px 25px rgba(0,0,0,0.06)"
    }}>
      <div style={{ fontSize: "42px", marginBottom: "20px" }}>🏗️</div>
      <h3 style={{ fontSize: "28px", marginBottom: "15px", color: "#111" }}>
        Construction Debris
      </h3>
      <p style={{ color: "#666", lineHeight: "1.7" }}>
        Concrete, drywall, wood, tile, roofing, and demolition debris hauled away quickly and professionally.
      </p>
    </div>

    <div style={{
      background: "#fff",
      padding: "35px",
      borderRadius: "18px",
      textAlign: "left",
      boxShadow: "0 8px 25px rgba(0,0,0,0.06)"
    }}>
      <div style={{ fontSize: "42px", marginBottom: "20px" }}>🚛</div>
      <h3 style={{ fontSize: "28px", marginBottom: "15px", color: "#111" }}>
        Dump Truck Services
      </h3>
      <p style={{ color: "#666", lineHeight: "1.7" }}>
        Heavy-duty hauling and dump truck solutions for contractors, builders, and large cleanup projects.
      </p>
    </div>

    <div style={{
      background: "#fff",
      padding: "35px",
      borderRadius: "18px",
      textAlign: "left",
      boxShadow: "0 8px 25px rgba(0,0,0,0.06)"
    }}>
      <div style={{ fontSize: "42px", marginBottom: "20px" }}>🏠</div>
      <h3 style={{ fontSize: "28px", marginBottom: "15px", color: "#111" }}>
        Residential Junk
      </h3>
      <p style={{ color: "#666", lineHeight: "1.7" }}>
        Furniture, appliances, garage cleanouts, household junk, and same-day residential removal services.
      </p>
    </div>

  </div>
</section>
      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "#111",
          color: "#bbb",
          textAlign: "center",
          padding: "30px 20px",
          fontSize: "16px",
        }}
      >
        <p>© 2026 Everhaul Solutions LLC</p>
        <p>
          Junk Removal • Construction Debris • Dirt Hauling • Los Angeles
        </p>
      </footer>
    </main>
  );
}
