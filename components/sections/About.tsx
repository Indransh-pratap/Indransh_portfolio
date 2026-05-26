"use client";
import { motion } from "framer-motion";
import { GraduationCap, Code2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative container mx-auto px-4 z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">About Me</h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: Photo Placeholder Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group rounded-3xl overflow-hidden aspect-[4/5] md:aspect-square bg-card border border-border flex items-center justify-center p-8 shadow-sm hover:shadow-xl transition-all"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
          {/* Animated border effect */}
          <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-[linear-gradient(white,white),linear-gradient(120deg,var(--primary),var(--accent))] dark:bg-[linear-gradient(#070B14,#070B14),linear-gradient(120deg,var(--primary),var(--accent))] [background-clip:padding-box,border-box] [background-origin:border-box] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10 text-center flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <Code2 className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Indransh Pratap</h3>
            <p className="text-muted-foreground">Software Engineering Student</p>
          </div>
        </motion.div>

        {/* Right: Story Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">My Story</h3>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              I build full-stack applications, explore cybersecurity concepts, and focus on solving DSA problems.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              Currently preparing for internships while building scalable projects that solve real-world issues.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Problem Solving", "Full-Stack Web", "Cybersecurity", "Team Collaboration"].map((skill, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-card p-8 rounded-3xl border border-border shadow-sm relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-32 h-32 bg-accent/10 rounded-full blur-[50px] group-hover:bg-accent/20 transition-all" />
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-foreground">
              <GraduationCap className="w-6 h-6 text-primary" /> Education
            </h3>
            
            <div className="relative pl-6 border-l-2 border-primary/20 space-y-6">
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                <h4 className="text-lg font-bold text-foreground">B.Tech in Computer Science</h4>
                <p className="text-primary font-medium text-sm mb-2">2021 - 2025</p>
                <p className="text-muted-foreground text-sm">Focusing on algorithms, full-stack development, and cybersecurity principles.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-background border-2 border-muted-foreground" />
                <h4 className="text-lg font-bold text-foreground">Higher Secondary</h4>
                <p className="text-muted-foreground font-medium text-sm mb-2">2019 - 2021</p>
                <p className="text-muted-foreground text-sm">Science stream with Computer Science.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
