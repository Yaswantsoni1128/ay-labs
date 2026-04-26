import Link from "next/link";
import { Code2, Globe, Users, Mail, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-primary font-bold text-2xl mb-4">
              <Code2 className="w-8 h-8" />
              <span>AY Labs</span>
            </Link>
            <p className="text-muted-foreground max-w-xs mb-6">
              Building next-generation web solutions and AI-driven applications for businesses worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors">
                <Users className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
              <a href="mailto:contact@aylabs.com" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>contact@aylabs.com</li>
              <li>LinkedIn: AY Labs</li>
              <li>Based in India</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AY Labs. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
