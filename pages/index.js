export default function Home() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#111315] text-white">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/everhaul-hero.jpg"
          alt="Everhaul construction debris hauling"
          className="h-full w-full object-cover scale-105"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Hero Content */}
<section class="everhaul-services">

  <!-- Background Glow -->
  <div class="eh-glow eh-glow-1"></div>
  <div class="eh-glow eh-glow-2"></div>

  <div class="eh-container">

    <!-- Header -->
    <div class="eh-section-header">
      <span class="eh-badge">Everhaul Solutions LLC</span>

      <h2>
        Professional Removal Services
      </h2>

      <p>
        Reliable junk and debris removal solutions for homeowners,
        contractors, and commercial properties across Los Angeles.
      </p>
    </div>

    <!-- Services Grid -->
    <div class="eh-services-grid">

      <!-- Card -->
      <div class="eh-service-card">
        <div class="eh-icon">🏗️</div>
        <h3>Construction Debris Removal</h3>
        <p>
          Reliable removal of construction debris, wood, drywall,
          and jobsite waste.
        </p>
        <a href="#" class="eh-btn">
          Learn More
        </a>
      </div>

      <!-- Card -->
      <div class="eh-service-card">
        <div class="eh-icon">🧱</div>
        <h3>Concrete Removal</h3>
        <p>
          Heavy material hauling for broken concrete, brick,
          asphalt, and demolition debris.
        </p>
        <a href="#" class="eh-btn">
          Learn More
        </a>
      </div>

      <!-- Card -->
      <div class="eh-service-card">
        <div class="eh-icon">🏠</div>
        <h3>Property Cleanouts</h3>
        <p>
          Complete interior and exterior property cleanout services
          for homes and rental properties.
        </p>
        <a href="#" class="eh-btn">
          Learn More
        </a>
      </div>

      <!-- Card -->
      <div class="eh-service-card">
        <div class="eh-icon">🚪</div>
        <h3>Garage Cleanouts</h3>
        <p>
          Fast and professional garage junk removal with efficient
          sorting and cleanup.
        </p>
        <a href="#" class="eh-btn">
          Learn More
        </a>
      </div>

      <!-- Card -->
      <div class="eh-service-card">
        <div class="eh-icon">🧺</div>
        <h3>Appliance Removal</h3>
        <p>
          Safe pickup and disposal of refrigerators, washers,
          dryers, stoves, and large appliances.
        </p>
        <a href="#" class="eh-btn">
          Learn More
        </a>
      </div>

      <!-- Card -->
      <div class="eh-service-card">
        <div class="eh-icon">🌿</div>
        <h3>Yard Debris Removal</h3>
        <p>
          Removal of branches, green waste, dirt, fencing,
          and outdoor debris materials.
        </p>
        <a href="#" class="eh-btn">
          Learn More
        </a>
      </div>

      <!-- Card -->
      <div class="eh-service-card">
        <div class="eh-icon">🏢</div>
        <h3>Commercial Cleanouts</h3>
        <p>
          Professional cleanup solutions for offices, warehouses,
          retail spaces, and commercial properties.
        </p>
        <a href="#" class="eh-btn">
          Learn More
        </a>
      </div>

      <!-- Card -->
      <div class="eh-service-card">
        <div class="eh-icon">⚒️</div>
        <h3>Demolition Cleanup</h3>
        <p>
          Efficient post-demolition debris hauling and detailed
          cleanup for active jobsites.
        </p>
        <a href="#" class="eh-btn">
          Learn More
        </a>
      </div>

    </div>
  </div>
</section>

<style>

/* =========================
GLOBAL SECTION
========================= */

.everhaul-services{
  position: relative;
  background:
    linear-gradient(
      180deg,
      #111315 0%,
      #16191d 100%
    );

  padding: 120px 24px;
  overflow: hidden;
  font-family:
    Inter,
    system-ui,
    sans-serif;
}

/* =========================
BACKGROUND GLOW
========================= */

.eh-glow{
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: .12;
  pointer-events: none;
}

.eh-glow-1{
  width: 400px;
  height: 400px;
  background: #2bb673;
  top: -120px;
  left: -120px;
}

.eh-glow-2{
  width: 350px;
  height: 350px;
  background: #2bb673;
  bottom: -150px;
  right: -100px;
}

/* =========================
CONTAINER
========================= */

.eh-container{
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

/* =========================
HEADER
========================= */

.eh-section-header{
  text-align: center;
  margin-bottom: 70px;
}

.eh-badge{
  display: inline-block;
  background: rgba(43,182,115,.12);
  border: 1px solid rgba(43,182,115,.25);
  color: #2bb673;
  padding: 10px 18px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: .8px;
  margin-bottom: 24px;
  text-transform: uppercase;
}

.eh-section-header h2{
  color: white;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1.05;
  margin-bottom: 24px;
  font-weight: 800;
  letter-spacing: -2px;
}

.eh-section-header p{
  max-width: 760px;
  margin: 0 auto;
  color: #a8afb7;
  font-size: 1.15rem;
  line-height: 1.7;
}

/* =========================
GRID
========================= */

.eh-services-grid{
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(280px,1fr)
  );

  gap: 28px;
}

/* =========================
CARDS
========================= */

.eh-service-card{
  position: relative;

  background:
    linear-gradient(
      180deg,
      rgba(255,255,255,.04),
      rgba(255,255,255,.02)
    );

  border: 1px solid rgba(255,255,255,.08);

  border-radius: 28px;

  padding: 38px;

  transition:
    transform .45s ease,
    border-color .45s ease,
    box-shadow .45s ease,
    background .45s ease;

  backdrop-filter: blur(10px);

  overflow: hidden;

  opacity: 0;
  transform: translateY(50px);
}

/* Hover Glow */
.eh-service-card::before{
  content: "";

  position: absolute;
  inset: 0;

  background:
    radial-gradient(
      circle at top left,
      rgba(43,182,115,.18),
      transparent 60%
    );

  opacity: 0;
  transition: opacity .45s ease;
}

.eh-service-card:hover{
  transform: translateY(-10px);

  border-color:
    rgba(43,182,115,.35);

  box-shadow:
    0 25px 50px rgba(0,0,0,.45),
    0 0 40px rgba(43,182,115,.08);
}

.eh-service-card:hover::before{
  opacity: 1;
}

/* =========================
ICON
========================= */

.eh-icon{
  width: 74px;
  height: 74px;

  display: flex;
  align-items: center;
  justify-content: center;

  background:
    rgba(43,182,115,.12);

  border:
    1px solid rgba(43,182,115,.22);

  border-radius: 20px;

  font-size: 2rem;

  margin-bottom: 28px;

  color: #2bb673;
}

/* =========================
TEXT
========================= */

.eh-service-card h3{
  color: white;
  font-size: 1.45rem;
  margin-bottom: 18px;
  font-weight: 700;
  line-height: 1.3;
}

.eh-service-card p{
  color: #adb5bd;
  line-height: 1.7;
  margin-bottom: 30px;
  font-size: 1rem;
}

/* =========================
BUTTON
========================= */

.eh-btn{
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 14px 22px;

  background: #2bb673;
  color: #0f1113;

  border-radius: 14px;

  text-decoration: none;
  font-weight: 700;

  transition:
    transform .3s ease,
    box-shadow .3s ease,
    background .3s ease;
}

.eh-btn:hover{
  transform: translateY(-2px);

  box-shadow:
    0 0 24px rgba(43,182,115,.35);

  background: #36c67d;
}

/* =========================
ANIMATION
========================= */

.eh-service-card.show{
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity .8s ease,
    transform .8s ease;
}

/* =========================
MOBILE
========================= */

@media (max-width: 768px){

  .everhaul-services{
    padding: 90px 20px;
  }

  .eh-service-card{
    padding: 30px;
    border-radius: 24px;
  }

  .eh-section-header{
    margin-bottom: 50px;
  }

  .eh-section-header p{
    font-size: 1rem;
  }

}

</style>

<script>

/* =========================
ENTRANCE ANIMATION
========================= */

const cards = document.querySelectorAll(".eh-service-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if(entry.isIntersecting){

        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 120);

      }
    });
  },
  {
    threshold: 0.15
  }
);

cards.forEach(card => {
  observer.observe(card);
});

</script>
            {/* Small Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2bb673]/30 bg-[#2bb673]/10 px-4 py-2 backdrop-blur-sm">
              <div className="h-2 w-2 rounded-full bg-[#2bb673] animate-pulse"></div>

              <span className="text-sm font-medium tracking-wide text-gray-200">
                Serving Los Angeles & The San Fernando Valley
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Professional{" "}
              <span className="text-[#2bb673]">
                Junk & Debris
              </span>{" "}
              Removal
            </h1>

            {/* Subheadline */}
            <h2 className="mt-6 text-xl font-semibold tracking-wide text-gray-200 sm:text-2xl">
              Family-Owned & Contractor-Trusted Across Los Angeles
            </h2>

            {/* Supporting Text */}
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
              Fast response times, dependable crews, and professional cleanup
              services for homeowners, contractors, and property managers.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              {/* Primary Button */}
              <a
                href="#quote"
                className="group inline-flex items-center justify-center rounded-xl bg-[#2bb673] px-8 py-4 text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(43,182,115,0.35)]"
              >
                Get a Free Quote

                <svg
                  className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>

              {/* Secondary Button */}
              <a
                href="tel:+18185551234"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#2bb673]/40 hover:bg-white/10"
              >
                Call Now
              </a>

            </div>

            {/* Trust Indicators */}
            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <div className="mb-2 text-[#2bb673]">✓</div>

                <p className="text-sm font-medium text-gray-200">
                  Family-Owned
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <div className="mb-2 text-[#2bb673]">✓</div>

                <p className="text-sm font-medium text-gray-200">
                  Licensed & Insured
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <div className="mb-2 text-[#2bb673]">✓</div>

                <p className="text-sm font-medium text-gray-200">
                  Same-Day Service
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <div className="mb-2 text-[#2bb673]">✓</div>

                <p className="text-sm font-medium text-gray-200">
                  Contractor Trusted
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#111315] to-transparent"></div>

    </section>
  );
}
