import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface EstadosNavbar {
    mobileMenuOpen: boolean;
}

const initialState: EstadosNavbar = {
    mobileMenuOpen: false
}

const counterSlice = createSlice({
  name: 'Estatus Navbar',
  initialState,
  reducers: {
    initMobileMenuOpen(state){
      state.mobileMenuOpen = false;
    },
    cambiarMobileMenuOpen(state){
        state.mobileMenuOpen = !state.mobileMenuOpen;
    }
  }
});

export const { cambiarMobileMenuOpen, initMobileMenuOpen } = counterSlice.actions;

export default counterSlice.reducer;