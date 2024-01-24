import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Resources() {
  return (
    <>
      <NavBar />
      <p> RESOURCES PAGE! </p>
      <footer className="flex items-center">
        <Footer showAdminLogin={true} />
      </footer>
    </>
  );
}
