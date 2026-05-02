import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
  const navigate = useNavigate();

  return (
    <main className="flex-1 p-8 flex items-center justify-center">
      <div className="bg-surface-container-lowest rounded-2xl shadow-level-1 p-12 flex flex-col items-center gap-6 max-w-md text-center">
        <div className="w-20 h-20 rounded-full bg-error-container flex items-center justify-center">
          <span className="material-symbols-outlined text-error text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>logout</span>
        </div>
        <div>
          <h2 className="text-h2 font-h2 text-on-surface mb-2">Sign Out</h2>
          <p className="text-body-md text-on-surface-variant">Are you sure you want to sign out of AdPulse? Your settings and data will be saved.</p>
        </div>
        <div className="flex gap-4 w-full">
          <button
            onClick={() => navigate('/')}
            className="flex-1 py-3 border border-outline-variant text-on-surface rounded-lg font-semibold hover:bg-surface-container-low transition-colors"
          >
            Cancel
          </button>
          <button
            id="btn-confirm-signout"
            onClick={() => navigate('/')}
            className="flex-1 py-3 bg-error text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Sign Out
          </button>
        </div>
      </div>
    </main>
  );
};

export default SignOut;
