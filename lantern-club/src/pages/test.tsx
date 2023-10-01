import { useSession, signIn, signOut } from "next-auth/react"

export default function test() {
  const { data: session, status } = useSession()
  const userEmail = session?.user?.email

  if (status === "loading") {
    return <p>Hang on there...</p>
  }

  if (status === "authenticated") {
    return (
      <div className="flex flex-col h-screen justify-center items-center">
        <p>Signed in as {userEmail}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <p>Not signed in.</p>
      <button onClick={() => signIn("github")}>Sign in with Github</button>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
    </div>
  )
}