"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { label: "DSA Problems", value: "300+" },
  { label: "Projects", value: "5+" },
  { label: "Hackathons", value: "Multiple" },
  { label: "Internships", value: "Seeking" },
  { label: "Education", value: "B.Tech CSE" }
];

const roles = ["MERN Developer", "DSA Enthusiast", "Cybersecurity Explorer"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center container mx-auto px-4 pt-32 pb-20 overflow-hidden">
      {/* Subtle radial glow behind image */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 dark:bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            Available for Internship
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight leading-tight text-foreground">
            Hi, I'm <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              Indransh Pratap
            </span>
          </h1>
          
          <div className="h-10 mb-6 flex items-center">
            <motion.div
              key={roleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-xl md:text-2xl font-semibold text-muted-foreground"
            >
              {roles[roleIndex]}
            </motion.div>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-md leading-relaxed">
            Building scalable products, <br/>
            solving algorithmic problems, <br/>
            and creating real-world solutions.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-xl gap-2 bg-foreground text-background hover:bg-foreground/90 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-white dark:text-black dark:hover:bg-white/90 active:scale-95">
              <Download className="w-4 h-4"/>
              Download Resume
            </Button>
            <Link href="https://github.com/Indransh-pratap" target="_blank">
              <Button variant="outline" size="lg" className="rounded-xl gap-2 border-border hover:border-foreground/20 hover:bg-black/5 dark:hover:bg-white/5 transition-all hover:-translate-y-1 active:scale-95">
                <Github className="w-4 h-4"/>
                GitHub
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/indransh-pratap-947489375/" target="_blank">
              <Button variant="outline" size="lg" className="rounded-xl gap-2 border-border hover:border-foreground/20 hover:bg-black/5 dark:hover:bg-white/5 transition-all hover:-translate-y-1 active:scale-95">
                <Linkedin className="w-4 h-4"/>
                LinkedIn
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" size="lg" className="rounded-xl gap-2 border-border hover:border-foreground/20 hover:bg-black/5 dark:hover:bg-white/5 transition-all hover:-translate-y-1 active:scale-95">
                <Mail className="w-4 h-4"/>
                Contact
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center lg:justify-end relative"
        >
          <div className="relative w-full max-w-[500px] aspect-square">
            <Image 
              src="/hero.svg"
              alt="Developer Illustration"
              fill
              className="object-contain drop-shadow-xl dark:drop-shadow-[0_0_30px_rgba(255,255,255,0.05)]"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Stats Cards Below Hero */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10"
      >
        {stats.map((stat, i) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={i} 
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/30 transition-colors"
          >
            <h3 className="text-2xl font-bold text-foreground mb-1">{stat.value}</h3>
            <p className="text-sm text-muted-foreground text-center">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Hero;