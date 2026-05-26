"use client"
import React, { useRef, useState } from 'react'
import { motion } from "framer-motion"
import { Monitor, Server, Database, Terminal, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: <Monitor className="w-6 h-6" />,
    skills: ["React", "Next.js", "Tailwind", "Redux"],
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "group-hover:border-blue-500/50"
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6" />,
    skills: ["Node.js", "Express", "REST API", "Socket.io"],
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "group-hover:border-green-500/50"
  },
  {
    title: "Database",
    icon: <Database className="w-6 h-6" />,
    skills: ["MongoDB", "Mongoose", "Firebase"],
    color: "from-yellow-500/20 to-orange-500/20",
    borderColor: "group-hover:border-yellow-500/50"
  },
  {
    title: "Languages",
    icon: <Terminal className="w-6 h-6" />,
    skills: ["C++", "JavaScript", "TypeScript"],
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "group-hover:border-purple-500/50"
  },
  {
    title: "Tools",
    icon: <Wrench className="w-6 h-6" />,
    skills: ["Git", "GitHub", "Postman", "VS Code", "Docker"],
    color: "from-gray-500/20 to-slate-500/20",
    borderColor: "group-hover:border-gray-500/50"
  }
];

const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`relative [transform-style:preserve-3d] ${className}`}
    >
      {children}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className='container mx-auto px-4 py-24 relative z-10'>
      <div className='text-center mb-16'>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-3xl md:text-5xl font-bold mb-4 tracking-tight'
        >
          Technical Arsenal
        </motion.h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          Technologies and tools I use to build robust and scalable solutions
        </motion.p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="perspective-[1000px]"
          >
            <TiltCard className="group h-full rounded-3xl bg-card border border-border p-8 shadow-sm hover:shadow-2xl transition-all duration-300">
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
              
              <div className={`w-14 h-14 rounded-2xl bg-black/5 dark:bg-white/5 border border-border flex items-center justify-center mb-6 text-foreground group-hover:scale-110 group-hover:bg-background transition-all shadow-sm ${category.borderColor}`}>
                {category.icon}
              </div>
              
              <h3 className='text-xl font-bold mb-6 text-foreground'>{category.title}</h3>
              
              <div className="flex flex-wrap gap-2 relative z-10 [transform:translateZ(20px)]">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 rounded-xl bg-black/5 dark:bg-white/5 border border-border text-sm font-medium text-muted-foreground group-hover:text-foreground group-hover:border-foreground/20 transition-all hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills;