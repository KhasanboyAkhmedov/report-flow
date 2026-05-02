import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setShowAddAccountModal } from '../store/dashboardSlice';

const statusColor = {
  Connected: 'bg-tertiary-fixed-dim text-on-tertiary-container',
  Warning: 'bg-yellow-100 text-yellow-700',
  Disconnected: 'bg-error-container text-on-error-container',
};

const Connections = () => {
  const dispatch = useDispatch();
  const { connections } = useSelector((s) => s.dashboard);

  return (
    <main className="flex-1 p-8 flex flex-col gap-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-h1 font-h1 text-on-surface mb-1">Connections</h2>
          <p className="text-body-lg text-on-surface-variant">Manage your connected advertising accounts.</p>
        </div>
        <button
          id="btn-add-account-connections"
          onClick={() => dispatch(setShowAddAccountModal(true))}
          className="btn-primary-gradient text-white px-6 py-3 rounded-lg flex items-center gap-2 font-semibold shadow-level-1 hover:opacity-90 transition-opacity"
        >
          <span className="material-symbols-outlined text-[20px]">add</span>
          Add Account
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Accounts', value: connections.length, icon: 'hub', color: 'text-secondary' },
          { label: 'Active', value: connections.filter(c => c.status === 'Connected').length, icon: 'check_circle', color: 'text-on-tertiary-container' },
          { label: 'Needs Attention', value: connections.filter(c => c.status === 'Warning').length, icon: 'warning', color: 'text-yellow-600' },
        ].map(({ label, value, icon, color }) => (
          <div key={label} className="bg-surface-container-lowest rounded-xl p-6 shadow-level-1 flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center ${color}`}>
              <span className="material-symbols-outlined text-[24px]">{icon}</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-on-surface font-['Manrope']">{value}</span>
              <span className="text-body-sm text-on-surface-variant">{label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Connections Table */}
      <div className="bg-surface-container-lowest rounded-xl shadow-level-1 overflow-hidden">
        <div className="px-6 py-4 border-b border-surface-variant flex items-center justify-between">
          <h3 className="text-h3 font-h3 text-on-surface">Ad Accounts</h3>
          <span className="text-body-sm text-on-surface-variant">{connections.length} accounts</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant">
                <th className="px-6 py-3 font-label-caps text-label-caps text-on-surface-variant">Account</th>
                <th className="px-6 py-3 font-label-caps text-label-caps text-on-surface-variant">Platform</th>
                <th className="px-6 py-3 font-label-caps text-label-caps text-on-surface-variant text-right">Total Spend</th>
                <th className="px-6 py-3 font-label-caps text-label-caps text-on-surface-variant text-center">Campaigns</th>
                <th className="px-6 py-3 font-label-caps text-label-caps text-on-surface-variant">Status</th>
                <th className="px-6 py-3 font-label-caps text-label-caps text-on-surface-variant text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {connections.map((conn, idx) => (
                <tr key={conn.id} className={`border-b border-outline-variant/50 hover:bg-surface-container-low/50 transition-colors ${idx % 2 === 0 ? '' : 'bg-surface-container-lowest'}`}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#1877F2]/10 flex items-center justify-center text-[#1877F2]">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-semibold text-on-surface text-sm">{conn.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-body-sm text-on-surface-variant">{conn.platform}</td>
                  <td className="px-6 py-4 font-numeric-data text-sm text-on-surface text-right">${conn.spend.toLocaleString()}</td>
                  <td className="px-6 py-4 text-center font-numeric-data text-sm text-on-surface">{conn.campaigns}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${statusColor[conn.status]}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                      {conn.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-secondary hover:underline text-sm font-medium transition-colors">Manage</button>
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

export default Connections;
