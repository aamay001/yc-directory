import NextAuth from 'next-auth';
import Github from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    Github({
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
    }),
  ],
}

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);