import React from 'react';
import ConnectionCard from '../components/ConnectionCard';
import DataSelector from '../components/DataSelector';
import Scheduler from '../components/Scheduler';
import Previews from '../components/Previews';

const Dashboard = () => {
  return (
    <main className="flex-1 p-8 grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
      {/* Left Column */}
      <div className="xl:col-span-7 flex flex-col gap-8">
        <div>
          <h2 className="text-h1 font-h1 text-on-surface mb-2">Welcome back, Alex! Let's set up your data flow.</h2>
          <p className="text-body-lg text-on-surface-variant">Configure your active connections and reporting metrics.</p>
        </div>
        <ConnectionCard />
        <DataSelector />
        <Scheduler />
      </div>
      {/* Right Column */}
      <Previews />
    </main>
  );
};

export default Dashboard;
