import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Tools from "@/components/Tools";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Services />
      <CaseStudies />
      <Tools />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
