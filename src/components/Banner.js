'use client';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import ResumeLink from './ResumeLink';

export default function Banner() {
  const [loopNum, setLoopNum]     = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText]           = useState('');
  const [delta, setDelta]         = useState(150);
  const period = 2000;

  const toRotate = useMemo(
    () => ['Frontend Developer', 'React Specialist', 'UI/UX Enthusiast'],
    []
  );

  const tick = useCallback(() => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) setDelta(80);
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150);
    }
  }, [text, isDeleting, loopNum, toRotate]);

  useEffect(() => {
    const ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [tick, delta]);

  const scrollToContact = () =>
    document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' });

  const btnStyle = {
    padding: '12px 28px', borderRadius: '8px',
    border: '2px solid #03DAC6', background: 'transparent',
    cursor: 'pointer', fontWeight: '600', fontSize: '15px',
    color: '#03DAC6', display: 'inline-flex', alignItems: 'center',
    gap: '8px', transition: 'all 0.3s ease', marginTop: '0',
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center gy-5">

          {/* ── Text column ── */}
          <Col xs={12} md={6} xl={7}>
            <div className="banner-text">

              <div className="available-badge">
                <span className="pulse-dot" />
                Open to new opportunities
              </div>

              <h1>
                Hi, I&apos;m{' '}
                <span className="gradient-text">Dania Khan</span>
              </h1>

              <div className="role-line">
                <span style={{ color: '#03DAC6' }}>{text}</span>
                <span style={{
                  display: 'inline-block', width: '2px', height: '1em',
                  background: '#03DAC6', marginLeft: '3px', verticalAlign: 'middle',
                  animation: 'blink 0.8s step-end infinite',
                }} />
              </div>

              <p>
                Frontend Developer building scalable React.js &amp; Next.js
                applications — from AI-powered dashboards to workflow automation
                tools. Clean code, real impact.
              </p>

              {/* CTA buttons */}
              <div className="button-group">
                <button
                  type="button"
                  onClick={scrollToContact}
                  style={btnStyle}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#03DAC6';
                    e.currentTarget.style.color = '#0d1117';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#03DAC6';
                  }}
                >
                  Let&apos;s connect <ArrowRightCircle size={18} />
                </button>
                <ResumeLink />
              </div>

            </div>
          </Col>

          {/* ── Avatar column ── */}
          <Col xs={12} md={6} xl={5} className="text-center">
            <div className="avatar-ring-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/img/profile-picture.png"
                alt="Dania Khan"
                className="profile-img"
              />
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}
