import Navbar from "./components/nav/Navbar";
import Hero from "./section/hero/Hero";
import AboutMe from "./section/aboutme/AboutMe";
import MyExpertise from "./section/expertise/MyExpertise";
import Project from "./section/project";
import Contact from "./section/contact";
import Footer from "./components/footer";
import FeatureProjects from "./section/feature_projects/featureProjects";
import "./App.css";

function App() {
  return (
    <main className="w-full min-h-[1000vh] font-dmsan text-black border border-black">
      <Navbar />
      <Hero />
      <AboutMe />
      <MyExpertise />
      <FeatureProjects />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
