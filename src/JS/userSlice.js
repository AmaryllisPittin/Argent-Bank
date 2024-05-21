import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const SET_USERNAME = 'SET_USERNAME';

export const checkUserProfile = createAsyncThunk(
  'user/checkUserProfile',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login');
      const users = await response.json();
      const user = users.find(user => user.email === email && user.password === password);
      
      if (user) {
        return user;
      } else {
        return thunkAPI.rejectWithValue('User not found');
      }
    } catch (error) {
      return thunkAPI.rejectWithValue('Error fetching user data');
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    setUsername: (state, action) => {
      state.userName = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkUserProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkUserProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(checkUserProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setUsername } = userSlice.actions;
export default userSlice.reducer;
