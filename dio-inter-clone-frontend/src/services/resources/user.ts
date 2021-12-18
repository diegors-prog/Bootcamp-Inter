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

export interface UserDto {
  id: string;
  firstName: string;
  lastName: string;
  accountNumber: number;
  accountDigit: number;
  wallet: number;
  email: string;
}

export const signIn = async (data: SignInData) => {
  const user = api.post('/user/signin', data);
  return user;
};

export const me = async () => {
  return api.get<UserDto>('/user/me');
};

export const signUp = async (data: SignUpData) => {
  const user = api.post('/user/signup', data);
  return user;
};
