import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact"
import MeetTheEBoard from "../components/MeetTheEboard";

export default function ContactUs() {
  return (
    <div>
      <header className="flex flex-col">
        <NavBar />{" "}
      </header>
      <MeetTheEBoard/>
      <Contact/>

      <footer className="flex items-center">
        <Footer showAdminLogin={false} />
      </footer>
    </div>
  );
}
