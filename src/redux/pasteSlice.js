import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pastes: (() => {
      const savedPastes = localStorage.getItem("pastes");
      try{
        return savedPastes ? JSON.parse(savedPastes) : [];
      }
      catch(error){
        return [];
      }
    })()
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addPaste: (state, action) => {
        const paste = action.payload;
        // add a check for already existing paste
        state.pastes.push(paste);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
    },
    updatePaste: (state, action) => {
        const paste = action.payload
        const index = state.pastes.findIndex((item) => item._id === paste._id);

        if(index >= 0){
            state.pastes[index] = paste;
            localStorage.setItem("pastes", JSON.stringify(state.pastes));
        }
    },
    removePaste: (state, action) => {
        const pasteID = action.payload;
        const index = state.pastes.findIndex((item) => item._id === pasteID);

        if(index >= 0){
            state.pastes.splice(index, 1);
            localStorage.setItem("pastes", JSON.stringify(state.pastes));
        }
    },
    resetPastes: (state, action) => {
        state.pastes = [];
        localStorage.removeItem("pastes");
    }
  },
})

export const { addPaste, updatePaste, removePaste, resetPastes } = pasteSlice.actions

export default pasteSlice.reducer;