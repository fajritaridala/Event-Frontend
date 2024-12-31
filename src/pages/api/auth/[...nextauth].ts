import environment from "@/config/environments";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PassThrough } from "stream";
import { JWTExtended, SessionExtended, UserExtended } from "@/types/Auth";
import authServices from "@/services/auth.service";

// authentication services
export default NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24,
  },
  secret: environment.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        identifier: { label: "identifier", type: "text" },
        password: { label: "password", type: "password" },
      },
      // validate credentials
      async authorize(
        credentials: Record<"identifier" | "password", string> | undefined,
      ): Promise<UserExtended | null> {
        const { identifier, password } = credentials as {
          identifier: string;
          password: string;
        };

        // call login api
        const result = await authServices.login({
          identifier,
          password,
        });

        // get access token
        const accessToken = result.data.data;

        // get user profile
        const me = await authServices.getProfileWithToken(accessToken);
        const user = me.data.data;

        // check if user is valid
        if (
          accessToken &&
          result.status === 200 &&
          user._id &&
          me.status === 200
        ) {
          user.accessToken = accessToken;
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  // callbacks for jwt and session
  callbacks: {
    async jwt({
      token,
      user,
    }: {
      token: JWTExtended;
      user: UserExtended | null;
    }) {
      if (user) { // check if user token is valid
        token.user = user;
      }

      return token;
    },
    
    // session callback
    async session({
      session,
      token,
    }: {
      session: SessionExtended;
      token: JWTExtended;
    }) {
      session.user = token.user;
      session.accessToken = token.user?.accessToken;
      return session;
    },
  },
});
