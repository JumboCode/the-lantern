import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import EventsButton from "../components/events-button";
import MyButton from "../components/Button";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="flex flex-col h-screen items-center">
        <NavBar />{" "}
        <EventsButton label="EVENTS"/>
        {/* <MyButton label="Button"/> */}
        <p className="flex flex-col h-screen justify-center items-center">
          Hi Lantern Club!! This is the default page aka homepage of the website
          <Link href="/auth" className="hover:underline">
            Auth
          </Link>
        </p>
      </header>

      <section>
        <events-button label="EVENTS"/>
      </section>


      <footer className="flex items-center">
        <Footer showAdminLogin={true} />
      </footer>
    </div>
  );
}