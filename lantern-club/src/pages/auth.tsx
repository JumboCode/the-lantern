import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import NavBar from "../components/Navbar";
export default function Profile() {
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      if (userEmail) {
        // Fetch the user from your database
        const response = await fetch(
          `/api/auth/getUserAdminStatus?email=${encodeURIComponent(userEmail)}`
        );
        const data = await response.json();
        console.log(data);

        if (data.isAdmin) {
          setIsAdmin(true);
        }
      }
    };
    fetchUserData();
  }, [userEmail]);

  return (
    <div className="flex flex-col h-screen items-center">
      <NavBar />
      <div className="flex flex-col h-screen justify-center items-center">
        {/* pt-50 */}
        {status === "loading" ? (
          <p>Hang on there...</p>
        ) : status === "authenticated" && isAdmin ? (
          <>
            <p>Signed in as admin: {userEmail}</p>
            <button onClick={() => signOut()}>Sign out</button>
          </>
        ) : status === "authenticated" && !isAdmin ? (
          <>
            <p>Signed in but not an admin: {userEmail}</p>
            <button onClick={() => signOut()}>Sign out</button>
          </>
        ) : (
          <>
            <p>Not signed in.</p>
            <button onClick={() => signIn("google")}>
              Sign in with Google
            </button>
          </>
        )}
      </div>
    </div>
  );
}
