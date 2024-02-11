import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Events() {
  return (
    <>
      <NavBar />
      <Header title="Events"/>
      <p>
      EVENT PAGE!
      </p>
      <Footer showAdminLogin={false} />
    </>
  );
}
