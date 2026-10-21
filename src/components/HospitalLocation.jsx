import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaDirections,
} from "react-icons/fa";

import "./HospitalLocation.css";

function HospitalLocation() {
  // Replace this with your actual clinic address.
  const hospitalAddress = "MIG-12,NEW BARRA-2,Near Shastri chowk,Kanpur-Nagar";

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    hospitalAddress,
  )}&output=embed`;

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    hospitalAddress,
  )}`;

  return (
    <section className="hospital-section">
      {/* Section Heading */}
      <div className="hospital-heading">
        <span className="hospital-tag">VISIT OUR CLINIC</span>

        <h2>
          Find <span>Our Hospital</span>
        </h2>

        <p>
          We are here to take care of your vision. Visit our eye care center for
          professional eye care.
        </p>

        <div className="hospital-divider"></div>
      </div>

      {/* Main Content */}
      <div className="hospital-container">
        {/* Hospital Image */}
        <div className="hospital-image-card">
          <img
            src="/Images/hospital.jpg"
            alt="Hospital building and medical facility"
            className="hospital-image"
            loading="lazy"
          />

          <div className="hospital-image-label">
            <FaMapMarkerAlt />
            <span>Visit Our Eye Care Center</span>
          </div>
        </div>

        {/* Hospital Details */}
        <div className="hospital-details">
          <h3>We Are Here For You</h3>

          <p className="hospital-description">
            Your eye health matters to us. Visit our clinic for eye
            examinations, vision testing, and personalized eye care.
          </p>

          {/* Address */}
          <div className="hospital-info-item">
            <div className="hospital-icon">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h4>Our Location</h4>
              <p>{hospitalAddress}</p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="hospital-info-item">
            <div className="hospital-icon">
              <FaClock />
            </div>

            <div>
              <h4>Opening Hours</h4>
              <p>Monday - Saturday</p>
              <p>9:00 AM - 6:00 PM</p>
            </div>
          </div>

          {/* Contact */}
          <div className="hospital-info-item">
            <div className="hospital-icon">
              <FaPhoneAlt />
            </div>

            <div>
              <h4>Contact Us</h4>
              <a href="tel:+918299172910">+91 82991 72910</a>
            </div>
          </div>

          {/* Directions Button */}
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=KANPUR+EYE+CENTRE%2C+M.I.G%2C+NEW%2C+Barra+2%2C+Kanpur%2C+Uttar+Pradesh"
            target="_blank"
            rel="noopener noreferrer"
            className="hospital-directions-btn"
          >
            <FaDirections />
            Get Directions
          </a>
        </div>
      </div>

      {/* Google Map */}
      <div className="hospital-map-section">
        <h3>Find Us on the Map</h3>

        <p>Use the map below to explore our location.</p>

        <div className="hospital-map">
          <iframe
            src={mapUrl}
            title="Hospital location on Google Maps"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>

        <a
          href="https://www.google.com/maps/dir/?api=1&destination=KANPUR+EYE+CENTRE%2C+M.I.G%2C+NEW%2C+Barra+2%2C+Kanpur%2C+Uttar+Pradesh"
          target="_blank"
          rel="noopener noreferrer"
          className="hospital-map-link"
        >
          Open Google Maps →
        </a>
      </div>
    </section>
  );
}

export default HospitalLocation;
