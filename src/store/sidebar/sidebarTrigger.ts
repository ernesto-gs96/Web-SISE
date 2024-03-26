import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface EstatusSidebar {
    sidebarOpen: boolean;
}

const initialState: EstatusSidebar = {
    sidebarOpen: false
}

const counterSlice = createSlice({
  name: 'Estatus sidebar',
  initialState,
  reducers: {
    cambiarSidebarOpen(state){
        state.sidebarOpen = !state.sidebarOpen;
    }
  }
});

export const { cambiarSidebarOpen } = counterSlice.actions;

export default counterSlice.reducer;