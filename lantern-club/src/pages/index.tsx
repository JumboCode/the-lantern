import NavBar from "../components/Navbar";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <header className="flex flex-col h-screen items-center">
        <NavBar />{" "}
        <p className="flex flex-col h-screen justify-center items-center">
          Hi Lantern Club!! This is the default page aka homepage of the website
          <Link href="/auth" className="hover:underline">
            Auth
          </Link>
        </p>
      </header>
    </div>
  );
}
