export interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IComplimentRequest {
  tag_id: string;
  user_senderID: string;
  user_receiveID: string;
  message: string;
}

export interface IPayload {
  sub: string;
}
