import React, { useEffect, useState } from 'react';
import { Icon } from './Icons';
import { ProjectItem } from '../types';

interface Props {
  item: ProjectItem;
  isLast?: boolean;
}

const ProjectCard: React.FC<Props> = ({ item, isLast }) => {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Reset error state if image source changes
    setImageError(false);
  }, [item.image]);

  return (
    <div className="relative group">
      {/* Timeline Line with Electric Effect - Softened */}
      {!isLast && (
        <div className="absolute left-[50px] top-[100px] bottom-[-40px] w-px border-l border-dashed border-neutral-300 dark:border-neutral-700 transition-all duration-500 group-hover:border-solid group-hover:border-neutral-400 dark:group-hover:border-neutral-600 group-focus-within:border-solid group-focus-within:border-neutral-400 dark:group-focus-within:border-neutral-600 group-hover:shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:group-hover:shadow-[0_0_12px_rgba(255,255,255,0.1)] group-focus-within:shadow-[0_0_12px_rgba(255,255,255,0.1)]" />
      )}
      
      {/* Hoverable Card Container - Enhanced Lift & Soft Glow */}
      <div className="flex gap-8 relative p-6 -ml-6 rounded-2xl transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-focus-within:-translate-y-1.5 hover:bg-white dark:hover:bg-neutral-900/35 group-focus-within:bg-white dark:group-focus-within:bg-neutral-900/35 bg-white/50 dark:bg-neutral-900/15 backdrop-blur-md shadow-sm hover:shadow-xl hover:shadow-neutral-200/30 dark:hover:shadow-[0_10px_45px_-10px_rgba(255,255,255,0.07)] group-focus-within:shadow-xl dark:group-focus-within:shadow-[0_10px_45px_-10px_rgba(255,255,255,0.07)] border border-neutral-300 dark:border-white/10 hover:border-neutral-400 dark:hover:border-white/20 group-focus-within:border-neutral-400 dark:group-focus-within:border-white/20">
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100 bg-[radial-gradient(circle_at_15%_0%,rgba(115,115,115,0.15),transparent_42%)] dark:bg-[radial-gradient(circle_at_15%_0%,rgba(255,255,255,0.14),transparent_42%)]" />
        
        {/* Visual Asset (Image or Icon) */}
        <div className="shrink-0 z-10">
          <div className="w-[116px] h-[116px] rounded-2xl bg-neutral-100 dark:bg-neutral-900/85 border border-neutral-300 dark:border-neutral-700 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-neutral-400 dark:group-hover:border-white/30 dark:group-hover:shadow-[0_0_24px_rgba(255,255,255,0.12)] group-focus-within:border-neutral-400 dark:group-focus-within:border-white/30 shadow-sm relative isolate group-hover:scale-[1.03] group-focus-within:scale-[1.03] p-1">
            {item.image && !imageError ? (
               <div className="absolute inset-0">
                  {/* eslint-disable-next-line */}
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-center rounded-xl transition-transform duration-700 ease-out group-hover:scale-105 group-focus-within:scale-105" 
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/5 dark:group-hover:bg-white/10 transition-colors duration-500 pointer-events-none mix-blend-overlay" />
               </div>
            ) : item.logo ? (
              <div className="text-neutral-700 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white group-focus-within:text-black dark:group-focus-within:text-white transition-colors transform duration-300 group-hover:scale-110 group-focus-within:scale-110">
                 <Icon name={item.logo} size={36} />
              </div>
            ) : (
              <div className="text-neutral-400 dark:text-neutral-600">
                <Icon name="Code" size={32} />
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 pt-1">
          <h3 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white mb-2 group-hover:text-black dark:group-hover:text-white group-focus-within:text-black dark:group-focus-within:text-white transition-colors">{item.title}</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 group-focus-within:text-neutral-700 dark:group-focus-within:text-neutral-300 text-pretty">
            {item.description}
          </p>

          {/* Technologies Used Badges */}
          {item.technologies && (
            <div className="flex flex-wrap gap-2 mb-5">
              {item.technologies.map((tech, idx) => (
                <span 
                  key={idx} 
                  className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-500 group-hover:border-neutral-400 dark:group-hover:border-neutral-600 transition-all duration-300 group-hover:-translate-y-0.5"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          
          <div className="flex gap-3 relative z-20">
            {item.linkLive && (
              <a 
                href={item.linkLive} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 text-xs font-medium hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-neutral-800 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:border-white focus-visible:bg-white dark:focus-visible:bg-neutral-800"
              >
                <Icon name="ExternalLink" size={13} />
                View Live
              </a>
            )}
            {item.linkSource && (
              <a 
                href={item.linkSource} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 text-xs font-medium hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-neutral-800 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:border-white focus-visible:bg-white dark:focus-visible:bg-neutral-800"
              >
                <Icon name="Code" size={13} />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;