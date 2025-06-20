import Navbar from './components/Navbar';
import Home from './components/Home';       // Your Home section
import About from './components/About';     // Your About section
import Skills from './components/Skills';   // Your Skills section
import Projects from './components/Projects';     // Projects
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <main className="">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}