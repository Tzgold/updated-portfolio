
import { CreativityItem, ProjectItem, TimelineItem } from './types';


export const SOCIAL_LINKS = {
  github: "https://github.com/Tzgold",
  linkedin: "https://www.linkedin.com/in/tequam-z-96b4382b3",
  twitter: "https://x.com/Tequam710487",
  instagram: "https://www.instagram.com/t__zgold/",
  email: "mailto:tequamzgold@gmail.com",
  telegram: "https://t.me/T_zgold"
};

export const BIO = {
  name: "Tequam Zework",
  title: "Full Stack Developer",
  description: `My journey started when I was 17 years old when I wrote my first line of code in a terminal! Fast forward to today, and I've had the privilege of working at multiple start ups, an event organizing company, a huge corporation, campus clubs and handled government projects. My main focus these days is building modern, minimal and powerful products and digital experiences at Dream Intelligence for the world to explore.`
};

export const ABOUT = {
  title: "About Me",
  paragraphs: [
    "I am a passionate Full Stack Developer with over 4 years of experience in designing, building, and deploying responsive web and mobile applications. My expertise spans the full software development life cycle, from architectural design to deployment.",
    "I specialize in the MERN stack (MongoDB, Express, React, Node.js) and on Python and c++, have a strong command of modern frameworks like Next.js, React Native, and Flutter. I am dedicated to writing efficient, scalable code and delivering seamless user experiences that align with business objectives."
  ]
};

export const SKILLS = [
  "MERN Stack", "React", "Node.js", "Next.js", "TypeScript",
  "JavaScript", "Tailwind CSS", "MongoDB", "PostgreSQL", "MySQL",
  "React Native", "Flutter", "Dart", "Python", "Django",
  "HTML5", "CSS", "PHP", "Java", "Git", "Agile Development"
];

export const CREATIVITY_ITEMS: CreativityItem[] = [
  {
    title: "Blog",
    description: "I like to write here and there about tech, AI and crypto topics that interest me. My blog site is called T-ZBlogs.",
    icon: "PenTool"
  },
  {
    title: "Podcast",
    description: "I like having deep and long conversations with people that inspire me. My podcast is about these conversations",
    icon: "Mic"
  },
  {
    title: "Community",
    description: "Building a community of supportive, driven, caring and brilliant people around me is something I love to do",
    icon: "Users"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Wozena AI Automation",
    description: "Wozena AI Automation, a startup project my friend and I built from scratch! We designed the full website, making it a modern, aesthetic, and AI-powered platform for automating business workflows. Features include: AI strategy generator, AI chat assistant, and a booking calendar to connect with us.",
    image: "/images/wozena.png",
    logo: "/images/wozena.png",
    linkLive: "https://wozena-ai-automation.vercel.app/",
    linkSource: "https://github.com/Tzgold/wozena-ai-automation",
    technologies: ["React", "Firebase", "Python", "FastAPI", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "BookAddis",
    description: "BookAddis is an aesthetic, minimal, and user-friendly hotel booking platform based in Addis Ababa. It allows users to search, compare, and book hotels effortlessly, view detailed amenities, read reviews, and manage reservations. With advanced features like real-time availability, secure payments, and personalized recommendations, BookAddis makes planning your stay in Addis Ababa seamless and enjoyable.",
    image: "/images/bookaddis.png",
    logo: "/images/bookaddis.png",
    linkLive: "https://github.com/Tzgold/BookAddis",
    linkSource: "https://github.com/Tzgold/BookAddis",
    technologies: ["TypeScript", "Node.js", "Express", "Clean Architecture", "Tailwind CSS"]
  },
  {
    title: "Garment Business Management",
    description: "The Garment Business Management App is a complete solution designed to simplify and automate daily operations for garment manufacturers, wholesalers, and tailoring businesses. It keeps track of everything from orders to inventory so business owners can focus on production, quality, and growth instead of paperwork.",
    image:"/images/Garment2.jpg",
    logo: "/images/Garment2.jpg",
    linkLive: "https://github.com/Tzgold/garment-management",
    linkSource: "https://github.com/Tzgold/garment-management",
    technologies: ["React Native", "FastAPI", "Android Native Modules"]
  },
  {
    title: "Overlay AI",
    description: "Real-time voice and text translation application supporting over 50 languages with offline capability. Built with React Native and custom ML models for low-latency on-device processing.",
    image:"/images/verbaflow1.jpg",
    logo: "/images/verbaflow1.jpg",
    linkLive: "#",
    linkSource: "https://github.com/Tzgold/verbaflow",
    technologies: ["React Native", "TensorFlow Lite", "Node.js"]
  },
  {
    title: "Roompulse",
    description: "A lightweight IoT system that monitors indoor temperature, humidity, and noise levels using low-cost sensors. Each sensor node transmits data to a central dashboard where users can view real-time readings, detect abnormal conditions, and track trends over time.",
    image:"/images/roompulse.jpg",
    logo: "/images/roompulse.jpg",
    linkLive: "#",
    linkSource: "https://github.com/Tzgold/ecotrack",
    technologies: ["Node.js", "Express.js", "supabase", "firebase", "react", "chart.js", "some hard ware devices"]
  },
  {
    title: "Sentinels",
    description: "High-frequency crypto trading bot with backtesting engine and strategy marketplace. Features real-time market analysis and automated execution across multiple exchanges.",
    image:"/images/trading bot1.jpg",
    logo: "/images/trading bot1.jpg",
    linkLive: "#",
    linkSource: "https://github.com/Tzgold/sentinels",
    technologies: ["Rust", "Python", "React", "PostgreSQL"]
  }
];

export const EDUCATION: TimelineItem[] = [
  {
    date: "2023 - present",
    title: "American College of Technology",
    subtitle: "Computer science Degree",
    description: "My years in ACT is one of the most profound years of my life. It was during my campus years I've built most of my projects and participated in clubs and events. I've made some incredible memories in there and learnt so much and the current version of me was very much shaped because of it."
  },
  {
    date: "2019 - 2023",
    title: "Online Courses",
    subtitle: "Programming",
    description: "I’m a self-taught programmer learning everything online. I don’t have a teacher or a classroom—I teach myself through tutorials, docs, and real projects. It’s not always easy, but I enjoy the challenge. Every day I push myself to understand more, build more, and improve my skills. Step by step, I’m becoming the developer I want to be."
  },
  {
    date: "2020 - 2023",
    title: "Tewodros Secondary Acadamy",
    subtitle: "High School Diploma",
    description: "These few years were some of my favorite years in school where I had to start as new and ready myself for what is coming"
  },
  {
    date: "2012 - 2020",
    title: "Dalsha Bezawit Alem Acadamy",
    subtitle: "Middle and High School",
    description: "These were some of the years that shaped my teenage years and befriended some of my life long friends. It is also where I discovered programming."
  }
];

export const EXPERIENCE: TimelineItem[] = [
  {
    date: "July 2025 - Present",
    title: "Wozena AI Automation",
    subtitle: "Full Stack Dev and Co-founder",
    logo: "/images/wozena.png",
    description: "Wozena AI is an AI automation platform created by me and my friend to help businesses streamline their workflows. We build tools that replace repetitive tasks, improve speed, and make teams more efficient using smart, simple automation.",
    bullets: [
         "Built the full website from scratch, including frontend and backend.",
         "Developed AI Strategy Generator to provide personalized business automation recommendations.",
         "Integrated an AI Chat Assistant for instant guidance and support.",
         "Implemented a booking calendar for users to schedule consultations.",
         "Focused on modern, minimal, and user-friendly design for optimal user experience.",
         "Collaborated with a co-founder to plan, design, and launch the platform successfully.",
         "Ensured scalability and reliability of the platform for future growth."
    ]
  },
  {
    date: "Jan 2022 - Nov 2023",
    title: "WebFex",
    subtitle: "Full-stack Developer",
    logo: "/images/webfex.jpg",
    description: "WebFex is a crypto-focused platform created to help people trade, track, and understand digital assets more easily. We focus on simplicity, speed, and giving users clear insights into the crypto world.",
    bullets: [
       "A simple and fast crypto platform built to make trading and asset tracking easier.",
       "Real-time market insights and tools designed for smart decision-making.",
       "Created by us to bring clarity, speed, and accessibility to the crypto world."
    ]
  },
  {
    date: "Mar 2024 - Dec 2024",
    title: "EXLP",
    subtitle: "Front-end Developer",
    
    logo: "/images/EXLP.jpg",
    description: "EXLP is a modern platform designed to simplify logistics and delivery operations. It helps businesses track shipments, manage orders, and streamline communication in a fast and organized way.",
    bullets: [
        "Built modern, responsive UI components for EXLP to ensure a smooth user experience across all devices.",
        "Collaborated with backend APIs to display real-time delivery, tracking, and order management data.",
        "Improved the platform’s design, performance, and usability using clean code and best front-end practices."
    ]
  },
  {
    date: "Nov 2021 - Present",
    title: "Freelance",
    subtitle: "Fullstack Web and App Developer",
    description: "Developing custom websites, mobile applications, and reusable UI components tailored to client specifications.",
    bullets: [
        "Delivered fully responsive, full-stack solutions",
        "Build complete web applications from front-end UI to backend APIs and databases.",
        "Work directly with clients to understand requirements and turn ideas into working products.",
        "Managed client relationships and project timelines"
    ]
  }
];
