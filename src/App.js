import './App.css';
import 'antd/dist/antd.min.css'; // antd css stylesheet

// import components
import Navbar from './Navbar/Navbar';
import Intro from './Layout/Intro';
import Footer from './Layout/Footer';
import AboutMe from './Info/AboutMe';
import Projects from './Info/Project/Projects';
import Contact from './Info/Contact/Contact';
import Experience from './Info/Experience/Experience';

function App() {
  return (
    <div>
      {/* Top Content */}
      <Navbar />
      <Intro />

      {/* Portfolio Content */}
      <div className="divider"></div>
      <main>
        <AboutMe />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer Content */}
      <Footer />
    </div>
  );
}

export default App;
