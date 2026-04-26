"use client";

import Section from "@/components/ui/Section";
import { Users, Target, Rocket, Heart, Code2, Cpu } from "lucide-react";
import { team } from "@/lib/data";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="pb-20">
      <Section className="bg-muted/30 pt-20 pb-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Expert Engineering, <br /> Startup Agility</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            AY Labs is a high-performance software studio founded by two engineers who believe in building products that don't just work—they win. We combine the speed of a lean startup with the technical rigor of enterprise-grade engineering.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Why Partner With Us?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When you work with AY Labs, you're not just another ticket in a queue. You get direct access to the founders. We treat your product with the same intensity we treat our own, focusing on speed-to-market, scalable architecture, and measurable results.
              </p>
            </div>
            <div className="space-y-5">
               <div className="flex gap-4 p-4 rounded-2xl bg-card/50 border border-border">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary h-fit">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base">Direct Founder Access</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">Skip the account managers. You'll work directly with our lead engineer and creative director from day one.</p>
                  </div>
               </div>
               <div className="flex gap-4 p-4 rounded-2xl bg-card/50 border border-border">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary h-fit">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base">Rapid Deployment</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">We leverage lean methodologies to ship high-quality features faster, helping you stay ahead of the competition.</p>
                  </div>
               </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
             {[
               { icon: Code2, label: "Scalable Full Stack", color: "text-blue-500" },
               { icon: Cpu, label: "Advanced AI", color: "text-purple-500" },
               { icon: Users, label: "User First", color: "text-amber-500" },
               { icon: Heart, label: "Clean Code", color: "text-red-500" },
             ].map((item, i) => (
               <div key={item.label} className="rounded-2xl bg-card border border-border flex flex-col items-center justify-center p-5 text-center card-hover-effect aspect-[4/3]">
                  <item.icon className={`w-8 h-8 ${item.color} mb-3`} />
                  <h4 className="font-bold text-xs uppercase tracking-wider">{item.label}</h4>
               </div>
             ))}
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section className="relative overflow-hidden pt-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-[0.2em] text-primary">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed italic">
            The talented professionals behind Infrawave Solutions, each bringing unique expertise and passion to deliver exceptional digital experiences and innovative solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto relative z-10">
          {team.map((member, i) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2rem] border border-border bg-card/50 backdrop-blur-sm text-center card-hover-effect"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center border border-primary/20 shadow-inner">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary font-bold text-xs mb-4 uppercase tracking-[0.1em]">{member.role}</p>
              <div className="px-4 py-1.5 bg-muted rounded-full text-[10px] font-bold uppercase tracking-widest inline-block border border-border">
                {member.skill}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
