import NextAuth, { Session } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    async session({ session }): Promise<Session> {
      const user = await prisma.user.findUnique({
        where: { email: session.user.email ?? undefined },
      });
      if (user) {
        (session.user as any).isAdmin = user.admin ?? false;
      }
      return session;
    },
  },
})

