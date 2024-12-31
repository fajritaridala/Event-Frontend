import { User, Session } from "next-auth";
import { JWT } from "next-auth/jwt";

// Type definitions for Auth
interface IRegister {
  fullName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Type definitions for Activation
interface IActivation {
  code: string;
}

interface ILogin {
  identifier: string;
  password: string;
}

// Type definitions for User Login
interface UserExtended extends User {
  accessToken?: string;
  role?: string;
}

// user data storage from client side
interface SessionExtended extends Session {
  accessToken?: string;
}

// user verification
interface JWTExtended extends JWT {
  user?: UserExtended;
}

export type {
  IRegister,
  IActivation,
  ILogin,
  UserExtended,
  SessionExtended,
  JWTExtended,
};
