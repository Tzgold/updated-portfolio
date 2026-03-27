import React, { useEffect, useRef, useState } from 'react';
import { BIO, ABOUT, CREATIVITY_ITEMS, PROJECTS, EDUCATION, EXPERIENCE, SKILLS, SOCIAL_LINKS } from './data';
import CreativityCard from './components/CreativityCard';
import ProjectCard from './components/ProjectCard';
import TimelineCard from './components/TimelineCard';
import { Icon } from './components/Icons';


// --- Reusable Scroll Reveal Component ---
interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in ms
  threshold?: number; // 0 to 1
}

const RevealOnScroll: React.FC<RevealProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  threshold = 0.1 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { 
        threshold,
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before element is fully in view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div 
      ref={ref} 
      className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- Staggered List Wrapper ---
const StaggerContainer: React.FC<{ children: (isVisible: boolean) => React.ReactNode, threshold?: number }> = ({ children, threshold = 0.1 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold, rootMargin: "0px 0px -50px 0px" }
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => observer.disconnect();
    }, [threshold]);
  
    return <div ref={ref}>{children(isVisible)}</div>;
};

const App: React.FC = () => {
  const [isDark, setIsDark] = React.useState(true);
  const [profileImgError, setProfileImgError] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  React.useEffect(() => {
    const handleScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScrollProgress, { passive: true });
    handleScrollProgress();
    return () => window.removeEventListener('scroll', handleScrollProgress);
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  // Map icon names to URLs from SOCIAL_LINKS
  const socialMap: Record<string, string> = {
    Send: SOCIAL_LINKS.telegram,
    Linkedin: SOCIAL_LINKS.linkedin,
    Instagram: SOCIAL_LINKS.instagram,
    Twitter: SOCIAL_LINKS.twitter,
    Github: SOCIAL_LINKS.github,
    Mail: SOCIAL_LINKS.email
  };

  return (
    <div className="min-h-screen bg-transparent text-neutral-900 selection:bg-neutral-200 selection:text-black dark:text-neutral-200 dark:selection:bg-neutral-800 dark:selection:text-white transition-colors duration-300">
      <div className="fixed left-0 top-0 z-50 h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-neutral-700 dark:bg-neutral-200 shadow-[0_0_14px_rgba(0,0,0,0.2)] dark:shadow-[0_0_14px_rgba(255,255,255,0.35)] transition-[width] duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-16 h-72 w-72 rounded-full bg-neutral-200/40 blur-3xl dark:bg-white/[0.05]" />
        <div className="absolute top-[35%] -right-24 h-80 w-80 rounded-full bg-neutral-300/30 blur-3xl dark:bg-white/[0.04]" />
        <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-neutral-200/30 blur-3xl dark:bg-white/[0.03]" />
      </div>
      <div className="max-w-3xl mx-auto px-6 py-24 relative">
        
        {/* Theme Toggle */}
        <div className="absolute top-8 right-6 z-10">
           <button 
             onClick={toggleTheme} 
             className="relative w-10 h-10 rounded-full hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 text-neutral-600 dark:text-neutral-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 dark:focus-visible:ring-neutral-400 backdrop-blur-sm"
             aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
           >
             <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 transform ${isDark ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-0'}`}>
               <Icon name="Sun" size={18} />
             </div>
             <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 transform ${!isDark ? 'rotate-0 opacity-100 scale-100' : 'rotate-90 opacity-0 scale-0'}`}>
               <Icon name="Moon" size={18} />
             </div>
           </button>
        </div>

        {/* Header / Bio Section */}
        <header className="mb-28 animate-header">
            <div className="flex flex-col md:flex-row gap-10 items-start">
                 {/* Avatar */}
                 <div className="w-36 h-36 md:w-48 md:h-48 shrink-0 rounded-2xl bg-neutral-200 dark:bg-neutral-900 overflow-hidden border-2 border-neutral-300 dark:border-white/25 shadow-[0_18px_45px_-20px_rgba(23,23,23,0.65)] dark:shadow-[0_18px_55px_-20px_rgba(255,255,255,0.45)] relative group flex items-center justify-center ring-8 ring-white/45 dark:ring-white/[0.06]">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors duration-300 pointer-events-none z-10" />
                    <div className="absolute -inset-1 rounded-2xl bg-[conic-gradient(from_120deg,rgba(115,115,115,0.35),transparent,rgba(115,115,115,0.2))] dark:bg-[conic-gradient(from_120deg,rgba(255,255,255,0.32),transparent,rgba(255,255,255,0.16))] blur-md opacity-70 -z-10" />
                    {!profileImgError ? (
                        <img 
                            src="/images/profile3.jpg" 
                            alt="Profile" 
                            onError={() => setProfileImgError(true)}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                    ) : (
                        <div className="flex items-center justify-center w-full h-full bg-neutral-100 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500">
                            <Icon name="User" size={48} />
                        </div>
                    )}
                 </div>

                 <div className="flex-1 pt-2">
                     
                     <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-2 leading-[1.05]">
                        <span className="bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-white dark:via-neutral-200 dark:to-white bg-clip-text text-transparent">
                          {BIO.name}
                        </span>
                     </h1>
                     <p className="inline-flex items-center gap-2 text-sm md:text-base text-neutral-600 dark:text-neutral-300 mb-6 font-semibold tracking-wide px-3 py-1 rounded-full border border-neutral-300 dark:border-white/15 bg-white/60 dark:bg-neutral-900/45">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.65)]" />
                        {BIO.title}
                     </p>
                     
                     <p className="text-base leading-8 text-neutral-700 dark:text-neutral-300 mb-8 w-full max-w-2xl text-pretty">
                        {BIO.description}
                     </p>
                     
                     {/* Social Icons */}
                     <div className="flex gap-6 text-neutral-400 dark:text-neutral-500">
                        {['Send', 'Linkedin', 'Instagram', 'Twitter', 'Github', 'Mail'].map((iconName) => (
                          <a 
                            key={iconName}
                            href={socialMap[iconName] || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-black dark:hover:text-white transition-colors hover-underline-animation pb-1 focus:outline-none focus-visible:text-black dark:focus-visible:text-white focus-visible:ring-2 focus-visible:ring-neutral-500 rounded-sm" 
                            aria-label={iconName}
                          >
                            <Icon name={iconName} size={20} />
                          </a>
                        ))}
                     </div>
                 </div>
            </div>
        </header>

        {/* Creativity Section with Staggered Cards */}
        <section id="creativity" className="mb-32 section-surface">
          <RevealOnScroll>
            <h2 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white mb-8 border-l-[3px] border-neutral-300 dark:border-white/20 pl-4 py-1">Creativity</h2>
          </RevealOnScroll>
          <StaggerContainer threshold={0.2}>
            {(isVisible) => (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {CREATIVITY_ITEMS.map((item, index) => (
                  <div 
                    key={index}
                    className={`transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <CreativityCard item={item} />
                  </div>
                ))}
              </div>
            )}
          </StaggerContainer>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32 section-surface">
            <RevealOnScroll>
             <h2 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white mb-8 border-l-[3px] border-neutral-300 dark:border-white/20 pl-4 py-1">
                Skills
             </h2>
            </RevealOnScroll>
          
          <StaggerContainer>
            {(isVisible) => (
              <div className="flex flex-wrap gap-2.5">
                {SKILLS.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-3.5 py-1.5 rounded-md border border-neutral-300/80 dark:border-neutral-700 bg-white dark:bg-neutral-900/50 text-neutral-600 dark:text-neutral-400 text-sm font-medium hover:border-neutral-400 dark:hover:border-neutral-500 hover:text-black dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-500 hover:duration-200 hover:scale-105 hover:!delay-0 cursor-default hover:-translate-y-0.5 shadow-sm dark:shadow-none ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                    style={{ transitionDelay: `${index * 30}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </StaggerContainer>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-32 section-surface">
          <RevealOnScroll>
             <h2 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white mb-12 border-l-[3px] border-neutral-300 dark:border-white/20 pl-4 py-1">Experience</h2>
          </RevealOnScroll>
          <div className="ml-3 space-y-4">
            {EXPERIENCE.map((item, index) => (
              <RevealOnScroll key={index} delay={index * 100}>
                <TimelineCard 
                    item={item} 
                    isLast={index === EXPERIENCE.length - 1} 
                />
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* AI/ML Projects Section */}
        <section id="projects" className="mb-32 section-surface">
          <RevealOnScroll>
            <h2 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white mb-12 border-l-[3px] border-neutral-300 dark:border-white/20 pl-4 py-1">Projects</h2>
          </RevealOnScroll>
          <div className="space-y-10">
            {PROJECTS.map((item, index) => (
              <RevealOnScroll key={index} delay={index * 100}>
                <ProjectCard 
                    item={item} 
                    isLast={index === PROJECTS.length - 1} 
                />
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-32 section-surface">
          <RevealOnScroll>
             <h2 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white mb-12 border-l-[3px] border-neutral-300 dark:border-white/20 pl-4 py-1">Education</h2>
          </RevealOnScroll>
          <div className="ml-3 space-y-4">
            {EDUCATION.map((item, index) => (
              <RevealOnScroll key={index} delay={index * 100}>
                <TimelineCard 
                    item={item} 
                    isLast={index === EDUCATION.length - 1} 
                />
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="mb-32 section-surface">
            <RevealOnScroll>
                <h2 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white mb-8 border-l-[3px] border-neutral-300 dark:border-white/20 pl-4 py-1">
                    {ABOUT.title}
                </h2>
            </RevealOnScroll>
            
            <StaggerContainer threshold={0.2}>
              {(isVisible) => (
                <div className="space-y-6 text-neutral-700 dark:text-neutral-400 leading-8 max-w-2xl">
                    {ABOUT.paragraphs.map((p, index) => (
                      <p 
                        key={index} 
                        className={`text-[15px] transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                        style={{ transitionDelay: `${index * 150}ms` }}
                      >
                        {p}
                      </p>
                    ))}
                </div>
              )}
            </StaggerContainer>
        </section>

        <footer className="pt-16 border-t border-neutral-300 dark:border-white/10 flex flex-col items-center pb-12 opacity-80 hover:opacity-100 transition-opacity">
            <div className="flex gap-8 mb-8 text-neutral-400 dark:text-neutral-500">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors transform hover:scale-110 duration-200 focus:outline-none focus-visible:text-black dark:focus-visible:text-white focus-visible:ring-2 focus-visible:ring-neutral-500 rounded-sm" aria-label="Github"><Icon name="Github" size={20} /></a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors transform hover:scale-110 duration-200 focus:outline-none focus-visible:text-black dark:focus-visible:text-white focus-visible:ring-2 focus-visible:ring-neutral-500 rounded-sm" aria-label="LinkedIn"><Icon name="Linkedin" size={20} /></a>
                <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors transform hover:scale-110 duration-200 focus:outline-none focus-visible:text-black dark:focus-visible:text-white focus-visible:ring-2 focus-visible:ring-neutral-500 rounded-sm" aria-label="Twitter"><Icon name="Twitter" size={20} /></a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors transform hover:scale-110 duration-200 focus:outline-none focus-visible:text-black dark:focus-visible:text-white focus-visible:ring-2 focus-visible:ring-neutral-500 rounded-sm" aria-label="Instagram"><Icon name="Instagram" size={20} /></a>
            </div>
            <p className="text-neutral-400 dark:text-neutral-600 text-sm font-medium tracking-wide">
                &copy; {new Date().getFullYear()} {BIO.name}. All rights reserved.
            </p>
        </footer>

      </div>
    </div>
  );
};

export default App;