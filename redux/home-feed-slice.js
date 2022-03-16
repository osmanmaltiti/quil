import { createSlice } from '@reduxjs/toolkit';

const FeedSilce = createSlice({
  name: 'feed',
  initialState: { quil: [], recommended: [] },
  reducers: {
    getQuil: (state, action) => {
      const { payload } = action;
      state.quil = payload
    },
    getRecommended: (state, action) => {
      const { payload } = action;
      state.recommended = payload;
    }
  }
});

export const { getQuil, getRecommended } = FeedSilce.actions;
export default FeedSilce.reducer;