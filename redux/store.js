import { configureStore } from '@reduxjs/toolkit';
import homeFeedSlice from './home-feed-slice';
import profileSlice from './profile-slice';

const store = configureStore({
  reducer: {
    feed: homeFeedSlice,
    profile: profileSlice
  }
});

export default store;