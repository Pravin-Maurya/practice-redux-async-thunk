import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import Axios from "../../axios-config";
import axios from "axios";

const baseUrl = axios.create({
  baseURL: "http://35.154.200.9/testing/",
  headers: {
    "Content-type": "application/json",
  },
});
const initialState = {
  loginData: {},
  loading: false,
  error: "",
};

export const fetchlogin = createAsyncThunk(
  "login",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await baseUrl.post("user/signIn", payload);
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const loginSlice = createSlice({
  name: "loginUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchlogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchlogin.fulfilled, (state, action) => {
        state.loginData = action.payload;

        state.loading = false;
      })
      .addCase(fetchlogin.rejected, (state, action) => {
        state.error = action.payload.error;
        state.loading = false;
      });
  },
});

export const loginDataState = (state) => state.loginData;

export default loginSlice.reducer;
