import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaDribbble,
  FaMagnifyingGlass,
  FaArrowTrendUp,
  FaPlane,
  FaListOl,
  FaShieldHalved,
} from "react-icons/fa6";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiGit,
  SiFigma,
  SiVercel,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiNpm,
} from "react-icons/si";

export const profile = {
  name: "M. Zubair",
  firstName: "M.",
  lastName: "Zubair",
  headline: "Frontend Developer",
  roles: [
    "Frontend Developer",
    "React & Next.js Developer",
    "JavaScript Enthusiast",
    "UI / UX Enthusiast",
  ],
  location: "Nishter Colony, Lahore",
  email: "zubairanjum396@gmail.com",
  phone: "+92 304 0600396",
  availability: "Open to new opportunities",
  resumeUrl: "/M-Zubair-CV.pdf",
  summary:
    "I design and build fast, accessible and pixel-perfect web interfaces. With nearly a year of experience as a frontend developer at Drudots Technologies, I turn designs into clean, responsive experiences using React, Next.js and modern CSS.",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const socials = [
  { label: "GitHub", href: "https://github.com", icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
  { label: "X / Twitter", href: "https://x.com", icon: FaXTwitter },
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
  { label: "Dribbble", href: "https://dribbble.com", icon: FaDribbble },
];

export const stats = [
  { value: 1, suffix: "+", label: "Year Experience" },    
  { value: 15, suffix: "+", label: "Projects Shipped" },
  { value: 10, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Websites Launched" },
];

export const skillGroups = [
  {
    title: "Frontend",
    description: "Building modern, responsive interfaces.",
    skills: [
      { name: "React", level: 90, icon: SiReact, color: "#61dafb" },
      { name: "Next.js", level: 78, icon: SiNextdotjs, color: "#ffffff" },
      { name: "JavaScript", level: 88, icon: SiJavascript, color: "#f7df1e" },
      { name: "Tailwind CSS", level: 84, icon: SiTailwindcss, color: "#38bdf8" },
      { name: "Bootstrap", level: 80, icon: SiBootstrap, color: "#7952b3" },
    ],
  },
  {
    title: "Core Web",
    description: "The fundamental building blocks of the frontend.",
    skills: [
      { name: "HTML", level: 92, icon: SiHtml5, color: "#e34f26" },
      { name: "CSS", level: 88, icon: SiCss, color: "#1572b6" },
      { name: "TypeScript", level: 40, icon: SiTypescript, color: "#3178c6" },
      { name: "Vite", level: 82, icon: SiVite, color: "#a78bfa" },
    ],
  },
  {
    title: "Tools & Workflow",
    description: "Shipping with confidence and speed.",
    skills: [
      { name: "Git", level: 86, icon: SiGit, color: "#f1502f" },
      { name: "Figma", level: 78, icon: SiFigma, color: "#f24e1e" },
      { name: "Vercel", level: 80, icon: SiVercel, color: "#ffffff" },
      { name: "npm", level: 85, icon: SiNpm, color: "#cb3837" },
    ],
  },
];

export const marqueeTech = [
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "HTML", icon: SiHtml5, color: "#e34f26" },
  { name: "CSS", icon: SiCss, color: "#1572b6" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952b3" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Vite", icon: SiVite, color: "#a78bfa" },
  { name: "Git", icon: SiGit, color: "#f1502f" },
  { name: "Figma", icon: SiFigma, color: "#f24e1e" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
];

export const projectFilters = ["All", "React", "Next.js"];

export const projects = [
  {
    title: "Lost'N Found",
    category: "React",
    description:
      "A lost and found item management platform built with React and Tailwind CSS.",
    tags: ["React", "Tailwind CSS"],
    accent: "from-indigo-600 to-blue-500",
    glow: "bg-cyan-400/40",
    iconClass: "text-cyan-200",
    icon: FaMagnifyingGlass,
    live: "https://lostfound-pied-seven.vercel.app/",
    featured: true,
  },
  {
    title: "Upliftt",
    category: "React",
    description:
      "A modern web application built with React, featuring authentication and clean UI.",
    tags: ["React", "Tailwind CSS"],
    accent: "from-fuchsia-600 to-purple-500",
    glow: "bg-fuchsia-400/40",
    iconClass: "text-fuchsia-200",
    icon: FaArrowTrendUp,
    live: "https://uppleft.vercel.app/login",
    featured: true,
  },
  {
    title: "Nextrix",
    category: "Next.js",
    description:
      "A fast and SEO-friendly web application built with Next.js and Tailwind CSS.",
    tags: ["Next.js", "Tailwind CSS"],
    accent: "from-cyan-600 to-teal-500",
    glow: "bg-emerald-400/40",
    iconClass: "text-white",
    icon: SiNextdotjs,
    live: "https://nextrix-pi.vercel.app/",
    featured: true,
  },
  {
    title: "Aviations",
    category: "React",
    description:
      "An aviation-themed web application built with React and Tailwind CSS.",
    tags: ["React", "Tailwind CSS"],
    accent: "from-amber-500 to-orange-600",
    glow: "bg-amber-300/50",
    iconClass: "text-amber-100",
    icon: FaPlane,
    live: "https://aviation2-iota.vercel.app/",
    featured: false,
  },
  {
    title: "Stepform",
    category: "React",
    description:
      "A multi-step form wizard built with React and Tailwind CSS for smooth user onboarding.",
    tags: ["React", "Tailwind CSS"],
    accent: "from-emerald-600 to-teal-500",
    glow: "bg-teal-300/40",
    iconClass: "text-emerald-200",
    icon: FaListOl,
    live: "https://step-form1.vercel.app/",
    featured: false,
  },
  {
    title: "Sybersafe",
    category: "React",
    description:
      "A cybersecurity awareness platform built with React and Tailwind CSS.",
    tags: ["React", "Tailwind CSS"],
    accent: "from-rose-600 to-pink-500",
    glow: "bg-pink-400/40",
    iconClass: "text-rose-200",
    icon: FaShieldHalved,
    live: "https://sybersafe-lovat.vercel.app/",
    featured: false,
  },
];

export const experience = [
  {
    type: "work",
    role: "Frontend Developer",
    company: "Drudots Technologies",
    period: "2026 — Present",
    description:
      "Building and maintaining responsive, high-quality interfaces for clients with React and Tailwind CSS.",
    tags: ["React", "Tailwind CSS"],
  },
  {
    type: "work",
    role: "Web Developer Trainee",
    company: "Self Taught / Training",
    period: "6 Months",
    description:
      "Learnt front-end web development from scratch — HTML, CSS, JavaScript and React — then started working at Drudots Technologies.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
];

export const education = [
  {
    role: "BSC (Bachelor of Science)",
    company: "Islamia University of Bahawalpur (IUB)",
    period: "2020",
    description: "Graduated with First Division.",
    tags: ["BSC", "First Division"],
  },
  {
    role: "ICS (Intermediate in Computer Science)",
    company: "Dera Ghazi Khan",
    period: "2018",
    description: "Completed ICS with First Division.",
    tags: ["ICS", "First Division"],
  },
  {
    role: "Matriculation (Computer Science)",
    company: "Govt. Cit Rajapur",
    period: "2016",
    description: "Completed SSC with Computer Science.",
    tags: ["Matric", "Computer Science"],
  },
  {
    role: "CCA Course",
    company: "Government College",
    period: "6 Months",
    description: "Certificate in Computer Applications.",
    tags: ["CCA", "Certificate"],
  },
];
