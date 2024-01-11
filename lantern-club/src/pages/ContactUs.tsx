import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactUs() {
  return (
    <>
      <NavBar />{" "}
      <p>Contact Page</p>
      <Footer showAdminLogin={false} />
    </>
  );
}
