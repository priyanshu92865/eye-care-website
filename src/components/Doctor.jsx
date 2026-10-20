import "./Doctor.css";

function Doctor() {
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

        <a href="/contact" className="doctor-btn">
          Book an Appointment →
        </a>
      </div>

      {/* Right Div: Doctor Photo */}
      <div className="doctor-image-wrapper">
        <div className="doctor-image-card">
          <img
            src="/Images/doctor.jpg"
            alt="Doctor wearing a white medical coat"
            className="doctor-image"
          />

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
