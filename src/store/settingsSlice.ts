import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type DeliveryPeriod = 'AM' | 'PM';

interface SettingsState {
  selectedAdAccount: string;
  telegramGroupId: string;
  botApiKey: string;
  showBotApiKey: boolean;
  dailyReport: boolean;
  weeklyReport: boolean;
  deliveryHour: number;
  deliveryMinute: number;
  deliveryPeriod: DeliveryPeriod;
  isSaving: boolean;
  savedSuccess: boolean;
}

const initialState: SettingsState = {
  selectedAdAccount: '',
  telegramGroupId: '',
  botApiKey: '1234567890:ABCdefGHIjklMNOpqrSTUvwxYZ',
  showBotApiKey: false,
  dailyReport: true,
  weeklyReport: false,
  deliveryHour: 8,
  deliveryMinute: 30,
  deliveryPeriod: 'AM',
  isSaving: false,
  savedSuccess: false,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSelectedAdAccount(state, action: PayloadAction<string>) {
      state.selectedAdAccount = action.payload;
    },
    setTelegramGroupId(state, action: PayloadAction<string>) {
      state.telegramGroupId = action.payload;
    },
    setBotApiKey(state, action: PayloadAction<string>) {
      state.botApiKey = action.payload;
    },
    toggleShowBotApiKey(state) {
      state.showBotApiKey = !state.showBotApiKey;
    },
    toggleDailyReport(state) {
      state.dailyReport = !state.dailyReport;
    },
    toggleWeeklyReport(state) {
      state.weeklyReport = !state.weeklyReport;
    },
    setDeliveryHour(state, action: PayloadAction<number>) {
      state.deliveryHour = ((action.payload - 1 + 12) % 12) + 1;
    },
    setDeliveryMinute(state, action: PayloadAction<number>) {
      state.deliveryMinute = ((action.payload % 60) + 60) % 60;
    },
    setDeliveryPeriod(state, action: PayloadAction<DeliveryPeriod>) {
      state.deliveryPeriod = action.payload;
    },
    incrementHour(state) {
      state.deliveryHour = (state.deliveryHour % 12) + 1;
    },
    decrementHour(state) {
      state.deliveryHour = ((state.deliveryHour - 2 + 12) % 12) + 1;
    },
    incrementMinute(state) {
      state.deliveryMinute = (state.deliveryMinute + 5) % 60;
    },
    decrementMinute(state) {
      state.deliveryMinute = ((state.deliveryMinute - 5) + 60) % 60;
    },
    toggleDeliveryPeriod(state) {
      state.deliveryPeriod = state.deliveryPeriod === 'AM' ? 'PM' : 'AM';
    },
    setSavedSuccess(state, action: PayloadAction<boolean>) {
      state.savedSuccess = action.payload;
    },
  },
});

export const {
  setSelectedAdAccount,
  setTelegramGroupId,
  setBotApiKey,
  toggleShowBotApiKey,
  toggleDailyReport,
  toggleWeeklyReport,
  setDeliveryHour,
  setDeliveryMinute,
  setDeliveryPeriod,
  incrementHour,
  decrementHour,
  incrementMinute,
  decrementMinute,
  toggleDeliveryPeriod,
  setSavedSuccess,
} = settingsSlice.actions;

export default settingsSlice.reducer;
