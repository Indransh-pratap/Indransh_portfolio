"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const projectsData = [
  {
    title: "RTT OSINT Tool",
    description: "An advanced Open Source Intelligence tool designed for information gathering and reconnaissance. Streamlines security auditing processes.",
    problemSolved: "Automated manual OSINT gathering, reducing reconnaissance time by 60%.",
    features: ["Real-time data visualization", "Automated sub-domain enumeration", "Exportable PDF reports"],
    technologies: ["React", "Node.js", "Python", "Docker"],
    metrics: "Reduced time by 60%",
    category: "Security",
    liveUrl: "#",
    githubUrl: "#",
    image: "/placeholder-project.png" // User can replace with actual image
  },
  {
    title: "Career Path Recommender",
    description: "AI-driven application that analyzes user skills and interests to suggest optimal career paths and required learning resources.",
    problemSolved: "Helps students navigate career choices with 85% accuracy based on historical data.",
    features: ["Machine Learning model integration", "Personalized learning roadmap", "Skill gap analysis"],
    technologies: ["Next.js", "FastAPI", "TensorFlow", "MongoDB"],
    metrics: "85% Accuracy",
    category: "AI",
    liveUrl: "#",
    githubUrl: "#",
    image: "/placeholder-project.png"
  },
  {
    title: "Local Shopping Website",
    description: "A hyper-local e-commerce platform connecting neighborhood stores with local residents for rapid deliveries.",
    problemSolved: "Digitalized local vendors, increasing their monthly revenue by average of 25%.",
    features: ["Real-time inventory sync", "Geolocation based store discovery", "Integrated payment gateway"],
    technologies: ["MERN Stack", "Redux", "Tailwind CSS", "Stripe"],
    metrics: "25% Revenue Increase",
    category: "MERN",
    liveUrl: "#",
    githubUrl: "#",
    image: "/placeholder-project.png"
  },
  {
    title: "Real-time Chat App",
    description: "Full-stack real-time messaging application with presence indicators, read receipts, and typing statuses.",
    problemSolved: "Built a highly concurrent WebSocket server capable of handling 500+ active connections.",
    features: ["WebSocket integration", "End-to-end encryption", "File sharing capabilities"],
    technologies: ["React", "Socket.io", "Express", "Redis"],
    metrics: "500+ Concurrent Users",
    category: "Full Stack",
    liveUrl: "#",
    githubUrl: "#",
    image: "/placeholder-project.png"
  }
];

const filters = ["All", "MERN", "Security", "AI", "Full Stack"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projectsData.filter(
    (project) => activeFilter === "All" || project.category === activeFilter
  );

  return (
    <section id="projects" className="container mx-auto px-4 py-24 relative z-10">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my technical problem-solving and development capabilities.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mt-8"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter 
                ? "bg-foreground text-background shadow-md" 
                : "bg-card text-muted-foreground hover:bg-black/5 dark:hover:bg-white/5 border border-border"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>
      </div>

      <div className="flex flex-col gap-16 max-w-5xl mx-auto">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="group relative"
            >
              {/* Timeline dot & line (Visible on large screens) */}
              <div className="hidden lg:block absolute left-[-40px] top-1/2 bottom-0 w-px bg-border -translate-y-1/2 h-[120%]" />
              <div className="hidden lg:block absolute left-[-44px] top-1/2 w-2 h-2 rounded-full bg-primary ring-4 ring-background -translate-y-1/2" />

              <div className="bg-card border border-border rounded-3xl overflow-hidden flex flex-col lg:flex-row gap-0 shadow-sm hover:shadow-xl transition-all duration-500 relative">
                
                {/* Featured Badge */}
                <div className="absolute top-4 left-4 z-20 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full border border-border text-xs font-bold text-primary">
                  Featured
                </div>

                {/* Left: Content */}
                <div className="w-full lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center order-2 lg:order-1 relative z-10 bg-card">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{project.category}</span>
                    <span className="w-8 h-px bg-border"></span>
                    <span className="text-xs font-bold text-accent">{project.metrics}</span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6 space-y-2">
                    <p className="text-sm font-medium text-foreground">Key Features:</p>
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-black/5 dark:bg-white/5 border border-border rounded-lg text-xs font-medium text-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 mt-auto pt-4 border-t border-border">
                    <Button asChild variant="default" className="gap-2 bg-foreground text-background hover:bg-foreground/90 rounded-xl px-6 dark:bg-white dark:text-black dark:hover:bg-white/90">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="gap-2 rounded-xl px-6 border-border hover:bg-black/5 dark:hover:bg-white/5">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Source
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Right: Image */}
                <div className="w-full lg:w-1/2 aspect-video lg:aspect-auto relative overflow-hidden order-1 lg:order-2 bg-muted flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  {/* Generate placeholder box since image might not exist */}
                  <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-gradient-to-br from-black/5 to-black/10 dark:from-white/5 dark:to-white/10 group-hover:scale-105 transition-transform duration-700">
                    <span className="text-muted-foreground font-medium text-lg tracking-widest uppercase opacity-50">{project.title} Preview</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
