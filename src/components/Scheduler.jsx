import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setScheduledTime, toggleAlerts } from '../store/dashboardSlice';

const Scheduler = () => {
  const dispatch = useDispatch();
  const { scheduledTime, alertsEnabled } = useSelector((state) => state.dashboard);

  const times = ['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM'];

  return (
    <div className="bg-surface-container-lowest rounded-xl p-md shadow-level-1">
      <h3 className="font-h3 text-h3 text-on-surface mb-6 border-b border-surface-variant pb-4">Reporting Schedule & Alerts</h3>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">Daily Report Time</label>
          <div className="relative">
            <select 
              className="w-full appearance-none bg-surface border border-outline-variant rounded-lg px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
              value={scheduledTime}
              onChange={(e) => dispatch(setScheduledTime(e.target.value))}
            >
              {times.map(time => <option key={time}>{time}</option>)}
            </select>
            <span className="material-symbols-outlined absolute right-3 top-3 text-on-surface-variant pointer-events-none">expand_more</span>
          </div>
        </div>
        <div className="flex-1 bg-surface-container-low p-4 rounded-lg flex items-center justify-between border border-outline-variant/50">
          <div>
            <span className="block font-body-md font-semibold text-on-surface">Trigger Alerts</span>
            <span className="block font-body-sm text-on-surface-variant mt-1">CPA &gt; $20 {alertsEnabled ? 'enabled' : 'disabled'}</span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer" 
              checked={alertsEnabled}
              onChange={() => dispatch(toggleAlerts())}
            />
            <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Scheduler;
