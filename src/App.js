import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from './components/ProjectCard'
import AboutMe from './components/AboutMe'
import SkillCard from './components/SkillCard'
import ContactForm from './components/ContactForm'
import AnimatedCursor from "react-animated-cursor"


function App() {
  return (
    <>
    <AnimatedCursor
          innerSize={20}
          outerSize={30}
          color="182, 31, 224"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
    <div>
      <Navbar />
      <HomeBanner id = "home"/>
      <ProjectCard
        id = "project"
        className = "odd"
        projectTitle="Credible Solutions Pvt Ltd."
        projectDesc="Pioneering Excellence in Medical Solutions"
        projectLink="https://csl24.com/"
        deployedProjectLink="https://csl24.com/"
        projectImg={require('./images/csl.webp')}
      />

      <ProjectCard
        projectTitle="Core Medix"
        projectDesc="3D printed medical implants"
        projectLink="http://3dhub.life/"
        deployedProjectLink="http://3dhub.life/"
        projectImg={require('./images/coremedix.webp')}
      />

      <ProjectCard
        className = "odd"
        projectTitle="Lion Diamonds"
        projectDesc="Lion Diamonds | Discover & Create Something Unique."
        projectLink="https://liondiamonds.nyc/"
        deployedProjectLink="https://liondiamonds.nyc/"
        projectImg={require('./images/liondiamonds.webp')}
      />
      <ProjectCard
        projectTitle="Rafanelli Events"
        projectDesc="Destination weddings and large-scale corporate events"
        projectLink="https://www.rafanellievents.com/"
        deployedProjectLink="https://www.rafanellievents.com/"
        projectImg={require('./images/rafanellievents.webp')}
      />
      <ProjectCard
        className = "odd"
        projectTitle="Figma to HTML"
        projectDesc="Figma to HTML, CSS, JavaScript"
        projectLink="https://rajonmn.github.io/WSE-Project-1-Figma-to-HTML-CSS-JavaScript/"
        deployedProjectLink="https://rajonmn.github.io/WSE-Project-1-Figma-to-HTML-CSS-JavaScript/"
        projectImg={require('./images/project1.webp')}
      />
      
      <AboutMe id = 'about' />
      <SkillCard id = 'skills' />
      <ContactForm id = 'contact' />
      <Footer />
    </div>
    </>
  );
}

export default App;
