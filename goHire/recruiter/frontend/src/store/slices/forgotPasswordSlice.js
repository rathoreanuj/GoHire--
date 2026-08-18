import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from '../../services/authApi';

// Async thunks


export const resetPassword = createAsyncThunk(
  'forgotPassword/resetPassword',
  async ({ email, newPassword }, { rejectWithValue }) => {
    try {
      const response = await authApi.resetPassword({ email, newPassword });
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.error || 'Failed to reset password. Please try again.'
      );
    }
  }
);

const initialState = {
  email: '',
  loading: false,
  error: null,
  success: false,
};

const forgotPasswordSlice = createSlice({
  name: 'forgotPassword',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
    resetState: (state) => {
      state.email = '';
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    // Reset Password
    builder
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { setEmail, clearError, resetState } = forgotPasswordSlice.actions;
export default forgotPasswordSlice.reducer;


