"use client";

import Section from "@/components/ui/Section";
import { Globe, ExternalLink, Code2 } from "lucide-react";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <div className="pb-20">
      <Section className="bg-muted/30 pt-20 pb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Real-world solutions built with precision and modern technology.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col rounded-[2rem] border border-border bg-card overflow-hidden card-hover-effect group"
            >
              <div className="aspect-video bg-muted flex items-center justify-center relative overflow-hidden">
                <Code2 className="w-12 h-12 text-primary/10 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                   <span className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">
                     {project.category}
                   </span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h2 className="text-xl font-bold mb-4">{project.title}</h2>
                
                <div className="space-y-4 mb-8 flex-1">
                  <div>
                    <h3 className="font-bold text-[10px] uppercase tracking-widest text-primary mb-1">Challenge</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[10px] uppercase tracking-widest text-primary mb-1">Solution</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-muted rounded-md text-[10px] font-bold text-foreground/70 uppercase tracking-tighter">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a 
                    href={project.link} 
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-muted hover:bg-secondary rounded-xl font-bold transition-all text-xs"
                  >
                    <Globe className="w-4 h-4" /> Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:scale-105 transition-transform text-xs"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
