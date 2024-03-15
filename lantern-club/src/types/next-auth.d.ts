// types/next-auth.d.ts or add this to an existing type declaration file
import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      /** Assuming email is already part of the default user object */
      email: string;
      /** Add custom properties here */
      isAdmin: boolean;
    }
  }
}
