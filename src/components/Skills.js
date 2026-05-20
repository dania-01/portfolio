'use client';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub,
} from 'react-icons/fa';
import {
  SiRedux, SiTailwindcss, SiFirebase,
  SiNextdotjs, SiPostman, SiBootstrap,
  SiMui, SiVite,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

/* ── Marquee items (frontend-focused) ── */
const MARQUEE_TECH = [
  { name: 'HTML5',        icon: <FaHtml5       size={15} color="#E34F26" /> },
  { name: 'CSS3',         icon: <FaCss3Alt     size={15} color="#1572B6" /> },
  { name: 'JavaScript',   icon: <FaJsSquare    size={15} color="#F7DF1E" /> },
  { name: 'React',        icon: <FaReact       size={15} color="#61DAFB" /> },
  { name: 'Next.js',      icon: <SiNextdotjs   size={15} color="#fff"    /> },
  { name: 'Redux',        icon: <SiRedux       size={15} color="#764ABC" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={15} color="#38BDF8" /> },
  { name: 'Material UI',  icon: <SiMui         size={15} color="#007FFF" /> },
  { name: 'Bootstrap',    icon: <SiBootstrap   size={15} color="#7952B3" /> },
  { name: 'Shadcn/UI',    icon: null },
  { name: 'React Query',  icon: <FaReact       size={15} color="#FF4154" /> },
  { name: 'React Hook Form', icon: null },
  { name: 'Zod',          icon: null },
  { name: 'Firebase',     icon: <SiFirebase    size={15} color="#FFCA28" /> },
  { name: 'GitHub',       icon: <FaGithub      size={15} color="#e6edf3" /> },
  { name: 'VS Code',      icon: <VscCode       size={15} color="#007ACC" /> },
  { name: 'Postman',      icon: <SiPostman     size={15} color="#FF6C37" /> },
  { name: 'Vite',         icon: <SiVite        size={15} color="#646CFF" /> },
];

/* ── Skill categories (no backend) ── */
const CATEGORIES = [
  {
    num: '01', title: 'Frontend Frameworks & Libraries', color: '#61DAFB',
    gradient: 'rgba(97,218,251,0.06)',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'Redux', 'React Query', 'React Hook Form', 'Zod'],
  },
  {
    num: '02', title: 'UI & Styling', color: '#a78bfa',
    gradient: 'rgba(167,139,250,0.06)',
    tags: ['Tailwind CSS', 'Material UI', 'Shadcn/UI', 'Bootstrap', 'CSS Modules'],
  },
  {
    num: '03', title: 'Tools & Workflow', color: '#f472b6',
    gradient: 'rgba(244,114,182,0.06)',
    tags: ['Git', 'GitHub', 'VS Code', 'Postman', 'Netlify', 'Vite', 'npm', 'Firebase'],
  },
  {
    num: '04', title: 'Soft Skills', color: '#03DAC6',
    gradient: 'rgba(3,218,198,0.06)',
    tags: ['Problem-solving', 'Cross-functional Collaboration', 'Time Management', 'Communication'],
  },
];

/* duplicate for seamless infinite marquee */
const marqueeItems = [...MARQUEE_TECH, ...MARQUEE_TECH];

export default function Skills() {
  return (
    <section className="skill-section" id="skills">

      {/* ── Section header ── */}
      <Container>
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-subtitle">Technologies I work with every day</p>
      </Container>

      {/* ── Scrolling marquee ── */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {marqueeItems.map((tech, i) => (
            <div key={i} className="marquee-tag">
              {tech.icon && (
                <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                  {tech.icon}
                </span>
              )}
              {tech.name}
            </div>
          ))}
        </div>
      </div>

      {/* ── Category cards ── */}
      <Container>
        <Row className="g-4">
          {CATEGORIES.map(({ num, title, color, gradient, tags }) => (
            <Col key={num} xs={6} lg={3}>
              <div
                className="skill-cat-card"
                style={{ background: `linear-gradient(135deg, #161b22 0%, ${gradient} 100%)` }}
              >
                {/* Card header */}
                <div className="skill-cat-header">
                  <span className="skill-cat-num" style={{ color }}>{num}</span>
                  <div className="skill-cat-divider" style={{ background: color }} />
                  <span className="skill-cat-title-text">{title}</span>
                </div>

                {/* Tag cloud */}
                <div className="skill-tags-wrap">
                  {tags.map(tag => (
                    <span key={tag} className="skill-tag" data-color={color}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
