import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello Kanpur Eye Center,
Name: ${form.name}
Phone: ${form.phone}
Message: ${form.message}`;

    window.open(
      `https://wa.me/91YOURPHONENUMBER?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <main className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-container">
          <span className="contact-label">WE ARE HERE FOR YOU</span>
          <h1>Contact Our Hospital</h1>
          <p>
            Your vision matters to us. Get in touch with our team for
            appointments, enquiries and eye care information.
          </p>
        </div>
      </section>

      {/* Hospital Image */}
      <section className="hospital-image-section">
        <div className="contact-container">
          <img
            src="/Images/hospital.jpg"
            alt="Kanpur Eye Center hospital building"
            className="hospital-main-image"
          />
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-details-section">
        <div className="contact-container">
          <div className="contact-heading">
            <h2>Get in Touch</h2>
            <p>We are happy to help you with your eye care needs.</p>
          </div>

          <div className="contact-grid">
            <div className="contact-info-card">
              <div className="contact-icon">📍</div>
              <h3>Our Address</h3>
              <p>MIG-12,New Barra-2, Near Shastri Chowk,Kanpur Nagar</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noreferrer"
              >
                Find Us on Maps →
              </a>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">📞</div>
              <h3>Phone Number</h3>
              <p>Call us for appointments and enquiries.</p>
              <a href="tel:+919044503193">+91-9044503193</a>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">✉️</div>
              <h3>Email Address</h3>
              <p>Send us your questions and enquiries.</p>
              <a href="mailto:info@example.com">info@example.com</a>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">🕒</div>
              <h3>Hospital Hours</h3>
              <p>Monday – Saturday</p>
              <p>9:00 AM to 6:00 pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="contact-container contact-form-layout">
          <div className="contact-form-text">
            <span className="contact-label">HAVE A QUESTION?</span>
            <h2>Send Us a Message</h2>
            <p>
              Fill in your details and our team can follow up regarding your
              enquiry or appointment.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="contact-name">Full Name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="contact-phone">Phone Number</label>
            <input
              id="contact-phone"
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <label htmlFor="contact-message">Your Message</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="How can we help you?"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Send Enquiry on WhatsApp →</button>

            <p className="contact-form-note">
              Your WhatsApp app or WhatsApp Web will open with your message
              ready to send.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
