import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: '#0d1117', color: '#f0f6fc', textAlign: 'center',
      padding: '0 24px', fontFamily: "'Centra', system-ui, sans-serif",
    }}>
      <h1 style={{
        fontSize: 'clamp(5rem, 18vw, 10rem)', fontWeight: '800', lineHeight: 1,
        background: 'linear-gradient(135deg, #03DAC6 0%, #a78bfa 100%)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        marginBottom: '16px',
      }}>
        404
      </h1>
      <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', fontWeight: '700', marginBottom: '12px' }}>
        Page not found
      </h2>
      <p style={{ color: '#8b949e', fontSize: '1rem', maxWidth: '380px', lineHeight: 1.7, marginBottom: '36px' }}>
        Looks like this page doesn&apos;t exist. Let&apos;s get you back home.
      </p>
      <Link href="/" style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        padding: '12px 28px', borderRadius: '8px',
        border: '2px solid #03DAC6', color: '#03DAC6',
        fontWeight: '700', fontSize: '0.95rem',
        transition: 'all 0.25s', textDecoration: 'none',
      }}>
        ← Back to Home
      </Link>
    </div>
  );
}
