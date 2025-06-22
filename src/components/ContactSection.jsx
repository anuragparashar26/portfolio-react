import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="pg5" id="pg5">
      <div className="contact-form-container">
        <div className="section-header-contact">
          <h2>Contact Me</h2>
          <div className="dash"></div>
          <p className="section-description">
            Feel free to reach out with any questions or opportunities. Always open to connecting and collaborating.
          </p>
        </div>

        <form action="https://formspree.io/f/xjkvkdgq" method="POST" id="contactForm" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            minLength="3"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            maxLength="50"
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            minLength="10"
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
        
        <div className="powered-by">
          <span>Powered by Formspree</span>
          <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="formspree-logo">
            <div className="line long"></div>
            <div className="line long"></div>
            <div className="line short"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;