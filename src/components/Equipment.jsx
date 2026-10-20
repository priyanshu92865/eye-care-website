import "./Equipment.css";

const equipmentList = [
  {
    id: 1,
    name: "Slit Lamp",
    description: "Detailed examination of the front parts of the eye.",
    image: "/Images/slit-lam.jpg",
    alt: "Medical examination equipment",
  },
  {
    id: 2,
    name: "Auto Refractometer",
    description: "Helps measure refractive error and estimate your eye power.",
    image: "/Images/autorefaractor.jpg",
    alt: "Eye examination and diagnostic equipment",
  },
  {
    id: 3,
    name: "OCT Machine",
    description: "Provides detailed images of the retina for eye assessment.",
    image: "/Images/octamachine.jpg",
    alt: "Medical diagnostic equipment",
  },
  {
    id: 4,
    name: "Phoropter",
    description:
      "Used during refraction testing to help determine the right lens prescription.",
    image: "/Images/phoropter.jpg",
    alt: "Clinical diagnostic equipment",
  },
];

function Equipment() {
  return (
    <section className="equipment-section">
      <div className="equipment-heading">
        <span className="equipment-tag">ADVANCED EYE CARE</span>

        <h2>
          Our Advanced <span>Equipment</span>
        </h2>

        <p>
          Modern technology for better eye examinations, accurate diagnosis, and
          quality eye care.
        </p>

        <div className="equipment-divider"></div>
      </div>

      <div className="equipment-grid">
        {equipmentList.map((item) => (
          <article className="equipment-card" key={item.id}>
            <div className="equipment-image-wrapper">
              <img
                src={item.image}
                alt={item.alt}
                className="equipment-image"
                loading="lazy"
              />
            </div>

            <div className="equipment-content">
              <h3>{item.name}</h3>

              <p>{item.description}</p>

              <span className="equipment-number">0{item.id}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Equipment;
