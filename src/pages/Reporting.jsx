import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Reporting = () => {
  const { reportData, selectedMetrics } = useSelector((s) => s.dashboard);
  const [filter, setFilter] = useState('All');
  const accounts = ['All', ...new Set(reportData.map(r => r.account))];
  const filtered = filter === 'All' ? reportData : reportData.filter(r => r.account === filter);

  const totalSpend = filtered.reduce((s, r) => s + r.spend, 0);
  const totalConversions = filtered.reduce((s, r) => s + r.conversions, 0);
  const avgCPA = totalConversions ? totalSpend / totalConversions : 0;
  const avgROAS = filtered.length ? filtered.reduce((s, r) => s + r.roas, 0) / filtered.length : 0;

  return (
    <main className="flex-1 p-8 flex flex-col gap-8">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-h1 font-h1 text-on-surface mb-1">Reporting</h2>
          <p className="text-body-lg text-on-surface-variant">Analyze your campaign performance data.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-1 bg-surface-container-low rounded-lg p-1 border border-outline-variant">
            {accounts.map(acc => (
              <button
                key={acc}
                onClick={() => setFilter(acc)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${filter === acc ? 'bg-white shadow-sm text-secondary' : 'text-on-surface-variant hover:text-on-surface'}`}
              >
                {acc}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-sm text-on-surface hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined text-[18px]">download</span>
            Export
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Spend', value: `$${totalSpend.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, icon: 'payments', trend: '+12%', up: true },
          { label: 'Total Conversions', value: totalConversions, icon: 'conversion_path', trend: '+8%', up: true },
          { label: 'Avg. CPA', value: `$${avgCPA.toFixed(2)}`, icon: 'price_check', trend: '-5%', up: false },
          { label: 'Avg. ROAS', value: `${avgROAS.toFixed(1)}x`, icon: 'trending_up', trend: '+3%', up: true },
        ].map(({ label, value, icon, trend, up }) => (
          <div key={label} className="bg-surface-container-lowest rounded-xl p-6 shadow-level-1">
            <div className="flex items-center justify-between mb-4">
              <span className="material-symbols-outlined text-secondary text-[22px]">{icon}</span>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${up ? 'bg-tertiary-fixed/40 text-on-tertiary-container' : 'bg-error-container text-on-error-container'}`}>{trend}</span>
            </div>
            <div className="text-2xl font-bold text-on-surface font-['Manrope'] mb-1">{value}</div>
            <div className="text-body-sm text-on-surface-variant">{label}</div>
          </div>
        ))}
      </div>

      {/* Data Table */}
      <div className="bg-surface-container-lowest rounded-xl shadow-level-1 overflow-hidden">
        <div className="px-6 py-4 border-b border-surface-variant flex items-center justify-between">
          <h3 className="text-h3 font-h3 text-on-surface">Report Data</h3>
          <span className="text-body-sm text-on-surface-variant">{filtered.length} rows</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant">
                <th className="p-3 font-label-caps text-label-caps text-on-surface-variant border-r border-outline-variant w-8 text-center bg-surface-variant"></th>
                <th className="p-3 font-label-caps text-label-caps text-on-surface-variant border-r border-outline-variant">Date</th>
                <th className="p-3 font-label-caps text-label-caps text-on-surface-variant border-r border-outline-variant">Account Name</th>
                <th className="p-3 font-label-caps text-label-caps text-on-surface-variant border-r border-outline-variant text-right">Total Spend</th>
                <th className="p-3 font-label-caps text-label-caps text-on-surface-variant border-r border-outline-variant text-right">Conversions</th>
                <th className="p-3 font-label-caps text-label-caps text-on-surface-variant border-r border-outline-variant text-right">ROAS</th>
                <th className="p-3 font-label-caps text-label-caps text-on-surface-variant text-right">CPA</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, idx) => (
                <tr key={idx} className="border-b border-outline-variant/50 hover:bg-surface-container-low/50 transition-colors">
                  <td className="p-2 border-r border-outline-variant font-numeric-data text-[12px] text-center text-on-surface-variant bg-surface-container-lowest">{idx + 1}</td>
                  <td className="p-2 border-r border-outline-variant font-numeric-data text-sm text-on-surface">{row.date}</td>
                  <td className="p-2 border-r border-outline-variant font-body-sm text-on-surface">{row.account}</td>
                  <td className="p-2 border-r border-outline-variant font-numeric-data text-sm text-right text-on-surface">${row.spend.toFixed(2)}</td>
                  <td className="p-2 border-r border-outline-variant font-numeric-data text-sm text-right text-on-surface">{row.conversions}</td>
                  <td className="p-2 border-r border-outline-variant font-numeric-data text-sm text-right text-on-surface">{row.roas}x</td>
                  <td className={`p-2 font-numeric-data text-sm text-right ${row.cpa > 15 ? 'text-error bg-error-container/30' : 'text-on-tertiary-container bg-tertiary-fixed-dim/10'}`}>
                    ${row.cpa.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Reporting;
