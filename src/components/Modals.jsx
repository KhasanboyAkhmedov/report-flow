import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setShowNewCampaignModal,
  setShowAddAccountModal,
  addCampaign,
  addConnection,
} from '../store/dashboardSlice';

export const NewCampaignModal = () => {
  const dispatch = useDispatch();
  const show = useSelector((s) => s.dashboard.showNewCampaignModal);
  const [form, setForm] = useState({ name: '', platform: 'Meta', budget: '', objective: 'Conversions' });

  if (!show) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCampaign({ ...form, budget: Number(form.budget) }));
    dispatch(setShowNewCampaignModal(false));
    setForm({ name: '', platform: 'Meta', budget: '', objective: 'Conversions' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => dispatch(setShowNewCampaignModal(false))}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-8 relative" onClick={e => e.stopPropagation()}>
        <button
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors"
          onClick={() => dispatch(setShowNewCampaignModal(false))}
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>campaign</span>
          </div>
          <div>
            <h2 className="text-h2 font-h2 text-on-surface">New Campaign</h2>
            <p className="text-body-sm text-on-surface-variant">Set up a new ad campaign</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block font-label-caps text-label-caps text-on-surface-variant mb-1">Campaign Name *</label>
            <input
              required
              type="text"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              placeholder="e.g. USA_Summer_Sale"
              className="w-full border border-outline-variant rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
            />
          </div>
          <div>
            <label className="block font-label-caps text-label-caps text-on-surface-variant mb-1">Platform</label>
            <select
              value={form.platform}
              onChange={e => setForm({ ...form, platform: e.target.value })}
              className="w-full border border-outline-variant rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-secondary"
            >
              <option>Meta</option>
              <option>Google</option>
              <option>TikTok</option>
            </select>
          </div>
          <div>
            <label className="block font-label-caps text-label-caps text-on-surface-variant mb-1">Campaign Objective</label>
            <select
              value={form.objective}
              onChange={e => setForm({ ...form, objective: e.target.value })}
              className="w-full border border-outline-variant rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-secondary"
            >
              <option>Conversions</option>
              <option>Traffic</option>
              <option>Brand Awareness</option>
              <option>Lead Generation</option>
            </select>
          </div>
          <div>
            <label className="block font-label-caps text-label-caps text-on-surface-variant mb-1">Daily Budget ($) *</label>
            <input
              required
              type="number"
              min="1"
              value={form.budget}
              onChange={e => setForm({ ...form, budget: e.target.value })}
              placeholder="e.g. 500"
              className="w-full border border-outline-variant rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
            />
          </div>
          <div className="flex gap-3 mt-2">
            <button
              type="button"
              onClick={() => dispatch(setShowNewCampaignModal(false))}
              className="flex-1 py-3 border border-outline-variant text-on-surface rounded-lg font-semibold hover:bg-surface-container-low transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3 btn-primary-gradient text-white rounded-lg font-semibold shadow-level-1 transition-opacity hover:opacity-90"
            >
              Create Campaign
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const AddAccountModal = () => {
  const dispatch = useDispatch();
  const show = useSelector((s) => s.dashboard.showAddAccountModal);
  const [form, setForm] = useState({ name: '', platform: 'Meta' });

  if (!show) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addConnection({ name: form.name, platform: form.platform }));
    dispatch(setShowAddAccountModal(false));
    setForm({ name: '', platform: 'Meta' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => dispatch(setShowAddAccountModal(false))}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-8 relative" onClick={e => e.stopPropagation()}>
        <button
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors"
          onClick={() => dispatch(setShowAddAccountModal(false))}
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#1877F2]/10 flex items-center justify-center text-[#1877F2]">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd" />
            </svg>
          </div>
          <div>
            <h2 className="text-h2 font-h2 text-on-surface">Add Ad Account</h2>
            <p className="text-body-sm text-on-surface-variant">Connect a new advertising account</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block font-label-caps text-label-caps text-on-surface-variant mb-1">Account Name *</label>
            <input
              required
              type="text"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              placeholder="e.g. Account_NEW"
              className="w-full border border-outline-variant rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
            />
          </div>
          <div>
            <label className="block font-label-caps text-label-caps text-on-surface-variant mb-1">Platform</label>
            <select
              value={form.platform}
              onChange={e => setForm({ ...form, platform: e.target.value })}
              className="w-full border border-outline-variant rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-secondary"
            >
              <option>Meta</option>
              <option>Google</option>
              <option>TikTok</option>
            </select>
          </div>
          <div className="flex gap-3 mt-2">
            <button
              type="button"
              onClick={() => dispatch(setShowAddAccountModal(false))}
              className="flex-1 py-3 border border-outline-variant text-on-surface rounded-lg font-semibold hover:bg-surface-container-low transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3 btn-primary-gradient text-white rounded-lg font-semibold shadow-level-1 transition-opacity hover:opacity-90"
            >
              Connect Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
