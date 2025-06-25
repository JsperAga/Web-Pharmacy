export default function ContactUs() {
  return (
    
    <div className="contact-container">
      <div className="contact-box">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Feel free to reach out or visit us.</p>

        <div className="contact-details">
          <div>
            <h3>📍 Address</h3>
            <p>123 Birchmount Rd, Toronto, ON</p>
          </div>
          <div>
            <h3>📞 Phone</h3>
            <p>(416) 123-1234</p>
          </div>
          <div>
            <h3>📧 Email</h3>
            <p>contact@jzpharma.ca</p>
          </div>
        </div>
        <div className="map-container">
          <iframe
            title="Jz Pharmacy Location"
            src="https://www.google.com/maps?q=123+Birchmount+Rd,+Toronto,+ON&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
        {/* ✅ Contact Form */}
        <form className="contact-form" >
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" name="fullname" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input type="tel" id="mobile" name="mobile" required />
          </div>

          <div className="form-group">
            <label htmlFor="inquiry">Your Inquiry</label>
            <textarea id="inquiry" name="inquiry" rows={4} required></textarea>
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>

        
      </div>
    </div>
  );
}
