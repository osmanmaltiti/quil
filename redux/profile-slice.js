import { createSlice } from "@reduxjs/toolkit";

const ProfileSlice = createSlice({
  name: 'profile',
  initialState: { quil: [], profile: [] },
  reducers: {
    getUserQuils : ( state, action ) => {
      const { payload } = action;
      state.quil = payload;
    }
  }
})
export const { getUserQuils } = ProfileSlice.actions;
export default ProfileSlice.reducer;