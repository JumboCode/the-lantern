import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact"

export default function ContactUs() {
  return (
    <div>
      <header className="flex flex-col">
        <NavBar />{" "}
      </header>
      <div>
        <br></br>
        <br></br>
      </div>
      <Contact/>

      <footer className="flex items-center">
        <Footer showAdminLogin={false} />
      </footer>
    </div>
  );
}
