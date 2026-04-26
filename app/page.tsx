"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, CheckCircle2, Code2 } from "lucide-react";
import Section from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import { services, stats, projects } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section className="relative pt-20 pb-32">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 inline-block uppercase tracking-widest">
              Premium Software Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 hero-text-gradient">
              Transforming Ideas into <br /> <span className="text-primary">Digital Reality</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              AY Labs specializes in building high-performance web applications, 
              AI-driven solutions, and robust APIs. We turn complex problems into elegant software.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-primary/20"
              >
                Start a Project <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/projects"
                className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-bold text-lg hover:bg-secondary/80 transition-colors border border-border"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Services Overview */}
      <Section className="bg-muted/30">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-muted-foreground">
              We provide a comprehensive range of services to help your business thrive in the digital age.
            </p>
          </div>
          <Link href="/services" className="text-primary font-bold flex items-center gap-2 group">
            See All Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-border bg-card card-hover-effect flex flex-col h-full"
            >
              <div className={cn("p-3 rounded-2xl w-fit mb-6", service.bgClass, service.color)}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                {service.shortDescription}
              </p>
              <Link href="/services" className="text-primary text-sm font-bold flex items-center gap-1 group">
                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Featured Projects Preview */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A glimpse into some of the powerful solutions we&apos;ve built for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group cursor-pointer rounded-3xl overflow-hidden border border-border bg-card card-hover-effect"
            >
              <div className="aspect-[4/3] bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                   <Code2 className="w-20 h-20" />
                </div>
                <div className="absolute bottom-6 left-6">
                   <span className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">
                     {project.category}
                   </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                   {project.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why AY Labs */}
      <Section className="bg-muted/30 border border-border rounded-[3rem] mx-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Businesses <br /> Choose AY Labs</h2>
            <div className="space-y-6">
              {[
                "Custom-tailored solutions for your specific needs",
                "Scalable and clean code architecture",
                "Cutting-edge AI integration for efficiency",
                "End-to-end support from ideation to deployment",
                "Transparent communication and agile process"
              ].map((text) => (
                <div key={text} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <p className="text-lg font-medium">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="p-8 rounded-3xl bg-card border border-border text-center card-hover-effect">
                <h4 className="text-4xl font-bold mb-2 text-primary">{stat.value}</h4>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="text-center py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Build Something Amazing?</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Let&apos;s discuss your project and see how AY Labs can help you achieve your goals.
        </p>
        <Link
          href="/contact"
          className="px-10 py-5 bg-primary text-primary-foreground rounded-full font-bold text-xl hover:scale-105 transition-transform inline-flex items-center gap-2 shadow-xl shadow-primary/20"
        >
          Let&apos;s Talk <Mail className="w-6 h-6" />
        </Link>
      </Section>
    </>
  );
}
