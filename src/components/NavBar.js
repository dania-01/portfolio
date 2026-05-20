'use client';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import ResumeLink from './ResumeLink';

const NAV_SECTIONS = [
  { id: 'home',       key: 'home',       label: 'Home',       href: '#home' },
  { id: 'about',      key: 'about',      label: 'About',      href: '#about' },
  { id: 'experience', key: 'experience', label: 'Experience', href: '#experience' },
  { id: 'skills',     key: 'skills',     label: 'Skills',     href: '#skills' },
  { id: 'projects',   key: 'projects',   label: 'Projects',   href: '#projects' },
  { id: 'connect',    key: 'contact',    label: 'Contact',    href: '#connect' },
];

export default function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled,   setScrolled]   = useState(false);
  const [expanded,   setExpanded]   = useState(false);

  /* ── Navbar blur / bg on scroll ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Lock body when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = expanded ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [expanded]);

  /* ── Scroll-spy: highlight the section currently in view ── */
  useEffect(() => {
    const spy = () => {
      // Use 35% down from the top of the viewport as the "active" trigger line
      const trigger = window.scrollY + window.innerHeight * 0.35;
      let current = 'home';
      for (const { id, key } of NAV_SECTIONS) {
        const el = document.getElementById(id);
        if (el && trigger >= el.offsetTop) current = key;
      }
      setActiveLink(current);
    };
    window.addEventListener('scroll', spy, { passive: true });
    spy(); // run once on mount
    return () => window.removeEventListener('scroll', spy);
  }, []);

  const handleNavClick = (key) => {
    setActiveLink(key);
    setExpanded(false);
  };

  return (
    <>
      {/* Mobile overlay */}
      {expanded && (
        <div
          onClick={() => setExpanded(false)}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            zIndex: 998,
          }}
        />
      )}

      <Navbar
        expand="md"
        expanded={expanded}
        className={scrolled ? 'scrolled' : ''}
        style={{ zIndex: 999 }}
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center" style={{ textDecoration: 'none' }}>
            <span style={{
              fontWeight: '800', fontSize: '1.25rem', letterSpacing: '-0.5px',
              color: '#f0f6fc', fontFamily: "'Centra', system-ui, sans-serif",
            }}>
              D<span style={{ color: '#03DAC6' }}>K</span>
            </span>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(v => !v)}
            style={{ border: 'none', padding: '4px 8px', boxShadow: 'none' }}
          >
            {expanded
              ? <FaTimes  style={{ color: '#03DAC6', fontSize: '1.35rem' }} />
              : <FaBars   style={{ color: '#03DAC6', fontSize: '1.35rem' }} />
            }
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-md-center gap-md-1">
              {NAV_SECTIONS.map(({ key, label, href }) => (
                <Nav.Link
                  key={key}
                  href={href}
                  className={`navbar-link${activeLink === key ? ' active' : ''}`}
                  onClick={() => handleNavClick(key)}
                >
                  {label}
                </Nav.Link>
              ))}
            </Nav>
            <span className="navbar-text ms-md-3">
              <ResumeLink variant="navbar" />
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
