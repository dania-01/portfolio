'use client';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBook, FaStar, FaUsers, FaUserFriends, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const LANG_COLORS = {
  JavaScript: '#F7DF1E', TypeScript: '#3178C6', Python: '#3572A5',
  HTML: '#E34F26', CSS: '#1572B6', Java: '#B07219', 'C++': '#F34B7D',
  Go: '#00ADD8', Rust: '#DEA584', PHP: '#4F5D95', Ruby: '#CC342D',
  Swift: '#F05138', Kotlin: '#7F52FF', Shell: '#89E051', Vue: '#41B883',
  SCSS: '#C6538C', Dart: '#00B4AB', 'Jupyter Notebook': '#DA5B0B',
};

function StatCard({ icon, label, value, color }) {
  return (
    <div
      className="gh-stat-card"
      style={{ borderColor: `${color}55`, boxShadow: `0 0 15px ${color}22` }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = `0 0 28px ${color}66`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = `0 0 15px ${color}22`;
      }}
    >
      <div style={{ fontSize: '1.8rem', color, marginBottom: '10px' }}>{icon}</div>
      <div style={{ fontSize: '2rem', fontWeight: '700', color: '#fff', lineHeight: 1 }}>{value ?? '—'}</div>
      <div style={{ fontSize: '0.8rem', color: '#9ca3af', marginTop: '6px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>{label}</div>
    </div>
  );
}

export default function GithubStats() {
  const username = 'dania-01';
  const [user, setUser] = useState(null);
  const [langs, setLangs] = useState([]);
  const [stars, setStars] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const [uRes, rRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`),
        ]);
        if (!uRes.ok) throw new Error('API error');
        const userData = await uRes.json();
        const reposData = await rRes.json();

        setUser(userData);

        const totalStars = Array.isArray(reposData)
          ? reposData.reduce((s, r) => s + (r.stargazers_count || 0), 0)
          : 0;
        setStars(totalStars);

        if (Array.isArray(reposData)) {
          const langMap = {};
          reposData.forEach(r => {
            if (r.language) langMap[r.language] = (langMap[r.language] || 0) + 1;
          });
          const total = Object.values(langMap).reduce((s, v) => s + v, 0);
          const sorted = Object.entries(langMap)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 8)
            .map(([lang, count]) => ({
              lang,
              pct: total > 0 ? Math.round((count / total) * 100) : 0,
              color: LANG_COLORS[lang] || '#03DAC6',
            }));
          setLangs(sorted);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section className="gh-section">
      <Container>
        <div className="text-center mb-5">
          <h2 className="gh-title">GitHub Stats</h2>
          <p className="gh-subtitle">A snapshot of my open-source activity</p>
        </div>

        {loading && (
          <div className="gh-loading">
            <div className="gh-spinner" />
            <span>Fetching GitHub data…</span>
          </div>
        )}

        {!loading && error && (
          <p className="text-center" style={{ color: '#9ca3af' }}>
            Could not load GitHub stats. Visit{' '}
            <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" style={{ color: '#03DAC6' }}>
              my GitHub profile
            </a>{' '}directly.
          </p>
        )}

        {!loading && user && (
          <>
            {/* Profile chip */}
            <div className="gh-profile-chip">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={user.avatar_url} alt={user.login} className="gh-avatar" />
              <div>
                <div style={{ fontWeight: '700', color: '#fff', fontSize: '1rem' }}>{user.name || user.login}</div>
                <div style={{ color: '#9ca3af', fontSize: '0.82rem' }}>@{user.login}</div>
              </div>
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="gh-profile-link"
              >
                <FaGithub size={14} /> View Profile <FaExternalLinkAlt size={11} />
              </a>
            </div>

            {/* Stat cards */}
            <Row className="g-3 mb-5 justify-content-center">
              <Col xs={6} sm={6} md={3}>
                <StatCard icon={<FaBook />} label="Repositories" value={user.public_repos} color="#03DAC6" />
              </Col>
              <Col xs={6} sm={6} md={3}>
                <StatCard icon={<FaStar />} label="Stars Earned" value={stars} color="#FFD700" />
              </Col>
              <Col xs={6} sm={6} md={3}>
                <StatCard icon={<FaUsers />} label="Followers" value={user.followers} color="#A78BFA" />
              </Col>
              <Col xs={6} sm={6} md={3}>
                <StatCard icon={<FaUserFriends />} label="Following" value={user.following} color="#F472B6" />
              </Col>
            </Row>

            {/* Top Languages */}
            {langs.length > 0 && (
              <div className="gh-langs-card">
                <h3 className="gh-langs-title">Top Languages</h3>
                <div className="gh-langs-list">
                  {langs.map(({ lang, pct, color }) => (
                    <div key={lang} className="gh-lang-row">
                      <div className="gh-lang-label">
                        <span className="gh-lang-dot" style={{ background: color }} />
                        <span style={{ color: '#e5e7eb', fontSize: '0.9rem' }}>{lang}</span>
                      </div>
                      <div className="gh-lang-bar-wrap">
                        <div className="gh-lang-bar" style={{ width: `${pct}%`, background: color }} />
                      </div>
                      <span className="gh-lang-pct" style={{ color }}>{pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </Container>

      <style>{`
        .gh-section {
          padding: 80px 20px;
          background: linear-gradient(180deg, #0d1117 0%, #121212 100%);
        }
        .gh-title {
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 700;
          color: #fff;
          text-shadow: 0 0 14px rgba(3,218,198,0.6);
          margin-bottom: 10px;
        }
        .gh-subtitle {
          color: #6b7280;
          font-size: 1rem;
          margin: 0;
        }
        .gh-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          color: #03DAC6;
          font-size: 1rem;
          padding: 40px 0;
        }
        .gh-spinner {
          width: 36px; height: 36px;
          border: 3px solid rgba(3,218,198,0.2);
          border-top-color: #03DAC6;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .gh-profile-chip {
          display: flex;
          align-items: center;
          gap: 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(3,218,198,0.2);
          border-radius: 50px;
          padding: 10px 20px;
          width: fit-content;
          margin: 0 auto 40px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .gh-avatar {
          width: 42px !important;
          height: 42px !important;
          border-radius: 50%;
          border: 2px solid #03DAC6;
          object-fit: cover;
        }
        .gh-profile-link {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #03DAC6;
          font-size: 0.82rem;
          font-weight: 600;
          text-decoration: none;
          background: rgba(3,218,198,0.1);
          padding: 5px 12px;
          border-radius: 20px;
          border: 1px solid rgba(3,218,198,0.3);
          transition: background 0.2s;
        }
        .gh-profile-link:hover { background: rgba(3,218,198,0.2); color: #03DAC6; }

        .gh-stat-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid;
          border-radius: 16px;
          padding: 24px 16px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
        }

        .gh-langs-card {
          max-width: 680px;
          margin: 0 auto;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(3,218,198,0.15);
          border-radius: 20px;
          padding: 32px;
        }
        .gh-langs-title {
          text-align: center;
          color: #03DAC6;
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 24px;
        }
        .gh-langs-list { display: flex; flex-direction: column; gap: 14px; }
        .gh-lang-row {
          display: grid;
          grid-template-columns: 160px 1fr 44px;
          align-items: center;
          gap: 12px;
        }
        .gh-lang-label { display: flex; align-items: center; gap: 8px; }
        .gh-lang-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
        .gh-lang-bar-wrap {
          height: 8px;
          background: rgba(255,255,255,0.08);
          border-radius: 4px;
          overflow: hidden;
        }
        .gh-lang-bar { height: 100%; border-radius: 4px; transition: width 1s ease; }
        .gh-lang-pct { font-size: 0.82rem; font-weight: 600; text-align: right; }

        @media (max-width: 576px) {
          .gh-langs-card { padding: 20px 16px; }
          .gh-lang-row { grid-template-columns: 120px 1fr 36px; gap: 8px; }
          .gh-stat-card { padding: 18px 10px; }
        }
      `}</style>
    </section>
  );
}
