import { configureStore } from '@reduxjs/toolkit';
import timeSlice from './time';

type StoreInterface = {
  timeSlice: ReturnType<typeof timeSlice>;
};

const store = configureStore({
  reducer: {
    timeSlice: timeSlice,
  },
});

export default store;

// Export the StoreInterface type for useSelector
export type { StoreInterface };
