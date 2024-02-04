import NavBar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact"
import MeetTheEBoard from "../components/MeetTheEboard";

export default function ContactUs() {
  return (
    <>
      <NavBar />
      <Header title="Contact Us"/>
      <MeetTheEBoard/>
      <Contact/>      
      <Footer showAdminLogin={false} />
    </>
  );
}
