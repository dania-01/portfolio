'use client';
import { Col } from 'react-bootstrap';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function ProjectCard({ title, description, liveLink, githubLink, techStack, image }) {
  return (
    <Col xs={12} md={6}>
      <div
        className="project-card glow-card"
        style={{
          height: '100%', borderRadius: '16px', overflow: 'hidden',
          background: '#161b22',
          border: '1px solid rgba(255,255,255,0.1)',
          display: 'flex', flexDirection: 'column',
        }}
      >
        {/* ── Screenshot (true 16:9 ratio, never squished) ── */}
        {image && (
          <div style={{ position: 'relative', paddingTop: '56.25%', background: '#0d1117', overflow: 'hidden', flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={title}
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'top center',
                transition: 'transform 0.55s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            />
            {/* Bottom gradient so card body blends in */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '45%',
              background: 'linear-gradient(to bottom, transparent, #161b22)',
              pointerEvents: 'none',
            }} />
          </div>
        )}

        {/* ── Body ── */}
        <div style={{ padding: '20px 22px 22px', display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '14px' }}>

          {/* Title */}
          <h5 style={{ color: '#f0f6fc', fontWeight: '700', fontSize: '1.05rem', margin: 0, lineHeight: 1.3 }}>
            {title}
          </h5>

          {/* Description */}
          <div style={{ flexGrow: 1 }}>
            {Array.isArray(description) ? (
              <ul style={{ paddingLeft: '0', margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {description.map((line, i) => (
                  <li key={i} style={{ color: '#8b949e', fontSize: '0.85rem', lineHeight: '1.55', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#03DAC6', marginTop: '4px', flexShrink: 0, fontSize: '0.55rem' }}>◆</span>
                    {line}
                  </li>
                ))}
              </ul>
            ) : (
              <p style={{ color: '#8b949e', fontSize: '0.85rem', lineHeight: '1.55', margin: 0 }}>{description}</p>
            )}
          </div>

          {/* Tech icons */}
          {techStack?.length > 0 && (
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {techStack.map((tech, idx) => (
                <span
                  key={idx}
                  title={tech.name}
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: '34px', height: '34px', borderRadius: '8px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    transition: 'border-color 0.2s, background 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(3,218,198,0.5)';
                    e.currentTarget.style.background = 'rgba(3,218,198,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  }}
                >
                  {tech.logo}
                </span>
              ))}
            </div>
          )}

          {/* Divider */}
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)', margin: '0 -22px' }} />

          {/* Action buttons */}
          <div style={{ display: 'flex', gap: '10px' }}>
            {liveLink && (
              <a
                href={liveLink} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '8px 20px', borderRadius: '8px',
                  background: '#03DAC6', color: '#0a0f14',
                  fontWeight: '700', fontSize: '0.82rem',
                  transition: 'opacity 0.2s, transform 0.2s, box-shadow 0.2s',
                  textDecoration: 'none', letterSpacing: '0.3px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.88';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 0 18px rgba(3,218,198,0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Live <FaExternalLinkAlt size={10} />
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '8px 20px', borderRadius: '8px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#c9d1d9', fontWeight: '600', fontSize: '0.82rem',
                  transition: 'all 0.2s', textDecoration: 'none', letterSpacing: '0.3px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(3,218,198,0.45)';
                  e.currentTarget.style.color = '#03DAC6';
                  e.currentTarget.style.background = 'rgba(3,218,198,0.07)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                  e.currentTarget.style.color = '#c9d1d9';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                }}
              >
                Code <FaGithub size={12} />
              </a>
            )}
          </div>

        </div>
      </div>
    </Col>
  );
}
