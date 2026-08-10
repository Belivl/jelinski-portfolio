import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InfoTooltip } from './InfoTooltip';
import { Switch } from '@/components/ui/switch';

interface CollapsibleSectionProps {
  id: string;
  title: string;
  badge?: string;
  icon?: React.ReactNode;
  infoTitle?: string;
  infoDescription?: string;
  enabled?: boolean;
  onToggleEnabled?: (enabled: boolean) => void;
  defaultOpen?: boolean;
  children: React.ReactNode;
  actionButton?: React.ReactNode;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  badge,
  icon,
  infoTitle,
  infoDescription,
  enabled,
  onToggleEnabled,
  defaultOpen = false,
  children,
  actionButton,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-zinc-800/80 bg-zinc-950/40">
      <div
        className="flex items-center justify-between px-4 py-3 cursor-pointer select-none hover:bg-zinc-900/40 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <motion.div
            animate={{ rotate: isOpen ? 0 : -90 }}
            transition={{ duration: 0.15 }}
            className="text-zinc-500 flex-shrink-0"
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>

          {icon && <span className="text-zinc-400 flex-shrink-0">{icon}</span>}

          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300 truncate">
            {title}
          </span>

          {badge && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
              {badge}
            </span>
          )}

          {infoTitle && infoDescription && (
            <div onClick={(e) => e.stopPropagation()}>
              <InfoTooltip title={infoTitle} description={infoDescription} />
            </div>
          )}
        </div>

        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
          {actionButton}
          {onToggleEnabled !== undefined && enabled !== undefined && (
            <Switch
              checked={enabled}
              onCheckedChange={onToggleEnabled}
              className="data-[state=checked]:bg-zinc-100 data-[state=unchecked]:bg-zinc-800"
            />
          )}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-1 space-y-3.5">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
