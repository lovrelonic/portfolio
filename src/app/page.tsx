import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import CtaBanner from "@/components/CtaBanner";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import Process from "@/components/Process";
import Tools from "@/components/Tools";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Work />
      <CtaBanner text="Like what you see? Let's build yours." label="Book a Free Audit →" />
      <Services />
      <Approach />
      <CtaBanner text="Want results like these?" label="Book a Strategy Call →" />
      <Process />
      <CtaBanner text="Ready to get started?" label="Book a Free Audit →" />
      <Tools />
      <Contact />
      <Footer />
    </main>
  );
}
