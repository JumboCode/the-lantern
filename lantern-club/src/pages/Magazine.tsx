import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Magazine() {
  return (
    <>
      <NavBar />
      <p>MAGAZINE PAGE!</p>
      <Footer showAdminLogin={true} />
    </>
  );
}
