import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // EmailJS credentials
  const SERVICE_ID = 'service_u72gekl';
  const TEMPLATE_ID = 'template_zgx3itf';
  const PUBLIC_KEY = 'nAWh26Kn6JOzRug6s';

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setSubmitStatus('success');
        form.current.reset();
      })
      .catch((error) => {
        console.log('Email sending failed:', error.text);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  return (
    <section className="contact-section">
      <div className="container">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h1>
        
        <div className="contact-container">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Contact Information</h2>
            
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h3>Email</h3>
                <p>gazzinganjayr@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <h3>Phone</h3>
                <p>63 (995) 197-4630</p>
              </div>
            </div>
            
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h3>Location</h3>
                <p>Taguig City, Metro Manila</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <input 
                  type="text" 
                  name="user_name" 
                  placeholder="Your Name" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="email" 
                  name="user_email" 
                  placeholder="Your Email" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Name and Your Message" 
                  rows="5" 
                  required 
                />
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <motion.p 
                  className="success-message"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Message sent successfully!
                </motion.p>
              )}
              
              {submitStatus === 'error' && (
                <motion.p 
                  className="error-message"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Failed to send message. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;