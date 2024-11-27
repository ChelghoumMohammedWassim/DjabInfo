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
      <div className="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
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


