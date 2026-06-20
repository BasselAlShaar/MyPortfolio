import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Capabilities } from "@/components/Capabilities";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Capabilities />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
