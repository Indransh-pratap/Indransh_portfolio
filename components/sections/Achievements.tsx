"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Award, Trophy, Star } from "lucide-react";

const achievements = [
  {
    title: "Solved 300+ DSA Problems",
    platform: "LeetCode & GeeksForGeeks",
    icon: <Trophy className="w-6 h-6 text-yellow-500" />,
    description: "Consistent problem solver focusing on algorithms, data structures, and optimization techniques."
  },
  {
    title: "1st Runner Up - Hackathon 2024",
    platform: "TechFest Hackathon",
    icon: <Award className="w-6 h-6 text-primary" />,
    description: "Built an AI-powered educational tool within 48 hours, selected among 50+ participating teams."
  },
  {
    title: "Cybersecurity Certification",
    platform: "Coursera",
    icon: <Star className="w-6 h-6 text-secondary" />,
    description: "Completed comprehensive coursework covering network security, ethical hacking, and secure coding."
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="container mx-auto px-4 py-24 relative">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Milestones and recognitions throughout my academic and professional journey.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full p-6 bg-card/40 backdrop-blur-xl border-white/10 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_-15px_rgba(124,58,237,0.2)]">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
              <p className="text-sm font-medium text-primary/80 mb-4">{item.platform}</p>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
