import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSettings } from '../store/dashboardSlice';

const Settings = () => {
  const dispatch = useDispatch();
  const settings = useSelector((s) => s.dashboard.settings);
  const [form, setForm] = useState({ ...settings });
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(updateSettings(form));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <main className="flex-1 p-8 flex flex-col gap-8 max-w-3xl">
      <div>
        <h2 className="text-h1 font-h1 text-on-surface mb-1">Settings</h2>
        <p className="text-body-lg text-on-surface-variant">Manage your profile and preferences.</p>
      </div>

      {saved && (
        <div className="bg-tertiary-fixed/30 border border-tertiary-fixed-dim rounded-xl p-4 flex items-center gap-3">
          <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          <span className="text-on-surface font-medium">Settings saved successfully!</span>
        </div>
      )}

      <form onSubmit={handleSave} className="flex flex-col gap-6">
        {/* Profile Section */}
        <div className="bg-surface-container-lowest rounded-xl shadow-level-1 overflow-hidden">
          <div className="px-6 py-4 border-b border-surface-variant flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary">person</span>
            <h3 className="text-h3 font-h3 text-on-surface">Profile</h3>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">Full Name</label>
              <input
                type="text"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full border border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary bg-surface"
              />
            </div>
            <div>
              <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">Email Address</label>
              <input
                type="email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full border border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary bg-surface"
              />
            </div>
            <div>
              <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">Timezone</label>
              <select
                value={form.timezone}
                onChange={e => setForm({ ...form, timezone: e.target.value })}
                className="w-full border border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-secondary bg-surface"
              >
                <option>UTC-5 (EST)</option>
                <option>UTC+0 (GMT)</option>
                <option>UTC+1 (CET)</option>
                <option>UTC+5:30 (IST)</option>
                <option>UTC+8 (CST)</option>
              </select>
            </div>
            <div>
              <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">Language</label>
              <select
                value={form.language}
                onChange={e => setForm({ ...form, language: e.target.value })}
                className="w-full border border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-secondary bg-surface"
              >
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="bg-surface-container-lowest rounded-xl shadow-level-1 overflow-hidden">
          <div className="px-6 py-4 border-b border-surface-variant flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary">tune</span>
            <h3 className="text-h3 font-h3 text-on-surface">Preferences</h3>
          </div>
          <div className="p-6 flex flex-col gap-5">
            {[
              { key: 'notifications', label: 'Email Notifications', desc: 'Receive daily report summaries via email' },
              { key: 'twoFactor', label: 'Two-Factor Authentication', desc: 'Add an extra layer of security to your account' },
            ].map(({ key, label, desc }) => (
              <div key={key} className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg border border-outline-variant/50">
                <div>
                  <p className="font-semibold text-on-surface text-sm">{label}</p>
                  <p className="text-body-sm text-on-surface-variant mt-0.5">{desc}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={form[key]}
                    onChange={() => setForm({ ...form, [key]: !form[key] })}
                  />
                  <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <div className="flex gap-4">
          <button
            type="submit"
            id="btn-save-settings"
            className="btn-primary-gradient text-white px-8 py-3 rounded-lg font-semibold shadow-level-1 hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">save</span>
            Save Changes
          </button>
          <button
            type="button"
            onClick={() => setForm({ ...settings })}
            className="px-8 py-3 border border-outline-variant text-on-surface rounded-lg font-semibold hover:bg-surface-container-low transition-colors"
          >
            Reset
          </button>
        </div>
      </form>
    </main>
  );
};

export default Settings;
