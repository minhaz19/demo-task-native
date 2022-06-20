import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bored: 0,
  active: 0,
  superActive: 0,
  startingDate: "",
  endingDate: "",
  rangeOfDates: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setBored: (state, action) => {
      state.bored = action.payload;
    },
    setActive: (state, action) => {
      state.active = action.payload;
    },
    setSuperActive: (state, action) => {
      state.superActive = action.payload;
    },
    setStartingDate: (state, action) => {
      state.startingDate = action.payload;
    },
    setEndingDate: (state, action) => {
      state.endingDate = action.payload;
    },
    setRangeOfDates: (state, action) => {
      state.rangeOfDates = action.payload;
    },
  },
});

export const {
  setBored,
  setActive,
  setSuperActive,
  setStartingDate,
  setEndingDate,
  setRangeOfDates,
} = userSlice.actions;

export default userSlice.reducer;
