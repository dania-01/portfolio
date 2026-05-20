import NavBar from '@/components/NavBar';
import Banner from '@/components/Banner';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import GithubStats from '@/components/GithubStats';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Background from '@/components/Background';

export default function Home() {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Background />
      <NavBar />
      <Banner />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <GithubStats />
      <Contact />
      <Footer />
    </div>
  );
}
