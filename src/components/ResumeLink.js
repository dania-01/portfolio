'use client';
import { FaFileDownload } from 'react-icons/fa';

export default function ResumeLink({ variant = 'default' }) {
  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1DoKKIacR8RQV240eaqqAodLToZUyWhZk/view', '_blank', 'noopener,noreferrer');
    const a = document.createElement('a');
    a.href = 'https://drive.google.com/uc?export=download&id=1DoKKIacR8RQV240eaqqAodLToZUyWhZk';
    a.download = 'Dania_Khan_Resume.pdf';
    a.click();
  };

  const baseStyle = {
    cursor: 'pointer', fontWeight: '600',
    display: 'flex', alignItems: 'center',
    justifyContent: 'center', gap: '6px',
    transition: 'all 0.3s ease-in-out',
    marginTop: '0',
  };

  const style = variant === 'navbar'
    ? { ...baseStyle, padding: '6px 16px', borderRadius: '9999px', background: '#03DAC6', border: 'none', color: '#000', fontSize: '14px' }
    : { ...baseStyle, padding: '12px 28px', minWidth: '160px', borderRadius: '8px', border: '2px solid #03DAC6', background: 'transparent', fontSize: '16px', color: '#03DAC6' };

  return (
    <button
      type="button"
      onClick={handleResumeClick}
      style={style}
      onMouseOver={(e) => {
        e.currentTarget.style.background = variant === 'navbar' ? '#00c4ad' : '#03DAC6';
        if (variant !== 'navbar') e.currentTarget.style.color = '#121212';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.background = variant === 'navbar' ? '#03DAC6' : 'transparent';
        e.currentTarget.style.color = variant === 'navbar' ? '#000' : '#03DAC6';
      }}
    >
      <FaFileDownload size={variant === 'navbar' ? 14 : 18} />
      Resume
    </button>
  );
}
