import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import ResourcesI from "../components/resources/ResourcesI";
import ResourcesII from "../components/resources/ResourcesII";
import ResourcesIII from "../components/resources/ResourcesIII";


export default function Resources() {
  return (
    <>
      <NavBar />
      <ResourcesI />
      <ResourcesII />
      <ResourcesIII />
      <footer className="flex items-center">
        <Footer showAdminLogin={true} />
      </footer>
    </>
  );
}

