'use client'
import { useEffect, useRef, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PricingPlans from "./components/PricingPlans";
import Projects from "./components/Projects";
import Questions from "./components/Questions";
import Review from "./components/Review";
import Skills from "./components/Skills";
import Toggle from "./components/sub/Toggle";
import Load from "./components/sub/Load";

export default function Home() {
  const [id, setId] = useState(0)
  const compRef = useRef(null)


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const intersecting = entry.isIntersecting
        if (intersecting) {
          setId(entry.target.id)
        }
      })
    }, { threshold: 0.3 })
    const compArr = Array.from(compRef.current.children)
    compArr.forEach((comp) => {
      observer.observe(comp)
    })
  }, [])

  return (
    <>
    <Load/>
      <Toggle>
        <Navbar id={id} />
        <div ref={compRef} className="w-min">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Review />
           <Projects/> 
          <PricingPlans />
          <Contact />
          <Questions />
        </div>
      </Toggle>
    </>
  );
}
