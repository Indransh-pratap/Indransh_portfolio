"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section tracking
      const sections = document.querySelectorAll("section[id]");
      let currentActive = "";
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).clientHeight;
        if (window.scrollY >= sectionTop - 150 && window.scrollY < sectionTop + sectionHeight - 150) {
          currentActive = section.getAttribute("id") || "";
        }
      });
      setActiveSection(currentActive);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Achievements", href: "#achievements", id: "achievements" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`mx-auto transition-all duration-300 ${isScrolled ? "max-w-5xl px-4" : "container px-4"}`}>
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? "bg-white/70 dark:bg-black/50 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-full px-6 py-2 shadow-sm" : ""}`}>
          <Link href={"/"} className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
            Indransh<span className="text-primary">.</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-md">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id || (activeSection === "" && item.id === "home");
              return (
                <a
                  href={item.href}
                  key={item.href}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="default" size="sm" className="gap-2 rounded-full px-5 bg-foreground text-background hover:bg-foreground/90 dark:bg-white dark:text-black dark:hover:bg-white/90 shadow-sm transition-all hover:-translate-y-0.5">
              <Download className="w-4 h-4" />
              Resume
            </Button>
          </div>

          {/* MOBILE MENU BUTTON  */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <Button
              variant={"ghost"}
              size={"icon"}
              className="rounded-full hover:bg-black/5 dark:hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-4 right-4 mt-2 p-4 rounded-2xl border border-black/5 dark:border-white/10 bg-white/90 dark:bg-black/90 backdrop-blur-xl shadow-lg"
          >
            <nav className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <a
                  href={item.href}
                  key={item.href}
                  className="text-base font-medium text-muted-foreground hover:text-primary transition-all px-4 py-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="default" className="gap-2 mt-2 w-full rounded-xl bg-foreground text-background hover:bg-foreground/90 dark:bg-white dark:text-black dark:hover:bg-white/90">
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
