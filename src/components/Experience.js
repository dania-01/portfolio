'use client';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import FadeInSection from './FadeInSection';
import { FaBriefcase, FaChevronDown, FaChevronUp, FaExternalLinkAlt } from 'react-icons/fa';

const PROJECTS = [
  {
    name: 'Jam Energy',
    desc: 'AI-Powered Energy Bill Validation Platform',
    website: 'https://jamenergy.uk',
    app: 'https://app.jamenergy.uk',
    points: [
      'Built scalable frontend modules in React.js and Next.js for validating enterprise energy invoices, supplier bills, and billing datasets',
      'Implemented AI-assisted anomaly detection flows identifying rate mismatches, duplicate charges, and billing inconsistencies',
      'Reduced manual validation and escalation effort by ~70% for enterprise clients tracking supplier overcharges',
    ],
    tags: ['React.js', 'Next.js', 'TanStack Query', 'React Hook Form', 'Zod', 'REST APIs'],
  },
  {
    name: 'Pulse',
    desc: 'Customer Support and Calling Application',
    website: 'https://talkwisely.io',
    app: 'https://phone.talkwisely.io',
    points: [
      'Revamped dashboard screens, layouts, and customer-support workflows for the Pulse calling platform',
      'Implemented reusable UI patterns and a global theme system improving responsiveness and maintainability',
      'Enhanced frontend modules using React.js, Next.js, Redux, and REST APIs across agile sprints',
    ],
    tags: ['React.js', 'Next.js', 'Redux', 'REST APIs', 'Tailwind CSS', 'Git'],
  },
];

export default function Experience() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="experience-section" id="experience">
      <Container>
        <FadeInSection>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">Where I&apos;ve shipped real products</p>
        </FadeInSection>

        <FadeInSection delay={0.15}>
        <div className="exp-timeline">
          <div className="exp-item">
            <div className="exp-dot"><FaBriefcase size={13} /></div>

            {/* Company card */}
            <div className="exp-company-card glass">
              <div className="exp-company-header">
                <div>
                  <h4 className="exp-title">Frontend Developer</h4>
                  <span className="exp-company-name">TalkWisely Platforms Pvt. Ltd.</span>
                </div>
                <span className="exp-period">2025 — Present</span>
              </div>

              {/* Projects */}
              <div className="exp-projects">
                {PROJECTS.map((proj, i) => (
                  <div key={i} className={`exp-project${openIdx === i ? ' open' : ''}`}>
                    <div
                      className="exp-project-header"
                      onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && setOpenIdx(openIdx === i ? -1 : i)}
                    >
                      <div>
                        <span className="exp-project-name">{proj.name}</span>
                        <span className="exp-desc-tag"> — {proj.desc}</span>
                      </div>
                      {openIdx === i
                        ? <FaChevronUp size={11} color="#6b7280" />
                        : <FaChevronDown size={11} color="#6b7280" />}
                    </div>

                    {openIdx === i && (
                      <div className="exp-body">
                        <div className="exp-links">
                          <a href={proj.website} target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt size={10} /> Website
                          </a>
                          <a href={proj.app} target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt size={10} /> App
                          </a>
                        </div>
                        <ul className="exp-points">
                          {proj.points.map((p, j) => <li key={j}>{p}</li>)}
                        </ul>
                        <div className="exp-tags">
                          {proj.tags.map(tag => (
                            <span key={tag} className="exp-tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </FadeInSection>
      </Container>
    </section>
  );
}
