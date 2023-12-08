import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomepageII from "../components/HomepageII";
import HomepageIII from "../components/HomepageIII";
import HomepageIV from "../components/HomepageIV";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header title="The Lantern"/>
      <HomepageII />
      <HomepageIII />
      <HomepageIV />
      
      <footer className="flex items-center">
        <Footer showAdminLogin={true} />
      </footer>
    </div>
  );
}
