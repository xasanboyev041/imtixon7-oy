import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("https://reqres.in/api/users?page=2");
  return response.data;
});

export const fetchUser = createAsyncThunk("users/fetchUser", async (id) => {
  const response = await axios.get(`https://reqres.in/api/users/${id}`);
  return response.data;
});

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (userData) => {
    const response = await axios.post(
      "https://reqres.in/api/register",
      userData
    );
    return response.data;
  }
);

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (credentials) => {
    const response = await axios.post(
      "https://reqres.in/api/login",
      credentials
    );
    return response.data;
  }
);

export const createUser = createAsyncThunk(
  "users/createUser",
  async (newUser) => {
    const response = await axios.post("https://reqres.in/api/users", newUser);
    return response.data;
  }
);

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  await axios.delete(`https://reqres.in/api/users/${id}`);
  return id;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    usersList: [],
    singleUser: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.usersList = action.payload.data;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.singleUser = action.payload.data;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        console.log("User Registered:", action.payload);
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log("User Logged In:", action.payload);
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.usersList.push(action.payload);
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.usersList = state.usersList.filter(
          (user) => user.id !== action.payload
        );
      });
  },
});

export default userSlice.reducer;
