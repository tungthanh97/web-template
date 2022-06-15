import { createSlice } from '@reduxjs/toolkit';
import { User } from 'types';
import userService from 'services/userService';
import { AppDispatch } from 'store/configure_store';

export type GlobalSlice = {
  isLoading: boolean;
  error: string;
  isLoggedIn: boolean;
  user: User;
};

export const initState: GlobalSlice = {
  // loading user data
  isLoading: false,

  // User info
  user: {} as User,

  // is User logged in
  isLoggedIn: false,

  // error message
  error: ''
};

export const globalSlice = createSlice({
  name: 'global',
  initialState: initState,
  reducers: {
    setUser: (state, { payload }) => {
      const { user } = payload;

      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = user;
      state.error = '';
    },
    setError: (state, { payload }) => {
      const { errorMessage } = payload;

      state.isLoading = false;
      state.error = errorMessage;
    },
    setLoading: (state, { payload }) => {
      state.isLoading = payload.isLoading;
    }
  }
});

export const { setUser, setError, setLoading } = globalSlice.actions;

export default globalSlice.reducer;

// Extra actions

export const signIn = (user_info: User) => (dispatch: AppDispatch) => {
  return userService
    .signIn(user_info)
    .then(resp => {
      resp.data.data['access-token'] = resp.headers['access-token'];
      resp.data.data['jwt-token'] = resp.headers['jwt-token'];

      dispatch(setLoading({ isLoading: true }));
      dispatch(setUser(resp.data.data));
      return resp.data;
    })
    .catch((e: Error) => {
      return Promise.reject(e);
    });
};
