// ============================================================
// Centralized portfolio content for Dilshan Madhuranga
// ============================================================

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageId: number; // picsum seed ID fallback
  image?: string;   // local asset path override
  github: string;  // source URL
  live: string;    // demo/live URL
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  imageId: number;
}

export interface TechItem {
  name: string;
  category: string;
  icon: string;
}

// ---- Stats Block ----
export const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "30+", label: "Projects Delivered" },
  { value: "20+", label: "Frameworks & Tools" },
];

// ---- Projects (Real Work & Personal Projects) ----
export const projects: Project[] = [
  {
    id: "hris-system",
    title: "Enterprise HRIS SaaS Platform",
    description:
      "A complete HR & Payroll SaaS consisting of employee, attendance, leave, recruitment, performance evaluation (PE), benefits, and assets management modules. Optimized for UX, microservices, and RBAC.",
    tags: ["Angular", "PrimeNG", "REST APIs", "Microservices"],
    imageId: 21,
    image: "/assets/project_hris.png",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: "paddy-lk",
    title: "Paddy.lk (Farmers Web Application)",
    description:
      "Multi-tenant portal for Sri Lankan farmers, buyers, and vendors. Featuring a 30-step onboarding wizard, hierarchical query factories, and secure Keycloak token interceptors.",
    tags: ["React 18", "TypeScript", "Ant Design 5", "Zustand"],
    imageId: 42,
    image: "/assets/project_agriculture.png",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: "saloonflow",
    title: "SaloonFlow (Booking SaaS Monorepo)",
    description:
      "A multi-tenant saloon booking application structured as a monorepo. Features a React 19 SPA client, Express API gateway, Prisma db packages, and reusable shadcn/ui components.",
    tags: ["React 19", "Vite", "Prisma", "Express", "Zod"],
    imageId: 12,
    image: "/assets/project_todo.png",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: "image-gallery",
    title: "Wildy Image Gallery & CMS",
    description:
      "A fast digital asset management platform with a secure admin control panel for content modification, image additions, and seamless dockerized container configurations.",
    tags: ["Next.js", "Node.js", "Express.js", "PostgreSQL"],
    imageId: 25,
    image: "/assets/project_gallery.png",
    github: "#",
    live: "https://qa.wildy.earrow.lk/",
  },
  {
    id: "secondhand-lk",
    title: "secondhand.lk (Classified Ads)",
    description:
      "A high-traffic classified ads listing platform built with customized WordPress schemas, performance optimizations, and responsive search filtering engines.",
    tags: ["WordPress", "PHP", "SCSS", "SEO"],
    imageId: 28,
    image: "/assets/project_classifieds.png",
    github: "#",
    live: "https://sh.earrow.site/",
  },
  {
    id: "weather-app",
    title: "Interactive Weather Forecasting",
    description:
      "A real-time weather details search app presenting current climates and 7-day forecasts by consuming third-party location APIs.",
    tags: ["ReactJS", "API Integration", "CSS3"],
    imageId: 8,
    image: "/assets/project_weather.png",
    github: "https://github.com/DilshanM99/react-weather-app",
    live: "https://react-weather-app-with-forecast.netlify.app/",
  }
];

// ---- Skills Grid (Original SVGs) ----
export const techStack: TechItem[] = [
  { name: "Angular", category: "Frontend", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/angular.svg" },
  { name: "React", category: "Frontend", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/react.svg" },
  { name: "Next.js", category: "Frontend", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/nextdotjs.svg" },
  { name: "TypeScript", category: "Language", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/typescript.svg" },
  { name: "JavaScript", category: "Language", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/javascript.svg" },
  { name: "PHP", category: "Language", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/php.svg" },
  { name: "HTML5", category: "Markup", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/html5.svg" },
  { name: "CSS3", category: "Styling", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/css3.svg" },
  { name: "Tailwind CSS", category: "Styling", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/tailwindcss.svg" },
  { name: "Node.js", category: "Backend", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/nodedotjs.svg" },
  { name: "Express", category: "Backend", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/express.svg" },
  { name: "PostgreSQL", category: "Database", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/postgresql.svg" },
  { name: "MySQL", category: "Database", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/mysql.svg" },
  { name: "WordPress", category: "CMS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/wordpress.svg" },
  { name: "Figma", category: "UI/UX", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/figma.svg" },
  { name: "Docker", category: "DevOps", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/docker.svg" },
  { name: "GitHub", category: "Workflow", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg" },
  { name: "GitLab", category: "Workflow", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/gitlab.svg" },
];

// ---- Experience Timeline (Aligned with CV and Office Project Descriptions) ----
export const experiences: Experience[] = [
  {
    company: "eArrow (Pvt) Ltd",
    role: "Software Engineer / Web Development Team Lead",
    period: "Sep 2024 — Present",
    location: "Colombo, Sri Lanka",
    description: [
      "Acted as Front-end Developer and Team Lead, focusing heavily on UX enhancements for enterprise HRIS and Payroll SaaS platform used to streamline business workflows (employee, attendance, leave, recruitment, performance evaluation, benefits, and assets management modules).",
      "Designed and developed highly responsive, performant user interfaces using Angular and PrimeNG.",
      "Engineered complex business logic modules using Angular Signals and Reactive Forms.",
      "Integrated front-end web client modules with backend microservices-based architectures.",
      "Developed Wildy Image Gallery & CMS using Next.js, Node.js, Express, PostgreSQL, and Docker.",
      "Maintained and enhanced secondhand.lk classified ads site built on WordPress.",
      "Implemented robust front-end error handling conventions and unit testing policies.",
    ],
  },
  {
    company: "Devtrex (Pvt) Ltd",
    role: "Software Engineer",
    period: "April 2024 — Sep 2024",
    location: "Sri Lanka",
    description: [
      "Developed and delivered 5+ full-stack web applications across multiple business domains.",
      "Converted complex client business requirements into highly scalable technical system designs.",
      "Applied advanced SEO strategies and performance optimization procedures to improve search engine visibility.",
    ],
  },
  {
    company: "Dimensions IT (Pvt) Ltd",
    role: "Web Developer (Intern)",
    period: "Sep 2023 — Mar 2024",
    location: "Sri Lanka",
    description: [
      "Built and maintained 20+ responsive web platforms utilizing HTML5, SCSS, PHP, and vanilla JavaScript.",
      "Assisted senior developers with QA testing, hotfix debugging, and production container deployments.",
    ],
  },
  {
    company: "People's Bank",
    role: "School Leaver Trainee",
    period: "2019 — 2020",
    location: "Sri Lanka",
    description: [
      "Supported daily bank administrative operations and internal database workflows.",
      "Gained foundational exposure to corporate system workflows and compliance parameters.",
    ],
  },
];

// ---- Education Details ----
export const certificates: Certificate[] = [
  {
    id: "bsc-it",
    title: "B.Sc. in Information Technology",
    issuer: "University of Jaffna",
    date: "2020 — 2023",
    credentialUrl: "https://www.jfn.ac.lk",
    imageId: 1,
  },
  {
    id: "al-maths",
    title: "GCE Advanced Level (Mathematics Stream)",
    issuer: "Maliyadeva A.M.V",
    date: "2016 — 2018",
    credentialUrl: "#",
    imageId: 2,
  },
  {
    id: "ol-studies",
    title: "GCE Ordinary Level (7 A's, 2 C's)",
    issuer: "Maliyadeva A.M.V",
    date: "2010 — 2015",
    credentialUrl: "#",
    imageId: 3,
  },
];

// ---- Social Links ----
export const socialLinks = [
  { label: "GitHub", href: "https://github.com/DilshanM99", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dilshan-madhuranga-423642245/", icon: "linkedin" },
];
