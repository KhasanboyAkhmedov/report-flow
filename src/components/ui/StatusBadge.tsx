import React from 'react';

type Status = 'Active' | 'Syncing' | 'Paused' | 'Coming Soon';

interface StatusBadgeProps {
  status: Status;
}

const config: Record<Status, { dot: string; text: string; bg: string }> = {
  'Active':      { dot: 'bg-sky-400',   text: 'text-sky-400',   bg: 'bg-sky-500/10'   },
  'Syncing':     { dot: 'bg-amber-400', text: 'text-amber-400', bg: 'bg-amber-500/10' },
  'Paused':      { dot: 'bg-slate-500', text: 'text-slate-400', bg: 'bg-slate-800'    },
  'Coming Soon': { dot: 'bg-sky-400',   text: 'text-sky-400',   bg: 'bg-sky-500/20'   },
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const c = config[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${c.bg} ${c.text}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
      {status}
    </span>
  );
};

export default StatusBadge;
