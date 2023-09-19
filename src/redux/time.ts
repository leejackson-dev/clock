import { createSlice } from '@reduxjs/toolkit';

// Define the state interface
export interface TimeStateInterface {
  timeSlice?: {
    currentTime: Date;
  };
  currentTime: Date;
}

const initialState: TimeStateInterface = {
  currentTime: new Date(),
};

export const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    updateCurrentTime: (state) => {
      state.currentTime = new Date(); // Update currentTime to the current date and time
    },
  },
});

export const { updateCurrentTime } = timeSlice.actions;

export default timeSlice.reducer;
