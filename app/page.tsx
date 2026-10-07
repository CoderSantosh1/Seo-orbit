import Hero from "./components/Homehero";
import About from "./components/Homeabout";
import Process from "./components/process";
import Services from "./components/services";
import Testimonials from "./components/testimonials";
import Blogs from "./components/homeblogs";

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
