import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markAlertRead, markAllAlertsRead } from '../store/dashboardSlice';

const alertStyles = {
  warning: { bg: 'bg-yellow-50 border-yellow-200', icon: 'warning', iconColor: 'text-yellow-500' },
  info: { bg: 'bg-blue-50 border-blue-200', icon: 'info', iconColor: 'text-secondary' },
  success: { bg: 'bg-green-50 border-green-200', icon: 'check_circle', iconColor: 'text-on-tertiary-container' },
  error: { bg: 'bg-red-50 border-red-200', icon: 'error', iconColor: 'text-error' },
};

const Alerts = () => {
  const dispatch = useDispatch();
  const { alerts, alertsEnabled } = useSelector((s) => s.dashboard);
  const unread = alerts.filter(a => !a.read).length;

  return (
    <main className="flex-1 p-8 flex flex-col gap-8">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-h1 font-h1 text-on-surface mb-1">Alerts</h2>
          <p className="text-body-lg text-on-surface-variant">
            {unread > 0 ? `${unread} unread alert${unread > 1 ? 's' : ''}` : 'All alerts read'}
          </p>
        </div>
        <div className="flex gap-3">
          {unread > 0 && (
            <button
              id="btn-mark-all-read"
              onClick={() => dispatch(markAllAlertsRead())}
              className="px-4 py-2 border border-outline-variant rounded-lg text-sm font-medium text-on-surface hover:bg-surface-container-low transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">done_all</span>
              Mark all as read
            </button>
          )}
        </div>
      </div>

      {/* Status Banner */}
      <div className={`rounded-xl p-5 flex items-center justify-between border ${alertsEnabled ? 'bg-secondary-fixed/20 border-secondary/30' : 'bg-surface-container-low border-outline-variant'}`}>
        <div className="flex items-center gap-3">
          <span className={`material-symbols-outlined text-[24px] ${alertsEnabled ? 'text-secondary' : 'text-on-surface-variant'}`} style={{ fontVariationSettings: "'FILL' 1" }}>
            {alertsEnabled ? 'notifications_active' : 'notifications_off'}
          </span>
          <div>
            <p className="font-semibold text-on-surface">Alert Notifications</p>
            <p className="text-body-sm text-on-surface-variant">
              {alertsEnabled ? 'Alerts are active — CPA > $20 threshold enabled' : 'Alerts are currently disabled'}
            </p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${alertsEnabled ? 'bg-secondary text-white' : 'bg-surface-variant text-on-surface-variant'}`}>
          {alertsEnabled ? 'ON' : 'OFF'}
        </span>
      </div>

      {/* Alerts List */}
      <div className="flex flex-col gap-3">
        {alerts.map(alert => {
          const style = alertStyles[alert.type];
          return (
            <div
              key={alert.id}
              className={`rounded-xl border p-5 flex items-start gap-4 transition-all ${style.bg} ${alert.read ? 'opacity-70' : ''}`}
            >
              <span className={`material-symbols-outlined text-[24px] mt-0.5 ${style.iconColor}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                {style.icon}
              </span>
              <div className="flex-1">
                <p className={`text-on-surface text-sm ${!alert.read ? 'font-semibold' : 'font-normal'}`}>{alert.message}</p>
                <p className="text-on-surface-variant text-xs mt-1">{alert.time}</p>
              </div>
              {!alert.read && (
                <button
                  onClick={() => dispatch(markAlertRead(alert.id))}
                  className="text-xs text-secondary hover:underline font-medium flex-shrink-0 mt-0.5"
                >
                  Mark read
                </button>
              )}
              {alert.read && (
                <span className="text-xs text-on-surface-variant flex-shrink-0 mt-0.5">Read</span>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Alerts;
