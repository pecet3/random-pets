import { createSlice } from "@reduxjs/toolkit";

const dogsSlice = createSlice({
  name: "dogs",
  initialState: {},
  reducers: {},
});

export const {} = dogsSlice.actions;

// export const selectDogsState = (state) => state.dogs;

export default dogsSlice.reducer;
