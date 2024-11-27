import About from "./components/About";
import Contact from "./components/Contact";
import Copyrights from "./components/Copyrights";
import Hero from "./components/Hero";
import Information from "./components/Information";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Technologies from "./components/Technologies";

export default function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-slate-500">
      <div className="fixed top-0 left-0 w-full h-full -z-10">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
        <NavBar />
        <Hero />
        <About />
        <Technologies />
        <Services />
        <Information />
        <Contact />
        <Copyrights />
      </div>
    </div>
  );
}


