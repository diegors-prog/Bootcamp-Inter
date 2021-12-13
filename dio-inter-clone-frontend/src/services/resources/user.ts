import api from '../api';

export interface SignInData {
  email: string;
  password: string;
}

export interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const signIn = async (data: SignInData) => {
  const user = api.post('/user/signin', data);
  return user;
};

export const me = async () => {
  return api.get('/user/me');
};

export const signUp = async (data: SignUpData) => {
  const user = api.post('/user/signup', data);
  return user;
};
