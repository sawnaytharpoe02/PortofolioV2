import Navbar from "./components/NavSection/Navbar";
import Hero from "./components/HeroSection/Hero";
import "./App.css";

function App() {
  return (
    <main className="font-anderson w-full min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;
