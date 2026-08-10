import React from 'react';
import { Info } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface InfoTooltipProps {
  title: string;
  description: string;
  className?: string;
}

export const InfoTooltip: React.FC<InfoTooltipProps> = ({
  title,
  description,
  className = '',
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label={`Info: ${title}`}
          className={`inline-flex items-center justify-center text-zinc-500 hover:text-zinc-200 transition-colors cursor-pointer p-0.5 rounded focus:outline-none focus:ring-1 focus:ring-zinc-600 ${className}`}
        >
          <Info className="w-3.5 h-3.5" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="center"
        sideOffset={6}
        className="w-72 bg-zinc-950/95 border border-zinc-800 p-3 shadow-xl backdrop-blur-md rounded-md z-50 text-left"
      >
        <div className="text-xs font-semibold text-zinc-100 mb-1">{title}</div>
        <div className="text-[11px] text-zinc-400 leading-relaxed font-sans">{description}</div>
      </PopoverContent>
    </Popover>
  );
};
