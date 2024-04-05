import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  previousUser: null,
  nextUser: null,
};

const sampleSlice = createSlice({
  name: "Sample",
  initialState,
  reducers: {
    updatecurr: (state : any) => {
      state.currentUser = "Updated current user";
    },
    updateprev: (state : any) => {
      state.previousUser = "Updated previous user";
    },
    updatenext: (state: any) => {
      state.nextUser = " Update next user";
    },
  },
});

export default sampleSlice.reducer;
export const {updatecurr,updatenext,updateprev} = sampleSlice.actions;
