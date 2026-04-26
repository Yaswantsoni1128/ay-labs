"use client";

import Section from "@/components/ui/Section";
import { Mail, Users, MapPin, Send, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pb-20">
      <Section className="bg-muted/30 pt-20 pb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Start a Conversation</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to bring your project to life? We respond to all inquiries within 24 hours.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-4">
                <a href="mailto:contact@aylabs.com" className="flex items-center gap-6 group p-6 rounded-[2rem] border border-border bg-card card-hover-effect">
                  <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors h-fit">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Email Us</p>
                    <p className="text-xl font-bold">contact@aylabs.com</p>
                  </div>
                </a>
                
                <a href="#" className="flex items-center gap-6 group p-6 rounded-[2rem] border border-border bg-card card-hover-effect">
                  <div className="p-4 rounded-2xl bg-blue-600/10 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors h-fit">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">LinkedIn</p>
                    <p className="text-xl font-bold">AY Labs Official</p>
                  </div>
                </a>

                <div className="flex items-center gap-6 p-6 rounded-[2rem] border border-border bg-card">
                  <div className="p-4 rounded-2xl bg-amber-500/10 text-amber-500 h-fit">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Location</p>
                    <p className="text-xl font-bold">Remote / India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-primary/5 border border-primary/10">
              <div className="flex gap-4 mb-4">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Technical Consultation</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Discuss your technical architecture</li>
                <li>• Get a custom project timeline</li>
                <li>• Review potential AI integrations</li>
                <li>• Direct access to lead engineers</li>
              </ul>
            </div>
          </div>

          <div className="bg-card border border-border p-8 md:p-12 rounded-[3rem] shadow-xl shadow-primary/5">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-muted border-none focus:ring-2 focus:ring-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-muted border-none focus:ring-2 focus:ring-primary outline-none transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest ml-1">Inquiry Type</label>
                <select 
                  id="subject"
                  className="w-full px-6 py-4 rounded-2xl bg-muted border-none focus:ring-2 focus:ring-primary outline-none transition-all appearance-none"
                >
                  <option>Web Development</option>
                  <option>AI Solutions</option>
                  <option>API Development</option>
                  <option>Optimization</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  placeholder="Tell us about your goals..."
                  className="w-full px-6 py-4 rounded-2xl bg-muted border-none focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-primary text-primary-foreground rounded-2xl font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 shadow-xl shadow-primary/20 uppercase tracking-widest"
              >
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}
