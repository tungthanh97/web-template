import { baseHeader } from 'utils';
import axios from '__mocks__/axios';
import userService from './userService';

describe('User service', () => {
  it('should call correct api when sign in', () => {
    const user_info: User = {
      email: 'test@test.com',
      password: 'password'
    };
    userService.signIn(user_info);

    expect(axios.post).toHaveBeenCalledWith('/api/auth/sign_in', user_info, {
      headers: baseHeader()
    });
  });
});
