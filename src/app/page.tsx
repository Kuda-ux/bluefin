import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyChoose from "@/components/home/WhyChoose";
import Packages from "@/components/home/Packages";
import Stats from "@/components/home/Stats";
import Projects from "@/components/home/Projects";
import Testimonials from "@/components/home/Testimonials";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChoose />
      <Packages />
      <Stats />
      <Projects />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
