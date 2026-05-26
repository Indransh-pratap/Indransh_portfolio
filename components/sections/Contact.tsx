"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { Card } from "../ui/card";
import ContactForm from "../contact-form";
import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto px-4 py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-md leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Let&apos;s build something amazing together.
          </p>
          <div className="flex gap-4 mb-10">
            <Button variant="outline" size="icon" asChild className="rounded-full w-12 h-12 border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-colors">
              <a href="https://github.com/Indransh-pratap" target="_blank">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="rounded-full w-12 h-12 border-white/10 hover:border-secondary/50 hover:bg-secondary/10 transition-colors">
              <a href="https://linkedin.com/in/indransh-pratap-947489375/" target="_blank">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="rounded-full w-12 h-12 border-white/10 hover:border-accent/50 hover:bg-accent/10 transition-colors">
              <a href="mailto:indranshpratap@gmail.com" target="_blank">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
          <Card className="px-8 py-8 bg-card/40 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.2)] rounded-3xl">
            <ContactForm />
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center items-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-[100px] -z-10"></div>
          <Image
            src={"/contact.svg"}
            alt="Contact Illustrations"
            width={600}
            height={600}
            className="drop-shadow-[0_0_30px_rgba(124,58,237,0.15)] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
