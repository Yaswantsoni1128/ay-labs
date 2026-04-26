import { Globe, Cpu, Zap, Bug, Code2, Users, Rocket, Target, Heart } from "lucide-react";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const services = [
  {
    id: "web-dev",
    title: "Web Development",
    shortDescription: "Modern, responsive full stack applications tailored to your business needs.",
    fullDescription: "Full-stack web applications built with React, Next.js, Node.js, and MongoDB. We focus on performance, SEO, and user experience.",
    deliverables: ["Responsive Frontend", "Scalable Backend", "Database Integration", "SEO Optimization"],
    whoIsItFor: "Startups and businesses looking for a robust online presence.",
    icon: Globe,
    color: "text-blue-500",
    bgClass: "bg-blue-500/10",
  },
  {
    id: "ai-solutions",
    title: "AI / GenAI Solutions",
    shortDescription: "Cutting-edge GenAI integration and custom AI agents to automate your workflow.",
    fullDescription: "Integrating LLMs, building custom RAG pipelines, and developing AI agents to automate business processes.",
    deliverables: ["Custom AI Chatbots", "Automated Content Gen", "RAG Systems", "AI Agent Workflows"],
    whoIsItFor: "Companies wanting to leverage the power of AI to boost productivity.",
    icon: Cpu,
    color: "text-purple-500",
    bgClass: "bg-purple-500/10",
  },
  {
    id: "api-dev",
    title: "API Development (FastAPI)",
    shortDescription: "High-performance, scalable APIs built with FastAPI and Node.js.",
    fullDescription: "High-performance, secure, and well-documented APIs built with FastAPI or Node.js to power your applications.",
    deliverables: ["RESTful/GraphQL APIs", "OAuth2 Authentication", "API Documentation", "Third-party Integrations"],
    whoIsItFor: "Businesses needing a strong backend infrastructure for mobile or web apps.",
    icon: Zap,
    color: "text-amber-500",
    bgClass: "bg-amber-500/10",
  },
  {
    id: "optimization",
    title: "Bug Fixing & Optimization",
    shortDescription: "Audit and improve existing codebases. We fix bugs and optimize performance.",
    fullDescription: "Audit and improve existing codebases. We fix bugs, optimize performance, and refactor code for better maintainability.",
    deliverables: ["Bug Reports & Fixes", "Performance Audits", "Code Refactoring", "Load Time Optimization"],
    whoIsItFor: "Developers or businesses with platforms that need professional refinement.",
    icon: Bug,
    color: "text-emerald-500",
    bgClass: "bg-emerald-500/10",
  },
];

export const projects = [
  {
    title: "AI E-Commerce Platform",
    category: "MERN + AI",
    problem: "A traditional e-commerce store struggled with high customer support volume and low search relevance.",
    solution: "Integrated a custom RAG-based AI chatbot and a semantic search engine using OpenAI and Pinecone.",
    techStack: ["Next.js", "Node.js", "OpenAI", "Pinecone"],
    link: "#",
    live: "#",
  },
  {
    title: "SaaS Analytics Dashboard",
    category: "Full Stack",
    problem: "Clients needed a way to visualize complex financial data in real-time with high security.",
    solution: "Developed a high-performance dashboard with real-time WebSockets and multi-tenant security architecture.",
    techStack: ["React", "FastAPI", "PostgreSQL", "Recharts"],
    link: "#",
    live: "#",
  },
  {
    title: "Enterprise API Gateway",
    category: "Backend",
    problem: "Legacy systems were unable to communicate efficiently, causing data silos.",
    solution: "Built a centralized API gateway that unified multiple legacy services into a modern GraphQL API.",
    techStack: ["FastAPI", "GraphQL", "Redis", "Docker"],
    link: "#",
    live: "#",
  },
];

export const stats = [
  { label: "Projects Delivered", value: "3+" },
  { label: "Happy Clients", value: "2" },
  { label: "Lines of Code", value: "100K+" },
  { label: "Success Rate", value: "99%" },
];

export const team = [
  { 
    name: "Yaswant", 
    role: "Chief Executive Officer (CEO)", 
    skill: "Creative Strategy & Vision" 
  },
  { 
    name: "Abhinav", 
    role: "Chief Technology Officer (CTO)", 
    skill: "System Architecture & Engineering" 
  },
];

export const pricingPlans = [
  { 
    name: "Basic Website", 
    price: "₹3k–₹5k", 
    features: ["1-3 Pages", "Responsive Design", "Basic SEO", "Contact Form"] 
  },
  { 
    name: "Professional Portfolio", 
    price: "₹2k–₹4k", 
    features: ["Custom Design", "Project Showcase", "Social Integration", "Fast Loading"] 
  },
  { 
    name: "Custom Application", 
    price: "Custom", 
    features: ["Complex Logic", "AI Integration", "User Auth", "Scalable Backend"] 
  },
];
