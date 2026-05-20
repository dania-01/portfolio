'use client';
import { useState, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const INFO = [
  {
    icon: <FaEnvelope />, label: 'Email',
    value: 'daniakhan0412@gmail.com',
    href: 'mailto:daniakhan0412@gmail.com',
  },
  {
    icon: <FaLinkedin />, label: 'LinkedIn',
    value: '/in/dania-khan-438751223',
    href: 'https://www.linkedin.com/in/dania-khan-438751223',
  },
  {
    icon: <FaGithub />, label: 'GitHub',
    value: 'github.com/dania-01',
    href: 'https://github.com/dania-01',
  },
];

export default function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [status, setStatus]   = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSending(false);
          e.target.reset();
          setStatus({ success: true, message: '✅ Message sent successfully!' });
          setTimeout(() => setStatus({}), 4000);
        },
        () => {
          setSending(false);
          setStatus({ success: false, message: '❌ Something went wrong. Please try again.' });
          setTimeout(() => setStatus({}), 4000);
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <div className="text-center">
          <h2>Get In Touch</h2>
          <p className="contact-subtitle">
            Have a project in mind? Let&apos;s build something great together.
          </p>
        </div>

        <Row className="g-4 align-items-start">

          {/* ── Info cards + Map ── */}
          <Col xs={12} md={5} lg={4}>
            {INFO.map(({ icon, label, value, href }) => (
              <a
                key={label} href={href}
                target="_blank" rel="noopener noreferrer"
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div className="contact-info-card">
                  <div className="contact-info-icon">{icon}</div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {label}
                    </div>
                    <div style={{ color: '#e5e7eb', fontSize: '0.88rem', fontWeight: '500', marginTop: '3px' }}>
                      {value}
                    </div>
                  </div>
                </div>
              </a>
            ))}
            <div className="contact-map-wrap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231175.45913994!2d66.99006!3d24.9056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1716000000000"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '12px', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location"
              />
            </div>
          </Col>

          {/* ── Form ── */}
          <Col xs={12} md={7} lg={8}>
            <div className="glass" style={{ borderRadius: '20px', padding: '32px' }}>
              <form ref={form} onSubmit={handleSubmit} className="contact-form">
                <Row className="g-0">
                  <Col sm={6} className="pe-sm-2">
                    <input type="text" name="name" placeholder="First Name" required />
                  </Col>
                  <Col sm={6} className="ps-sm-2">
                    <input type="text" name="lastName" placeholder="Last Name" />
                  </Col>
                  <Col sm={6} className="pe-sm-2">
                    <input type="email" name="email" placeholder="Email Address" required />
                  </Col>
                  <Col sm={6} className="ps-sm-2">
                    <input type="tel" name="phone" placeholder="Phone (optional)" />
                  </Col>
                  <Col xs={12}>
                    <textarea rows="5" name="message" placeholder="Your message…" required style={{ resize: 'vertical' }} />
                  </Col>
                  <Col xs={12}>
                    <button type="submit" className="contact-btn" disabled={sending}>
                      {sending
                        ? 'Sending…'
                        : <><FaPaperPlane /> Send Message</>}
                    </button>
                  </Col>
                  {status.message && (
                    <Col xs={12}>
                      <p className={`status ${status.success ? 'success' : 'danger'}`}>
                        {status.message}
                      </p>
                    </Col>
                  )}
                </Row>
              </form>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}
