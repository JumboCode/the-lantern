import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="flex flex-col h-screen items-center">
        <NavBar />
        <p className="flex flex-col h-screen justify-center items-center">
          Hi Lantern Club!! This is the default page aka homepage of the website
          <Link href="/auth" className="hover:underline">
            Auth
          </Link>
        </p>
      </header>

      <footer className="flex items-center">
        <Footer showAdminLogin={true} />
      </footer>
    </div>
  );
}