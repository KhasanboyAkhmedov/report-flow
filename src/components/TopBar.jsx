import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchQuery } from '../store/dashboardSlice';

const TopBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { alerts } = useSelector((state) => state.dashboard);
  const unreadCount = alerts.filter(a => !a.read).length;
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  return (
    <header className="h-16 w-full sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm flex items-center justify-between px-8 font-['Manrope'] font-semibold">
      <div className="flex items-center">
        <div className="relative flex items-center">
          <span className="material-symbols-outlined absolute left-3 text-slate-400">search</span>
          <input
            id="topbar-search"
            className="pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary text-sm w-64 transition-colors"
            placeholder="Search campaigns, data..."
            type="text"
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          id="btn-refresh"
          onClick={handleRefresh}
          className={`text-slate-500 hover:bg-slate-100 rounded-lg p-2 transition-colors active:opacity-70 ${refreshing ? 'animate-spin' : ''}`}
          title="Refresh data"
        >
          <span className="material-symbols-outlined">refresh</span>
        </button>
        <button
          id="btn-notifications"
          onClick={() => navigate('/alerts')}
          className="text-slate-500 hover:bg-slate-100 rounded-lg p-2 transition-colors active:opacity-70 relative"
          title="View alerts"
        >
          <span className="material-symbols-outlined">notifications_active</span>
          {unreadCount > 0 && (
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full"></span>
          )}
        </button>
        <button
          id="btn-profile"
          onClick={() => navigate('/settings')}
          className="text-slate-500 hover:bg-slate-100 rounded-lg p-2 transition-colors active:opacity-70"
          title="Profile settings"
        >
          <span className="material-symbols-outlined">account_circle</span>
        </button>
      </div>
    </header>
  );
};

export default TopBar;
