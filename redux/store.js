import { configureStore } from '@reduxjs/toolkit';
import homeFeedSlice from './home-feed-slice';

const store = configureStore({
  reducer: {
    feed: homeFeedSlice
  }
});

export default store;