import React from 'react';
import { useSelector } from 'react-redux';

const Previews = () => {
  const { selectedMetrics, scheduledTime } = useSelector((state) => state.dashboard);

  return (
    <div className="xl:col-span-5 flex flex-col gap-8 h-full">
      {/* Mobile Preview */}
      <div className="bg-surface-container-lowest rounded-xl p-md shadow-level-1 relative overflow-hidden flex-1 flex flex-col">
        <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-[16px]">smartphone</span>
          Telegram Preview
        </h3>
        <div className="flex-1 bg-surface-container-highest rounded-[2rem] border-8 border-surface-variant p-4 flex flex-col justify-end relative shadow-inner overflow-hidden min-h-[300px]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-50 dark:from-slate-800 dark:to-slate-900 opacity-50"></div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl rounded-bl-sm p-4 shadow-sm relative z-10 w-11/12">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center text-[10px] font-bold">AP</div>
              <span className="font-body-sm font-semibold text-on-surface">AdPulse Bot</span>
            </div>
            <p className="font-body-sm text-on-surface whitespace-pre-line">
              <strong>Daily Ad Report:</strong> Account_USA
              {"\n\n"}
              {selectedMetrics.map(m => `${m}: ${m === 'Spend' ? '$450' : m === 'ROAS' ? '4.2x' : '42'}`).join("\n")}
            </p>
            <span className="text-[10px] text-on-surface-variant absolute bottom-2 right-3">{scheduledTime.split(' ')[0]}</span>
          </div>
        </div>
      </div>

      {/* Spreadsheet Preview */}
      <div className="bg-surface-container-lowest rounded-xl p-md shadow-level-1 overflow-hidden flex-1 flex flex-col">
        <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-[16px]">table_chart</span>
          Sheets Output
        </h3>
        <div className="border border-outline-variant rounded-lg overflow-x-auto flex-1 bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant">
                <th className="p-3 font-label-caps text-label-caps text-on-surface border-r border-outline-variant w-8 text-center text-on-surface-variant bg-surface-variant"></th>
                <th className="p-3 font-label-caps text-label-caps text-on-surface border-r border-outline-variant">Date</th>
                <th className="p-3 font-label-caps text-label-caps text-on-surface border-r border-outline-variant">Account Name</th>
                <th className="p-3 font-label-caps text-label-caps text-on-surface border-r border-outline-variant text-right">Total Spend</th>
                <th className="p-3 font-label-caps text-label-caps text-on-surface border-r border-outline-variant text-right">Conversions</th>
                <th className="p-3 font-label-caps text-label-caps text-on-surface text-right">CPA</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-outline-variant/50 hover:bg-surface-container-low/50">
                <td className="p-2 border-r border-outline-variant font-numeric-data text-[12px] text-center text-on-surface-variant bg-surface-container-lowest">1</td>
                <td className="p-2 border-r border-outline-variant font-numeric-data text-sm text-on-surface">2023-10-27</td>
                <td className="p-2 border-r border-outline-variant font-body-sm text-on-surface">Account_USA</td>
                <td className="p-2 border-r border-outline-variant font-numeric-data text-sm text-right text-on-surface">$450.00</td>
                <td className="p-2 border-r border-outline-variant font-numeric-data text-sm text-right text-on-surface">42</td>
                <td className="p-2 font-numeric-data text-sm text-right text-on-tertiary-container bg-tertiary-fixed-dim/10">$10.71</td>
              </tr>
              <tr className="border-b border-outline-variant/50 hover:bg-surface-container-low/50">
                <td className="p-2 border-r border-outline-variant font-numeric-data text-[12px] text-center text-on-surface-variant bg-surface-container-lowest">2</td>
                <td className="p-2 border-r border-outline-variant font-numeric-data text-sm text-on-surface">2023-10-27</td>
                <td className="p-2 border-r border-outline-variant font-body-sm text-on-surface">Account_EU</td>
                <td className="p-2 border-r border-outline-variant font-numeric-data text-sm text-right text-on-surface">$320.50</td>
                <td className="p-2 border-r border-outline-variant font-numeric-data text-sm text-right text-on-surface">18</td>
                <td className="p-2 font-numeric-data text-sm text-right text-error bg-error-container/30">$17.80</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Previews;
