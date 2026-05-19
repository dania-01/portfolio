import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

export const metadata = {
  title: 'Dania Khan — Frontend Developer',
  description: 'Portfolio of Dania Khan, Frontend Developer specialising in React.js and Next.js',
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
