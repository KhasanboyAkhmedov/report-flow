import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import { NewCampaignModal, AddAccountModal } from './components/Modals';
import Dashboard from './pages/Dashboard';
import Connections from './pages/Connections';
import Reporting from './pages/Reporting';
import Alerts from './pages/Alerts';
import Settings from './pages/Settings';
import Support from './pages/Support';
import SignOut from './pages/SignOut';

function App() {
  return (
    <BrowserRouter>
      <div className="flex bg-background min-h-screen">
        <Sidebar />
        <div className="flex-1 ml-[260px] flex flex-col min-h-screen">
          <TopBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/reporting" element={<Reporting />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/support" element={<Support />} />
            <Route path="/signout" element={<SignOut />} />
          </Routes>
        </div>
        {/* Global Modals */}
        <NewCampaignModal />
        <AddAccountModal />
      </div>
    </BrowserRouter>
  );
}

export default App;
