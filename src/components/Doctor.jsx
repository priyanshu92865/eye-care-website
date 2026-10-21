import "./Doctor.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Doctor() {
  const doctors = [
    "/Images/doctor.jpg",
    "/Images/Examine.png",
    "/Images/Fullhouse.jpg",
  ];

  const [slider, setSlider] = useState({
    current: 0,
    previous: 0,
    transitioning: false,
  });

  useEffect(() => {
    let timeoutId;

    const intervalId = setInterval(() => {
      setSlider((prev) => ({
        previous: prev.current,
        current: (prev.current + 1) % doctors.length,
        transitioning: true,
      }));

      timeoutId = setTimeout(() => {
        setSlider((prev) => ({
          ...prev,
          transitioning: false,
        }));
      }, 700);
    }, 3000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <section className="doctor-section">
      {/* Left Div: Doctor Qualifications */}
      <div className="doctor-info">
        <span className="doctor-tag">MEET OUR SPECIALIST</span>

        <h2>
          Expert Care for <span>Your Eyes</span>
        </h2>

        <h3>Dr. Atul Kumar</h3>

        <p className="doctor-speciality">Senior Ophthalmologist</p>

        <p className="doctor-description">
          Dedicated to providing advanced eye care with a patient-first
          approach. Our goal is to help you maintain healthy vision and enjoy a
          better quality of life.
        </p>

        <div className="doctor-qualifications">
          <div className="qualification-item">
            <span className="qualification-icon">✓</span>
            <div>
              <h4>MBBS</h4>
              <p>Medical Degree</p>
            </div>
          </div>

          <div className="qualification-item">
            <span className="qualification-icon">✓</span>
            <div>
              <h4>MS Ophthalmology</h4>
              <p>Specialist in Eye Care</p>
            </div>
          </div>

          <div className="qualification-item">
            <span className="qualification-icon">✓</span>
            <div>
              <h4>Patient-Focused Care</h4>
              <p>Personalized Treatment</p>
            </div>
          </div>
        </div>

        <Link to="/contact" className="doctor-btn">
          Book an Appointment →
        </Link>
      </div>

      {/* Right Div: Doctor Photo */}
      <div className="doctor-image-wrapper">
        <div className="doctor-image-card">
          <div className="doctor-image-stage">
            <img
              src={doctors[slider.previous]}
              alt="Previous doctor"
              className={`doctor-image ${
                slider.transitioning
                  ? "doctor-image-exit"
                  : "doctor-image-hidden"
              }`}
            />

            <img
              src={doctors[slider.current]}
              alt="Doctor"
              className={`doctor-image ${
                slider.transitioning
                  ? "doctor-image-enter"
                  : "doctor-image-active"
              }`}
            />
          </div>

          <div className="doctor-image-caption">
            <span className="doctor-status"></span>
            <div>
              <h4>Trusted Eye Care</h4>
              <p>Your vision matters to us</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Doctor;
