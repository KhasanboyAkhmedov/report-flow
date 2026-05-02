import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMetric } from '../store/dashboardSlice';

const metrics = ['Spend', 'Impressions', 'ROAS', 'CPA', 'Leads', 'CTR'];

const DataSelector = () => {
  const dispatch = useDispatch();
  const selectedMetrics = useSelector((state) => state.dashboard.selectedMetrics);

  return (
    <div className="bg-surface-container-lowest rounded-xl p-md shadow-level-1">
      <h3 className="font-h3 text-h3 text-on-surface mb-6 border-b border-surface-variant pb-4">Data Selector</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {metrics.map((metric) => {
          const isSelected = selectedMetrics.includes(metric);
          return (
            <label 
              key={metric}
              className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                isSelected ? 'border-secondary bg-secondary-fixed/30' : 'border-outline-variant hover:bg-surface-container-low'
              }`}
            >
              <input 
                type="checkbox" 
                className="w-5 h-5 rounded border-outline-variant text-secondary focus:ring-secondary"
                checked={isSelected}
                onChange={() => dispatch(toggleMetric(metric))}
              />
              <span className="font-body-md text-on-surface">{metric}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default DataSelector;
