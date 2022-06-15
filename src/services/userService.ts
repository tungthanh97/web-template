import { User } from 'types';
import axios from 'axios';
import { authHeader } from 'utils';

const signIn = (user_info: User) => {
  const { email, password, token } = user_info;

  // sign in API call here
  const headers = authHeader(token);
  const payload = email && password ? { email, password } : {};

  if (payload || token) return axios.post('/api/auth/sign_in', payload, { headers });
  return Promise.reject(new Error('Please provide an email address and password'));
};

export default { signIn };
