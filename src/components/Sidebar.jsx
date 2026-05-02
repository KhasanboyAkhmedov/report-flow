import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setShowNewCampaignModal } from '../store/dashboardSlice';

const navItems = [
  { to: '/', icon: 'dashboard', label: 'Dashboard', end: true },
  { to: '/connections', icon: 'hub', label: 'Connections' },
  { to: '/reporting', icon: 'analytics', label: 'Reporting' },
  { to: '/alerts', icon: 'notifications', label: 'Alerts' },
  { to: '/settings', icon: 'settings', label: 'Settings' },
];

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="w-[260px] h-screen fixed left-0 top-0 border-r border-slate-800 bg-slate-900 text-blue-500 font-['Manrope'] text-sm font-medium tracking-tight shadow-2xl flex flex-col py-6 z-50">
      {/* Logo */}
      <div className="px-6 mb-8 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary pulse-animation">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
        </div>
        <div>
          <h1 className="text-xl font-bold text-white tracking-tighter">AdPulse</h1>
          <p className="text-slate-400 text-xs">Senior Targetologist</p>
        </div>
      </div>

      {/* New Campaign Button */}
      <div className="px-6 mb-8">
        <button
          id="btn-new-campaign"
          onClick={() => dispatch(setShowNewCampaignModal(true))}
          className="w-full py-3 px-4 btn-primary-gradient text-white rounded-lg flex items-center justify-center gap-2 font-semibold shadow-level-1 transition-transform scale-100 active:scale-95 duration-150 ease-in-out hover:opacity-90"
        >
          <span className="material-symbols-outlined text-[20px]">add</span>
          New Campaign
        </button>
      </div>

      {/* Navigation */}
      <ul className="flex-1 space-y-1">
        {navItems.map(({ to, icon, label, end }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                `py-3 px-6 flex items-center gap-3 transition-all duration-200 ${
                  isActive
                    ? 'bg-white/10 text-white border-l-4 border-blue-500'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`
              }
            >
              <span className="material-symbols-outlined text-[20px]">{icon}</span>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Bottom Links */}
      <div className="mt-auto border-t border-slate-800/50 pt-4">
        <ul className="space-y-1">
          <li>
            <NavLink
              to="/support"
              className={({ isActive }) =>
                `py-3 px-6 flex items-center gap-3 transition-all duration-200 ${
                  isActive
                    ? 'bg-white/10 text-white border-l-4 border-blue-500'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`
              }
            >
              <span className="material-symbols-outlined text-[20px]">help</span>
              Support
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signout"
              className={({ isActive }) =>
                `py-3 px-6 flex items-center gap-3 transition-all duration-200 ${
                  isActive
                    ? 'bg-white/10 text-white border-l-4 border-blue-500'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`
              }
            >
              <span className="material-symbols-outlined text-[20px]">logout</span>
              Sign Out
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
