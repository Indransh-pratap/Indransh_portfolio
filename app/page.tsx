"use client"
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import { BackgroundEffects } from "@/components/ui/background-effects";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      <BackgroundEffects />
      
      <Hero />
      
      <About />
      
      <Skills />
      
      <Projects />
      
      <Experience />
      
      <Achievements />
      
      <Contact />
    </main>
  );
}
