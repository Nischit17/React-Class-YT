import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { YOUTUBE_VIDEOS_API } from "./constants";

export const getApiDataSlice = createAsyncThunk("getApiDataSlice", async () => {
  const response = await fetch(YOUTUBE_VIDEOS_API);
  return response.json();
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    isLoading: false,
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getApiDataSlice.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getApiDataSlice.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getApiDataSlice.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default dataSlice.reducer;
