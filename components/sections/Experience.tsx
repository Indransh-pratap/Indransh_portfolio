"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Backend Engineer intern",
    company: "Ekikai",
    duration: "May 2026- Present",
    description: [
      "Developing and maintaining scalable MERN stack web applications.",
      "Optimized database queries resulting in a 30% reduction in load times.",
      "Collaborated with cross-functional teams to design new UI/UX components."
    ]
  },
  {
    role: "Cyber Security Intern",
    Organization: "Amroha Police (UPP)",
    duration: "june 2025 - july 2025",
    description: [
       "Worked on cybersecurity-focused initiatives under Amroha Police (UPP), contributing to security awareness and technical support tasks.",
  
  "Assisted in research, analysis, and monitoring activities related to cyber threats, digital investigations, and OSINT practices.",

  "Collaborated on technology-driven solutions and explored the use of security tools for improving public safety operations."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="container mx-auto px-4 py-24 relative">
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and the impact I{"'"}ve made along the way.
          </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2 hidden md:block" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Marker */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border border-primary/50 items-center justify-center z-10 shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>

              {/* Content Card */}
              <div className="w-full md:w-[calc(50%-3rem)]">
                <Card className="p-6 bg-card/40 backdrop-blur-md border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_10px_30px_-15px_rgba(124,58,237,0.2)] group">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 mb-4 text-sm text-muted-foreground">
                    <span className="font-medium text-secondary">{exp.company}</span>
                    <span className="hidden sm:inline text-white/20">•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground/90 flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
