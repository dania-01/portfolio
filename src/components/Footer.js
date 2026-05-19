'use client';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-between g-3">

          {/* Brand */}
          <Col xs={12} md={4} className="text-center text-md-start">
            <div style={{ fontWeight: '700', fontSize: '1rem', color: '#f9fafb' }}>
              DK <span style={{ color: '#03DAC6' }}>|</span> Dania Khan
            </div>
            <div style={{ color: '#6b7280', fontSize: '0.78rem', marginTop: '3px' }}>
              Frontend Developer
            </div>
          </Col>

          {/* Social links */}
          <Col xs={12} md={4} className="text-center">
            <div className="footer-social justify-content-center">
              <a href="https://www.linkedin.com/in/dania-khan-438751223" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/dania-01" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="mailto:daniakhan0412@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </Col>

          {/* Copyright + back to top */}
          <Col xs={12} md={4} className="text-center text-md-end">
            <div className="d-flex align-items-center justify-content-center justify-content-md-end gap-3">
              <p className="copyright mb-0">
                © {new Date().getFullYear()} Dania Khan
              </p>
              <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
                <FaArrowUp size={13} />
              </button>
            </div>
          </Col>

        </Row>
      </Container>
    </footer>
  );
}
