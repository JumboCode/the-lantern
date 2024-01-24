import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact"
import MeetTheEBoard from "../components/MeetTheEboard";

export default function ContactUs() {
  return (
    <>
      <NavBar />
      <MeetTheEBoard/>
      <Contact/>      
      <Footer showAdminLogin={false} />
    </>
  );
}
