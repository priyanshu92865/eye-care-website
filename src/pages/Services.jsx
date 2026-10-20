import "./Services.css";

const services = [
  {
    icon: "👁️",
    title: "Comprehensive Eye Checkup",
    description:
      "Complete eye examinations to assess vision, detect eye problems, and maintain healthy eyesight.",
  },
  {
    icon: "🔬",
    title: "Cataract Treatment",
    description:
      "Cataract evaluation and surgical treatment to help restore clear vision.",
  },
  {
    icon: "👓",
    title: "Vision Testing",
    description:
      "Professional vision testing to identify refractive errors and determine your eyeglass prescription.",
  },
  {
    icon: "🩺",
    title: "Glaucoma Care",
    description:
      "Eye pressure measurement and specialist evaluation to detect and manage glaucoma.",
  },
  {
    icon: "💧",
    title: "Retina Care",
    description:
      "Evaluation and treatment planning for retinal conditions, including diabetic eye disease.",
  },
  {
    icon: "✨",
    title: "LASIK Consultation",
    description:
      "Personalized assessment to determine whether laser vision correction may be suitable for you.",
  },
];

function Services() {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero text-center">
        <div className="container">
          <span className="badge rounded-pill bg-light text-primary mb-3">
            Expert Eye Care
          </span>

          <h1>Our Eye Care Services</h1>

          <p>
            Protect your vision with compassionate care, modern technology, and
            personalized treatment at Kanpur Eye Center.
          </p>

          <a href="#services" className="btn btn-primary btn-lg mt-3">
            Explore Services
          </a>
        </div>
      </section>

      {/* Services Cards */}
      <section id="services" className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Complete Eye Care Under One Roof</h2>

          <p className="text-muted">
            Eye care solutions designed around your vision and comfort.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="service-card h-100">
                <div className="service-icon">{service.icon}</div>

                <h4>{service.title}</h4>

                <p>{service.description}</p>

                <a href="/contact" className="service-link">
                  Book a Consultation →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Appointment Section */}
      <section className="appointment-section text-center">
        <div className="container py-5">
          <h2>Give Your Eyes the Care They Deserve</h2>

          <p>
            Schedule an appointment with our eye care team for personalized
            guidance.
          </p>

          <a href="/contact" className="btn btn-light btn-lg">
            Book an Appointment
          </a>
        </div>
      </section>
    </div>
  );
}

export default Services;
