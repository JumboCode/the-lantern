import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import HomepageI from "../components/home/HomepageI";
import HomepageII from "../components/home/HomepageII";
import HomepageIII from "../components/home/HomepageIII";
import HomepageIV from "../components/home/HomepageIV";



export default function Home() {
  return (
    <div className="">
      <NavBar />
      <HomepageI title="The Lantern"/>
      <HomepageII />
      <HomepageIII />
      <HomepageIV />
      <Footer showAdminLogin={true} />
    </div>
  );
}
