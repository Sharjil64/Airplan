// Component/Contact.js
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Simple validation
    if (!name || !email || !message) {
      setError('Please fill out all fields.');
      return;
    }

    setError('');
    setSubmitted(true);

    // Normally, yahan backend pe send karte hain
    console.log('Form submitted:', formData);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Contact Us</h1>

      <p>Feel free to contact us using the form or information below:</p>

      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        {/* Contact Form */}
        <form onSubmit={handleSubmit} style={{ flex: '1', minWidth: '300px' }}>
          <div style={{ marginBottom: '10px' }}>
            <label>Name:</label><br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label>Email:</label><br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label>Message:</label><br />
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px' }}
            ></textarea>
          </div>

          {error && <p style={{ color: 'red' }}>{error}</p>}
          {submitted && <p style={{ color: 'green' }}>Thank you! Your message has been submitted.</p>}

          <button type="submit" style={{ padding: '10px 20px' }}>Send Message</button>
        </form>

        {/* Contact Details & Map */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h3>Contact Information</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><strong>Email:</strong> info@example.com</li>
            <li><strong>Phone:</strong> +92 300 1234567</li>
            <li><strong>Address:</strong> Skardu, Gilgit Baltistan, Pakistan</li>
          </ul>

          <h3>Our Location</h3>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26022.288826636275!2d75.520195!3d35.321333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38f4e2b20ed95aaf%3A0xd3d85c5c7a4db76e!2sSkardu!5e0!3m2!1sen!2s!4v1715080253951!5m2!1sen!2s"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
