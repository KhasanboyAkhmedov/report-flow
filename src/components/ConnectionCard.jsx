import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setShowAddAccountModal } from '../store/dashboardSlice';

const ConnectionCard = () => {
  const dispatch = useDispatch();
  const { accountsCount } = useSelector((state) => state.dashboard);

  return (
    <div className="bg-surface-container-lowest rounded-xl p-md shadow-level-1 flex flex-col gap-6">
      <div className="flex items-center justify-between border-b border-surface-variant pb-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-[#1877F2]/10 flex items-center justify-center text-[#1877F2]">
            <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path>
            </svg>
          </div>
          <div>
            <h3 className="font-h3 text-h3 text-on-surface">Meta Ads</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
              <span className="font-label-caps text-label-caps text-on-tertiary-container">Connected</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <span className="font-numeric-data text-numeric-data text-on-surface block text-2xl font-bold">{accountsCount}</span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">Ad Accounts Active</span>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          id="btn-add-account"
          onClick={() => dispatch(setShowAddAccountModal(true))}
          className="px-6 py-2 border border-outline-variant text-on-surface rounded-lg font-body-md hover:bg-surface-container-low transition-colors flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          Add New Account
        </button>
      </div>
    </div>
  );
};

export default ConnectionCard;
