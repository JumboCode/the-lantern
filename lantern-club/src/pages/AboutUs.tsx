import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUsII from "../components/AboutUsII";
import AboutUsIII from "../components/AboutUsIII";
import AboutUsIV from "../components/AboutUsIV";

export default function AboutUs() {
  return (
    <div>
      <header className="flex flex-col items-center">
        <NavBar />{" "}
        <p className="flex flex-col justify-center items-center">
          ABOUT US PAGE!{" "}
        </p>
      </header>
      <AboutUsII />
      <AboutUsIII />
      <AboutUsIV />

      <footer className="flex items-center">
        <Footer showAdminLogin={false} />
      </footer>
    </div>
  );
}
