import { Navbar } from "./layout/Navbar"
import { About } from "./section/About"
import { Experience } from "./section/Experience"
import { Hero } from "./section/Hero"
import { Testimonials } from "./section/Testimonials"
import { Projects } from "./section/Projects"
import { Contact } from "./section/Contact"

function App() {
  return<div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
    </main>
  </div>
}

export default App
