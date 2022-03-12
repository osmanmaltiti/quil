import { createSlice } from '@reduxjs/toolkit';

const FeedSilce = createSlice({
  name: 'feed',
  initialState: { quil: [] },
  reducers: {
    getQuil: (state, action) => {
      const { payload } = action;
      state.quil = payload
    }
  }
});

export const { getQuil } = FeedSilce.actions;
export default FeedSilce.reducer;