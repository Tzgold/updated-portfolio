import React from 'react';
import { TimelineItem } from '../types';

interface Props {
  item: TimelineItem;
  isLast?: boolean;
}

const TimelineCard: React.FC<Props> = ({ item, isLast }) => {
  return (
    <div className="relative pl-8 group">
       {/* Timeline Line - Enhanced Glow (Emanating from line) */}
       {!isLast && (
        <div className="absolute left-[15px] top-[40px] bottom-[-32px] w-px border-l border-dashed border-neutral-300 dark:border-neutral-700 group-hover:border-solid group-hover:border-neutral-400 dark:group-hover:border-neutral-500 group-focus-within:border-solid group-focus-within:border-neutral-400 dark:group-focus-within:border-neutral-500 transition-all duration-500 group-hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:group-hover:shadow-[0_0_15px_1px_rgba(255,255,255,0.25)] group-focus-within:shadow-[0_0_15px_1px_rgba(255,255,255,0.25)]" />
      )}
      
      {/* Top Anchor Line to connect to Date Pill - Enhanced Glow */}
      <div className="absolute left-[15px] top-4 h-[26px] w-px border-l border-dashed border-neutral-300 dark:border-neutral-700 group-hover:border-solid group-hover:border-neutral-400 dark:group-hover:border-neutral-500 group-focus-within:border-solid group-focus-within:border-neutral-400 dark:group-focus-within:border-neutral-500 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:group-hover:shadow-[0_0_15px_1px_rgba(255,255,255,0.25)] group-focus-within:shadow-[0_0_15px_1px_rgba(255,255,255,0.25)]" />
      
      {/* Date Pill */}
      <div className="mb-4 relative z-10">
        <span className="inline-block px-3 py-1 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#050505] text-xs text-neutral-500 dark:text-neutral-500 font-medium group-hover:border-neutral-400 dark:group-hover:border-neutral-500 group-focus-within:border-neutral-400 dark:group-focus-within:border-neutral-500 transition-colors group-hover:text-black dark:group-hover:text-white group-focus-within:text-black dark:group-focus-within:text-white group-hover:shadow-sm">
          {item.date}
        </span>
      </div>

      {/* Content Block Wrapper - Enhanced Border & Glass Effect */}
      {/* Added tabIndex to allow keyboard focus, and focus styles matching hover */}
      <div 
        tabIndex={0}
        className="ml-2 mb-12 p-5 -m-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] focus:scale-[1.02] hover:bg-white dark:hover:bg-neutral-900/40 focus:bg-white dark:focus:bg-neutral-900/40 bg-white/40 dark:bg-neutral-900/10 backdrop-blur-sm hover:shadow-xl hover:shadow-neutral-200/20 focus:shadow-xl dark:shadow-[0_0_15px_rgba(255,255,255,0.02)] dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.06)] dark:focus:shadow-[0_0_25px_rgba(255,255,255,0.06)] border border-neutral-300 dark:border-white/10 hover:border-neutral-400 dark:hover:border-white/30 focus:border-neutral-400 dark:focus:border-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 dark:focus-visible:ring-neutral-400"
      > 
        <div className="flex items-center gap-4 mb-2">
          {item.logo && (
             // eslint-disable-next-line
            <img src={item.logo} alt="logo" className="w-10 h-10 rounded-lg bg-white object-contain border border-neutral-300 dark:border-neutral-700 p-0.5" />
          )}
          <div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white leading-tight group-hover:text-black dark:group-hover:text-white group-focus-within:text-black dark:group-focus-within:text-white transition-colors">{item.title}</h3>
            {item.subtitle && (
              <p className="text-neutral-500 dark:text-neutral-400 font-medium text-sm group-hover:text-neutral-800 dark:group-hover:text-neutral-200 group-focus-within:text-neutral-800 dark:group-focus-within:text-neutral-200 transition-colors mt-0.5">{item.subtitle}</p>
            )}
          </div>
        </div>

        <div className="mt-3 text-neutral-600 dark:text-neutral-400 text-[15px] leading-relaxed space-y-2 group-hover:text-neutral-800 dark:group-hover:text-neutral-300 group-focus-within:text-neutral-800 dark:group-focus-within:text-neutral-300 transition-colors text-pretty">
          <p>{item.description}</p>
          
          {item.bullets && (
            <ul className="list-none space-y-1.5 mt-3">
              {item.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="mt-2 w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-600 shrink-0 group-hover:bg-neutral-500 dark:group-hover:bg-white group-focus-within:bg-neutral-500 dark:group-focus-within:bg-white transition-colors" />
                  <span className="text-sm">{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;