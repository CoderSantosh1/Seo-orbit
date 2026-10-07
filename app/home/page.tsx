import Hero from "@/app/components/Homehero";
import About from "@/app/components/Homeabout";
import Process from "@/app/components/process";
import Services from "@/app/components/services";
import Testimonials from "@/app/components/testimonials";
import Blogs from "@/app/components/homeblogs";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Process />
      <Services />
      <Testimonials />
      <Blogs />
    </>
  );
}
