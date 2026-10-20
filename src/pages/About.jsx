import React from "react";
import "./About.css";
import { FaEye, FaUserMd, FaHeart, FaCheckCircle } from "react-icons/fa";

function About() {
  const features = [
    {
      icon: <FaEye />,
      title: "Complete Eye Care",
      description:
        "Comprehensive eye examinations and care to help maintain healthy vision.",
    },
    {
      icon: <FaUserMd />,
      title: "Experienced Eye Specialists",
      description:
        "Professional eye-care services focused on individual patient needs.",
    },
    {
      icon: <FaHeart />,
      title: "Patient-Centered Care",
      description:
        "We believe every patient deserves respectful attention and clear guidance.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Modern Eye Care",
      description:
        "A focus on modern diagnostic methods and appropriate treatment options.",
    },
  ];

  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-label">ABOUT OUR EYE CARE CENTER</span>

          <h1>
            Caring for Your Eyes,
            <span> Protecting Your Vision</span>
          </h1>

          <p>
            Your vision matters. We are committed to providing attentive,
            patient-focused eye care to support healthier eyes and better
            vision.
          </p>

          <a href="/contact" className="about-button">
            Contact Us
          </a>
        </div>

        <div className="about-hero-image">
          <img src="/Images/Examine.png" alt="Eye doctor examining a patient" />
        </div>
      </section>

      {/* About Hospital Section */}
      <section className="about-intro">
        <div className="about-intro-image">
          <img src="/Images/Fullhouse.jpg" alt="Eye clinic and patient care" />
        </div>

        <div className="about-intro-content">
          <span className="about-label">WHO WE ARE</span>

          <h2>Your Vision Is Our Priority</h2>

          <p>
            At our eye care center, we understand how important healthy vision
            is to everyday life. Our goal is to make eye care comfortable,
            accessible, and easy to understand for every patient.
          </p>

          <p>
            From routine eye check-ups to specialist consultations, we aim to
            help patients understand their eye health and explore suitable
            treatment options.
          </p>

          <ul className="about-check-list">
            <li>
              <FaCheckCircle /> Comprehensive eye examinations
            </li>
            <li>
              <FaCheckCircle /> Personalized patient guidance
            </li>
            <li>
              <FaCheckCircle /> Focus on eye health and vision care
            </li>
            <li>
              <FaCheckCircle /> Friendly and supportive environment
            </li>
          </ul>
        </div>
      </section>

      {/* Features Section */}
      <section className="about-features">
        <div className="about-section-heading">
          <span className="about-label">WHY CHOOSE US</span>
          <h2>Eye Care With a Personal Touch</h2>
          <p>
            We focus on patient comfort, clear communication, and responsible
            eye-care guidance.
          </p>
        </div>

        <div className="about-feature-grid">
          {features.map((feature, index) => (
            <article className="about-feature-card" key={index}>
              <div className="about-feature-icon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </article>
          ))};
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div>
          <span className="about-label">OUR MISSION</span>

          <h2>Helping You See a Healthier Tomorrow</h2>

          <p>
            Our mission is to encourage regular eye examinations, provide clear
            information about eye health, and help patients make informed
            decisions about their vision care.
          </p>
        </div>

        <div className="about-mission-icon">
          <FaEye />
        </div>
      </section>
    </main>
  );
}

export default About;
