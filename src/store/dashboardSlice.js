import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedMetrics: ['Spend', 'ROAS', 'CPA'],
  scheduledTime: '09:00 AM',
  alertsEnabled: true,
  accountsCount: 5,
  campaigns: [
    { id: 1, name: 'USA_Summer_Sale', status: 'Active', platform: 'Meta', spend: 4500, roas: 4.2, leads: 420, cpa: 10.71, budget: 6000 },
    { id: 2, name: 'EU_Brand_Awareness', status: 'Active', platform: 'Meta', spend: 3200, roas: 2.8, leads: 180, cpa: 17.80, budget: 4000 },
    { id: 3, name: 'APAC_Retargeting', status: 'Paused', platform: 'Meta', spend: 1100, roas: 5.1, leads: 95, cpa: 11.58, budget: 2000 },
    { id: 4, name: 'US_Prospecting_Q4', status: 'Active', platform: 'Meta', spend: 6800, roas: 3.6, leads: 512, cpa: 13.28, budget: 8000 },
  ],
  connections: [
    { id: 1, name: 'Account_USA', platform: 'Meta', status: 'Connected', spend: 4500, campaigns: 3 },
    { id: 2, name: 'Account_EU', platform: 'Meta', status: 'Connected', spend: 3200, campaigns: 2 },
    { id: 3, name: 'Account_APAC', platform: 'Meta', status: 'Connected', spend: 1100, campaigns: 1 },
    { id: 4, name: 'Account_US_Brand', platform: 'Meta', status: 'Connected', spend: 6800, campaigns: 4 },
    { id: 5, name: 'Account_Global', platform: 'Meta', status: 'Warning', spend: 980, campaigns: 2 },
  ],
  alerts: [
    { id: 1, type: 'warning', message: 'CPA exceeded $20 threshold on Account_EU', time: '2 min ago', read: false },
    { id: 2, type: 'info', message: 'Daily report sent for Account_USA at 09:00 AM', time: '1 hr ago', read: false },
    { id: 3, type: 'success', message: 'ROAS reached 5.1x on APAC_Retargeting', time: '3 hr ago', read: true },
    { id: 4, type: 'warning', message: 'Budget 90% utilized on EU_Brand_Awareness', time: '5 hr ago', read: true },
    { id: 5, type: 'error', message: 'Ad account Account_Global requires attention', time: '1 day ago', read: true },
  ],
  reportData: [
    { date: '2024-10-27', account: 'Account_USA', spend: 450.00, conversions: 42, cpa: 10.71, roas: 4.2 },
    { date: '2024-10-27', account: 'Account_EU', spend: 320.50, conversions: 18, cpa: 17.80, roas: 2.8 },
    { date: '2024-10-26', account: 'Account_USA', spend: 412.00, conversions: 38, cpa: 10.84, roas: 4.0 },
    { date: '2024-10-26', account: 'Account_EU', spend: 298.00, conversions: 15, cpa: 19.87, roas: 2.6 },
    { date: '2024-10-25', account: 'Account_APAC', spend: 150.00, conversions: 13, cpa: 11.54, roas: 5.0 },
  ],
  settings: {
    name: 'Alex Johnson',
    email: 'alex@adpulse.io',
    timezone: 'UTC-5 (EST)',
    language: 'English',
    notifications: true,
    twoFactor: false,
    darkMode: false,
  },
  showNewCampaignModal: false,
  showAddAccountModal: false,
  searchQuery: '',
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    toggleMetric: (state, action) => {
      const metric = action.payload;
      if (state.selectedMetrics.includes(metric)) {
        state.selectedMetrics = state.selectedMetrics.filter(m => m !== metric);
      } else {
        state.selectedMetrics.push(metric);
      }
    },
    setScheduledTime: (state, action) => {
      state.scheduledTime = action.payload;
    },
    toggleAlerts: (state) => {
      state.alertsEnabled = !state.alertsEnabled;
    },
    setShowNewCampaignModal: (state, action) => {
      state.showNewCampaignModal = action.payload;
    },
    setShowAddAccountModal: (state, action) => {
      state.showAddAccountModal = action.payload;
    },
    addCampaign: (state, action) => {
      state.campaigns.push({ id: Date.now(), ...action.payload, status: 'Active', spend: 0, roas: 0, leads: 0, cpa: 0 });
    },
    toggleCampaignStatus: (state, action) => {
      const c = state.campaigns.find(c => c.id === action.payload);
      if (c) c.status = c.status === 'Active' ? 'Paused' : 'Active';
    },
    addConnection: (state, action) => {
      state.connections.push({ id: Date.now(), ...action.payload, status: 'Connected', spend: 0, campaigns: 0 });
      state.accountsCount += 1;
    },
    markAlertRead: (state, action) => {
      const a = state.alerts.find(a => a.id === action.payload);
      if (a) a.read = true;
    },
    markAllAlertsRead: (state) => {
      state.alerts.forEach(a => { a.read = true; });
    },
    updateSettings: (state, action) => {
      state.settings = { ...state.settings, ...action.payload };
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  toggleMetric, setScheduledTime, toggleAlerts,
  setShowNewCampaignModal, setShowAddAccountModal,
  addCampaign, toggleCampaignStatus,
  addConnection, markAlertRead, markAllAlertsRead,
  updateSettings, setSearchQuery,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
