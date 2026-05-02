import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ActivePage = 'dashboard' | 'projects' | 'metrics' | 'settings' | 'integrations';

interface UiState {
  activePage: ActivePage;
  sidebarOpen: boolean;
  searchQuery: string;
}

const initialState: UiState = {
  activePage: 'dashboard',
  sidebarOpen: true,
  searchQuery: '',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setActivePage(state, action: PayloadAction<ActivePage>) {
      state.activePage = action.payload;
    },
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
});

export const { setActivePage, toggleSidebar, setSearchQuery } = uiSlice.actions;
export default uiSlice.reducer;
