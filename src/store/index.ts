import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
import settingsReducer from './settingsSlice';
import dashboardReducer from './dashboardSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    settings: settingsReducer,
    dashboard: dashboardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
