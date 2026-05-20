'use client';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';

const CARDS = [
  {
    num: '01', title: 'UI Development',
    desc: 'Pixel-perfect, responsive interfaces using React.js, Next.js, and modern CSS.',
  },
  {
    num: '02', title: 'Workflow Automation',
    desc: 'Complex data-driven workflows — billing validation, AI anomaly detection, and CRM systems.',
  },
  {
    num: '03', title: 'API Integration',
    desc: 'Seamless REST API integration with TanStack Query, React Hook Form, and Zod.',
  },
  {
    num: '04', title: 'Component Architecture',
    desc: 'Reusable component systems and global theme patterns for scalable frontend products.',
  },
];

export default function About() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="about-section" id="about">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">A developer who cares about every pixel and every interaction</p>
        </div>

        <Row className="g-5 align-items-start">
          <Col xs={12} lg={6}>
            <p className="about-text">
              Frontend Developer with hands-on experience building scalable{' '}
              <strong>React.js</strong> and <strong>Next.js</strong> applications
              — from AI-powered validation systems and workflow automation tools
              to dashboards and customer-support platforms.
            </p>
            <p className="about-text">
              Skilled in responsive UI development, reusable component architectures,
              REST API integrations, <strong>TanStack Query</strong>,{' '}
              <strong>React Hook Form</strong>, and <strong>Zod</strong> validation.
              Contributed to enterprise-level billing anomaly detection at{' '}
              <strong>Jam Energy</strong>, reducing manual validation effort by{' '}
              <strong>70%</strong> through optimized frontend workflows.
            </p>
            <p className="about-text">
              I care deeply about building efficient, user-centric applications
              that support real business growth — clean code, clear purpose.
            </p>
            <div className="about-ctas">
              <button
                type="button"
                className="about-btn-primary"
                onClick={() => scrollTo('projects')}
              >
                View My Work <ArrowRightCircle size={16} />
              </button>
              <button
                type="button"
                className="about-btn-ghost"
                onClick={() => scrollTo('connect')}
              >
                Get In Touch
              </button>
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <Row className="g-3">
              {CARDS.map(({ num, title, desc }) => (
                <Col key={num} xs={12} sm={6}>
                  <div className="about-card">
                    <span className="about-card-num">{num}</span>
                    <h5 className="about-card-title">{title}</h5>
                    <p className="about-card-desc">{desc}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
