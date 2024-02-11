import NavBar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutUsII from "../components/about/AboutUsII";
import AboutUsIII from "../components/about/AboutUsIII";
import AboutUsIV from "../components/about/AboutUsIV";

export default function AboutUs() {
  return (
    <div>
      <NavBar />
      <Header title="About Us"/>
      <AboutUsII />
      <AboutUsIII />
      <AboutUsIV />
      <Footer showAdminLogin={false} />
    </div>
  );
}
