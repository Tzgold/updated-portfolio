import React from 'react';
import { Icon } from './Icons';
import { CreativityItem } from '../types';

interface Props {
  item: CreativityItem;
}

const CreativityCard: React.FC<Props> = ({ item }) => {
  return (
    <div className="h-full border border-neutral-300 dark:border-white/20 rounded-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-neutral-400 dark:hover:border-white/40 bg-white/50 dark:bg-neutral-900/20 backdrop-blur-md group hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral-200/20 dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
      <div className="mb-5 text-neutral-800 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white transition-colors duration-300 transform group-hover:scale-110">
        <Icon name={item.icon} size={24} />
      </div>
      <h3 className="text-base font-bold tracking-tight mb-3 text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors">{item.title}</h3>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
        {item.description}
      </p>
    </div>
  );
};

export default CreativityCard;