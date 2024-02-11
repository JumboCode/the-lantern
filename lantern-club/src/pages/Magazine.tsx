import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Magazine() {
  return (
    <>
      <NavBar />
      <Header title="Magazine"/>
      <p>MAGAZINE PAGE!</p>
      <Footer showAdminLogin={true} />
    </>
  );
}
