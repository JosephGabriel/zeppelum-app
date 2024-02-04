export interface LoginUserApiArgs {
  email: string;
  password: string;
}

export interface UserPayload {
  id: string;
  name: string;
  lastname: string;
  avatar?: string;
}

export interface SignupUser {
  name: string;
  lastname: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface AuthPayload {
  token: string;
  user: UserPayload;
}

export interface ErrorPayloadApi {
  data: {
    error: string;
    message: string | string[];
    statusCode: number;
  };
  status: number;
}

export interface EventApiPayload {
  title: string;
  description: string;
  shortDescription: string;
  price: number;
  type: string;
  dateStart: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
  image: string;
  id: string;
  rating: number;
}
