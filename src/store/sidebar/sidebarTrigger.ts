import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CounterState {
    sidebarOpen: boolean;
}

const initialState: CounterState = {
    sidebarOpen: false
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    cambiarSidebarOpen(state){
        state.sidebarOpen = !state.sidebarOpen;
    }
  }
});

export const { cambiarSidebarOpen } = counterSlice.actions;

export default counterSlice.reducer;