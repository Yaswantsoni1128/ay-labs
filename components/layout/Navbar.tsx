"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <nav className="glass rounded-full px-6 py-3 flex items-center gap-8 shadow-lg transition-all duration-300 hover:shadow-primary/20">
        <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl mr-4">
          <Code2 className="w-6 h-6" />
          <span>AY Labs</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative",
                pathname === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.name}
              {pathname === link.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                />
              )}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
