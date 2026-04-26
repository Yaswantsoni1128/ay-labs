"use client";

import { Zap, CheckCircle2 } from "lucide-react";
import Section from "@/components/ui/Section";
import Link from "next/link";
import { services, pricingPlans } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <div className="pb-20">
      <Section className="bg-muted/30 pt-20 pb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Expert Solutions</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We specialize in engineering robust technical foundations for modern digital businesses.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-[2rem] border border-border bg-card card-hover-effect flex flex-col"
            >
              <div className={cn("p-4 rounded-2xl w-fit mb-6", service.bgClass, service.color)}>
                <service.icon className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                {service.fullDescription}
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="font-bold text-xs uppercase tracking-widest text-primary">Core Deliverables</h3>
                <div className="grid grid-cols-2 gap-3">
                  {service.deliverables.map(item => (
                    <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <Link 
                href="/contact" 
                className="w-full flex items-center justify-center gap-2 py-4 bg-secondary hover:bg-primary hover:text-white rounded-2xl font-bold transition-all"
              >
                Start Project <Zap className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/30 rounded-[3rem] mx-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Guideline estimates for your project planning. All quotes are customized to specific needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <div key={plan.name} className="p-8 rounded-3xl border border-border bg-card flex flex-col card-hover-effect">
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-primary mb-6">{plan.price}</div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map(f => (
                  <li key={f} className="text-muted-foreground text-sm flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {f}
                  </li>
                ))}
              </ul>
              <Link 
                href="/contact" 
                className="w-full py-4 text-center border border-primary text-primary rounded-2xl font-bold hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Consult Now
              </Link>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
