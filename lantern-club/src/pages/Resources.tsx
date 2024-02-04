import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Resources() {
  return (
    <>
      <NavBar />
      <Header title="Resources"/>
      <p> RESOURCES PAGE! </p>
      <footer className="flex items-center">
        <Footer showAdminLogin={true} />
      </footer>
    </>
  );
}
