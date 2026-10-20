import "./Doctorp.css";

function Doctorp() {
  return (
    <section className="doctor-page">
      <div className="doctor-container">

        {/* Doctor Image */}
        <div className="doctor-image">
          <img
            src="/Images/doctor.jpg"
            alt="Eye Specialist Doctor"
          />

          <div className="doctor-award">
            🏆 Uttar Pradesh Dwara Sammanit
          </div>
        </div>

        {/* Doctor Information */}
        <div className="doctor-info">
          <span className="doctor-tag">
            EYE CARE SPECIALIST
          </span>

          <h1>Dr. ATUL KUMAR</h1>

          <h3>Senior Consultant Ophthalmologist</h3>

          <p className="doctor-description">
            Dedicated to providing quality eye care with
            modern technology, accurate diagnosis and
            compassionate treatment for every patient.
          </p>

          {/* Qualification */}
          <div className="doctor-detail">
            <span className="doctor-icon">🎓</span>
            <div>
              <h4>Qualification</h4>
              <p>MBBS, MS  (Ophthalmology)</p>
            </div>
          </div>

          {/* Expertise */}
          <div className="doctor-detail">
            <span className="doctor-icon">👁️</span>
            <div>
              <h4>Areas of Expertise</h4>
              <p>
                Cataract Care, Glaucoma, Retina Evaluation,
                Comprehensive Eye Checkups and Vision Care.
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="doctor-detail">
            <span className="doctor-icon">🩺</span>
            <div>
              <h4>Professional Experience</h4>
              <p>20 years of experience </p>
            </div>
          </div>

          {/* Award */}
          <div className="doctor-detail">
            <span className="doctor-icon">🏆</span>
            <div>
              <h4>State-Level Recognition</h4>
              <p>
                Honoured by the Government of Uttar Pradesh.
                
              </p>
            </div>
          </div>

          <a href="/contact" className="doctor-btn">
            Book an Appointment →
          </a>

        </div>
      </div>
    </section>
  );
}

export default Doctorp;