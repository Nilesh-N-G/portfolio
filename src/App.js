import "./assets/styles/index.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
<HeroSection />
<AboutMe />
<Experience />
<Projects />
<Contact />
<Footer />
    </div>
  );
}

export default App;
