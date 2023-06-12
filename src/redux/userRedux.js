import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    error: false,
    user: null,
    loading: false,
  },
  reducers: {
    success: (state, action) => {
      state.error = false;
      state.user = action.payload;
      state.loading = false;
    },
    error: (state) => {
      state.error = true;
      state.user = null;
      state.loading = false;
    },
    loading: (state) => {
      state.loading = true;
      state.user = null;
      state.error = false;
    },
  },
});
export const {success, error, loading} = userSlice.actions
export default userSlice.reducer