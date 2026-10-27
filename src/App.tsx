import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Partners, Tagline, Why, Courses, Steps, Reviews, FAQ, Enroll } from "./components/Sections";

export default function App() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Partners />
        <Tagline />
        <Why />
        <Courses />
        <Steps />
        <Reviews />
        <FAQ />
        <Enroll />
      </main>
      <Footer />
    </>
  );
}
