'use client';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { FaBriefcase, FaChevronDown, FaChevronUp, FaExternalLinkAlt } from 'react-icons/fa';

const EXPERIENCES = [
  {
    title: 'Frontend Developer',
    company: 'Jam Energy',
    period: 'Present',
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
    title: 'Frontend Developer',
    company: 'Pulse — TalkWisely',
    period: '2024',
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
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">Where I&apos;ve shipped real products</p>

        <div className="exp-timeline">
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="exp-item">
              <div className="exp-dot">
                <FaBriefcase size={13} />
              </div>
              <div className={`exp-card glass${openIdx === i ? ' open' : ''}`}>
                <div
                  className="exp-header"
                  onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setOpenIdx(openIdx === i ? -1 : i)}
                >
                  <div className="exp-header-left">
                    <h4 className="exp-title">{exp.title}</h4>
                    <div className="exp-meta-row">
                      <span className="exp-company">{exp.company}</span>
                      <span className="exp-desc-tag">{exp.desc}</span>
                    </div>
                  </div>
                  <div className="exp-header-right">
                    <span className="exp-period">{exp.period}</span>
                    {openIdx === i
                      ? <FaChevronUp size={12} color="#6b7280" />
                      : <FaChevronDown size={12} color="#6b7280" />}
                  </div>
                </div>

                {openIdx === i && (
                  <div className="exp-body">
                    <div className="exp-links">
                      <a href={exp.website} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt size={10} /> Website
                      </a>
                      <a href={exp.app} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt size={10} /> App
                      </a>
                    </div>
                    <ul className="exp-points">
                      {exp.points.map((p, j) => <li key={j}>{p}</li>)}
                    </ul>
                    <div className="exp-tags">
                      {exp.tags.map(tag => (
                        <span key={tag} className="exp-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
