import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <div>
      <header className="flex flex-col h-screen items-center">
        <NavBar />{" "}
        <p className="flex flex-col h-screen justify-center items-center">
          ABOUT US PAGE!{" "}
        </p>
      </header>

      <footer className="flex items-center">
        <Footer showAdminLogin={false} />
      </footer>
    </div>
  );
}
