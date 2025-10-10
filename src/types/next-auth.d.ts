import { DefaultSession, DefaultUser } from "next-auth";
import { JWT as DefaultJWT } from "next-auth/jwt";

export interface MyUser extends DefaultUser {
  id?: string;
  name?: string;
}

export interface MySession extends DefaultSession {
  user?: MyUser;
}

export interface MyJWT extends DefaultJWT {
  id?: string;
  name?: string;
}