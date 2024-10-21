import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Features from "./Components/Features"
import Testimonials from "./Components/Testimonials"
import Contact from "./Components/Contact"

const App = () => {
  return (
    <>
      <div className=" px-9  lg:px-[10rem] p-2 relative scroll-smooth">
        <Navbar />  
        <Hero />
        <About />
        <Features />
        <Testimonials />
        <Contact />
        
      </div>  
    </>


  )

}

export default App
