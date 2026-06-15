'use client';
import { Col, Container, Row, Nav, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import FadeInSection from './FadeInSection';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiCloudinary, SiBootstrap, SiNextdotjs, SiShadcnui, SiFramer, SiTypescript, SiReactquery } from 'react-icons/si';

const frontendProjects = [
  {
    title: 'AI Prompt Studio',
    description: [
      'Multi-model AI playground powered by Groq — test 7 LLMs with real-time streaming.',
      'Side-by-side model comparison with split-view interface for evaluating output quality.',
      'Auto-saves conversations in browser; export history as Text, Markdown, or PDF.',
    ],
    image: '/assets/img/ai-prompt-studio.png',
    liveLink: 'https://ai-prompt-studio-ai.netlify.app/',
    githubLink: 'https://github.com/dania-01/AI-Prompt-Studio',
    techStack: [
      { logo: <SiNextdotjs size={28} color="#FFFFFF" /> },
      { logo: <SiTypescript size={28} color="#3178C6" /> },
      { logo: <SiTailwindcss size={28} color="#38BDF8" /> },
      { logo: <SiFramer size={28} color="#BB4B96" /> },
      { logo: <SiReactquery size={28} color="#FF4154" /> },
    ],
  },
  {
    title: 'Swiggy Clone',
    description: [
      'Pixel-perfect Swiggy UI clone with restaurant listings and menu browsing.',
      'Built with Next.js 16 and shadcn/ui components for a polished, accessible UI.',
      'Responsive design styled with Tailwind CSS v4 and Lucide React icons.',
    ],
    image: '/assets/img/swiggy.png',
    liveLink: 'https://swiiggyyy.netlify.app/',
    githubLink: 'https://github.com/dania-01/swiggy',
    techStack: [
      { logo: <SiNextdotjs size={28} color="#FFFFFF" /> },
      { logo: <FaReact size={28} color="#61DAFB" /> },
      { logo: <SiTailwindcss size={28} color="#38BDF8" /> },
      { logo: <SiShadcnui size={28} color="#FFFFFF" /> },
    ],
  },
  {
    title: 'Loanify – Loan Application',
    description: [
      'Responsive loan platform with calculation & eligibility checks.',
      'Firebase for secure authentication and real-time data handling.',
      'Enhanced UX with SweetAlert notifications and Bootstrap components.',
    ],
    image: '/assets/img/loanify.png',
    liveLink: 'https://loan-application-sys0101.netlify.app',
    githubLink: 'https://github.com/dania-01/Loan-IFY---The-loan-app',
    techStack: [
      { logo: <FaHtml5 size={28} color="#E34F26" /> },
      { logo: <FaCss3Alt size={28} color="#1572B6" /> },
      { logo: <FaJsSquare size={28} color="#F7DF1E" /> },
      { logo: <SiBootstrap size={28} color="#7952B3" /> },
      { logo: <SiFirebase size={28} color="#FFCA28" /> },
    ],
  },
  {
    title: 'Sociomom – Social Media Scheduler',
    description: [
      'Post schedule management, previews, and collaboration features.',
      'Firebase for auth & Cloudinary for fast image uploads.',
      'Tailwind UI with animations and an animated starry background.',
    ],
    image: '/assets/img/sociomom.png',
    liveLink: 'https://social-manager-01.netlify.app',
    githubLink: 'https://github.com/dania-01/SocioMom---Social-Media-Scheduler',
    techStack: [
      { logo: <FaReact size={28} color="#61DAFB" /> },
      { logo: <SiRedux size={28} color="#764ABC" /> },
      { logo: <SiFirebase size={28} color="#FFCA28" /> },
      { logo: <SiCloudinary size={28} color="#29A3EF" /> },
      { logo: <SiTailwindcss size={28} color="#38BDF8" /> },
    ],
  },
];

const fullstackProjects = [
  {
    title: 'Bookworm – Library Management System',
    description: [
      'Full-stack platform with separate admin and member roles.',
      'Book borrowing, returning, fine calculation, and analytics.',
      'Cloudinary for cover hosting + NodeMailer for email notifications.',
    ],
    image: '/assets/img/bookworm.png',
    liveLink: 'https://bookworm-lib-app.netlify.app',
    githubLink: 'https://github.com/dania-01/Fullstack-Lib-management-sys',
    techStack: [
      { logo: <FaReact size={28} color="#61DAFB" /> },
      { logo: <SiExpress size={28} color="#FFFFFF" /> },
      { logo: <SiMongodb size={28} color="#47A248" /> },
      { logo: <SiTailwindcss size={28} color="#38BDF8" /> },
      { logo: <SiCloudinary size={28} color="#29A3EF" /> },
    ],
  },
];

const allProjects = [...frontendProjects, ...fullstackProjects];

export default function Projects() {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <FadeInSection>
              <div className="text-center">
                <h2 className="projects-heading">My Projects</h2>
                <p className="projects-subtext">
                  A showcase of my journey — building <span>intuitive</span>, <span>scalable</span>,
                  and <span>visually engaging</span> applications from <b style={{ color: '#f9fafb' }}>Frontend</b> to <b style={{ color: '#f9fafb' }}>Fullstack</b>.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.15}>
            <Tab.Container id="projects-tabs" defaultActiveKey="all">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                <Nav.Item><Nav.Link eventKey="all">All</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="frontend">Frontend</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="fullstack">Fullstack</Nav.Link></Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="all"><Row className="g-4 justify-content-center">{allProjects.map((p, i) => <ProjectCard key={i} {...p} />)}</Row></Tab.Pane>
                <Tab.Pane eventKey="frontend"><Row className="g-4 justify-content-center">{frontendProjects.map((p, i) => <ProjectCard key={i} {...p} />)}</Row></Tab.Pane>
                <Tab.Pane eventKey="fullstack"><Row className="g-4 justify-content-center">{fullstackProjects.map((p, i) => <ProjectCard key={i} {...p} />)}</Row></Tab.Pane>
              </Tab.Content>
            </Tab.Container>
            </FadeInSection>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
