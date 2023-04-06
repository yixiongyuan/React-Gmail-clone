import {createSlice } from '@reduxjs/toolkit';


export const mailSlice = createSlice({
  name: 'mail',
  initialState:{
    selectMail:null,
    sendMassageIsOpen:false,
  },
  reducers: {
    selectMail: (state,action) => {
      state.selectMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMassageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMassageIsOpen = false;
    },
  },

});

export const { 
  selectMail,
  openSendMessage, 
  closeSendMessage
} = mailSlice.actions;


export const selectOpenMail = (state) => state.mail.selectMail;

export const selectSendMessageIsOpen = (state) => state.mail.sendMassageIsOpen;

export default mailSlice.reducer;
