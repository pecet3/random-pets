import { createSlice } from "@reduxjs/toolkit";

const dogsSlice = createSlice({
  name: "dogs",
  initialState: {
    filter: "",
  },
  reducers: {
    changeFilter: (state, { payload: filter }) => {
      state.filter = filter;
    },
  },
});

export const { changeFilter } = dogsSlice.actions;

// export const selectDogsState = () => state.dogs;

export default dogsSlice.reducer;
