import Button from "../components/ui/Button";

function Contact() {
  return (
    <section className="section bg-section">
      <div className="container contact-wrapper">

        {/* LEFT SIDE - INFO */}
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>
            We are here to make your celebrations grand and memorable.
            Reach out to us anytime.
          </p>

          <div className="contact-details">
            <p><strong>📍 Location:</strong> Gajendragada, Gadag, Karnataka</p>

            <p>
              <strong>📞 Phone:</strong>{" "}
              <a href="tel:+919986690087">+91 99866 90087</a>
            </p>

            <p>
              <strong>💬 WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/917483761587"
                target="_blank"
                rel="noopener noreferrer"
              >
                7483761587 
              </a>
            </p>

            <p>
              <strong>📧 Email:</strong>{" "}
              <a href="mailto:kkss@email.com">
                kirantalikoti08@email.com
              </a>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="contact-form card">
          <h2>Send a Message</h2>

          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="tel" placeholder="Your Phone Number" required />
            <textarea rows="4" placeholder="Your Message" required></textarea>

            <Button type="submit" variant="primary">
              Send Message
            </Button>
          </form>
        </div>

      </div>

      {/* MAP SECTION */}
      <div className="container map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.3101067622633!2d75.9650704264641!3d15.734725949708611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8694e290b3f53%3A0xfcb9c7ebb00bc9ad!2sKalakaleshwar%20Shamiyan%20Suppliers!5e0!3m2!1sen!2sin!4v1771700945084!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "12px" }}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;