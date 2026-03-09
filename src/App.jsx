import AboutSection from "./component/AboutSection";
import ContactSection from "./component/ContactSection";
import Footer from "./component/Footer";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import ProjectSection from "./component/ProjectSection";
import SkillsSection from "./component/SkillsSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
