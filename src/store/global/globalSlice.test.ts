import { cloneDeep } from 'lodash';
import { User } from 'types';
import userService from 'services/userService';
import globalReducer, { GlobalSlice, initState, setUser, signIn } from './globalSlice';

const dispatch = jest.fn();
const user_data = {};
jest.mock('services/userService', () => ({ signIn: jest.fn(() => Promise.resolve({})) }));

describe('global Slice', () => {
  let state: GlobalSlice = initState;

  it('should set correct user data', () => {
    const state_after = cloneDeep(state);
    state = globalReducer(state, setUser({ user: user_data }));

    expect(state).toEqual({ ...state_after, user: user_data, isLoggedIn: true, isLoading: false, error: '' });
  });
});

describe('extra actions', () => {
  it('checks sign_in', () => {
    const user_info: User = {
      email: 'test@test.com',
      password: 'password'
    };
    signIn(user_info)(dispatch);
    expect(userService.signIn).toHaveBeenCalledTimes(1);
    expect(userService.signIn).toHaveBeenCalledWith(user_info);
  });
});
