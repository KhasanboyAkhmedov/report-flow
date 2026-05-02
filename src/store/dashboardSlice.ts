import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface KpiThresholds {
  cplWarning: string;
  minimumCtr: string;
  spentBudgetAlert: string;
  hookRateThreshold: string;
}

interface SelectedKpis {
  hookRate: boolean;
  holdRate: boolean;
  ctr: boolean;
  leads: boolean;
  cpl: boolean;
  dailyBudget: boolean;
  spentBudget: boolean;
}

interface DashboardState {
  selectedKpis: SelectedKpis;
  kpiThresholds: KpiThresholds;
  connectedAccounts: Array<{
    id: string;
    name: string;
    platform: string;
    status: 'Active' | 'Syncing' | 'Paused';
    lastSync: string;
  }>;
}

const initialState: DashboardState = {
  selectedKpis: {
    hookRate: true,
    holdRate: true,
    ctr: true,
    leads: true,
    cpl: true,
    dailyBudget: false,
    spentBudget: true,
  },
  kpiThresholds: {
    cplWarning: '5.00',
    minimumCtr: '1.2',
    spentBudgetAlert: '90',
    hookRateThreshold: '32.0',
  },
  connectedAccounts: [
    { id: '1', name: 'Global Retail Q4',         platform: 'Meta Ads', status: 'Active',  lastSync: '2 mins ago'  },
    { id: '2', name: 'SaaS Growth North America', platform: 'Meta Ads', status: 'Active',  lastSync: '14 mins ago' },
    { id: '3', name: 'EU Expansion Beta',         platform: 'Meta Ads', status: 'Syncing', lastSync: 'Just now'    },
  ],
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    toggleKpi(state, action: PayloadAction<keyof SelectedKpis>) {
      state.selectedKpis[action.payload] = !state.selectedKpis[action.payload];
    },
    setKpiThreshold(state, action: PayloadAction<{ key: keyof KpiThresholds; value: string }>) {
      state.kpiThresholds[action.payload.key] = action.payload.value;
    },
  },
});

export const { toggleKpi, setKpiThreshold } = dashboardSlice.actions;
export default dashboardSlice.reducer;
