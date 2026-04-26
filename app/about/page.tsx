"use client";

import Section from "@/components/ui/Section";
import { Users, Target, Rocket, Heart, Code2, Cpu } from "lucide-react";
import { team } from "@/lib/data";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="pb-20">
      <Section className="bg-muted/30 pt-20 pb-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Engineering Value</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            AY Labs is a boutique software studio dedicated to crafting high-performance digital products that solve real business problems.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We started AY Labs with a simple goal: to build software that lasts. We believe in clean architecture, transparent communication, and technical excellence.
              </p>
            </div>
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary h-fit">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Mission Focused</h3>
                    <p className="text-muted-foreground text-sm">To deliver scalable and innovative software solutions that provide tangible ROI for our clients.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary h-fit">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Agile Execution</h3>
                    <p className="text-muted-foreground text-sm">We iterate fast, communicate clearly, and deliver projects on time without compromising quality.</p>
                  </div>
               </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             {[
               { icon: Code2, label: "Full Stack", color: "text-blue-500" },
               { icon: Cpu, label: "AI Focused", color: "text-purple-500" },
               { icon: Users, label: "User Centric", color: "text-amber-500" },
               { icon: Heart, label: "Craftsmanship", color: "text-red-500" },
             ].map((item, i) => (
               <div key={item.label} className="aspect-square rounded-[2rem] bg-card border border-border flex flex-col items-center justify-center p-6 text-center card-hover-effect">
                  <item.icon className={`w-10 h-10 ${item.color} mb-4`} />
                  <h4 className="font-bold text-sm uppercase tracking-widest">{item.label}</h4>
               </div>
             ))}
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section className="bg-muted/30 rounded-[3rem] mx-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Founders</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Experienced engineers dedicated to your project's success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] border border-border bg-card text-center card-hover-effect"
            >
              <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-6 flex items-center justify-center border border-border overflow-hidden">
                <Users className="w-10 h-10 text-muted-foreground/50" />
              </div>
              <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary font-bold text-sm mb-4 uppercase tracking-widest">{member.role}</p>
              <div className="px-4 py-2 bg-muted rounded-full text-[10px] font-bold uppercase tracking-widest inline-block">
                {member.skill}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
