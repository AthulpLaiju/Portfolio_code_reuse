import Navbar from './components/Navbar'; // Ensure Navbar component is imported
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';


const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-blue-300 selection:text-blue-900">
      {/* Background layer with z-index behind content */}
      <div className="fixed top-0 z-[-2] h-full w-full">
        <div className="absolute top-0 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        </div>
      </div>

      {/* Main content section with higher z-index */}
      <div className='relative z-10 container mx-auto px-8'>
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
