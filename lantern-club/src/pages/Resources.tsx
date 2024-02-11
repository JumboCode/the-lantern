import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import ResourcesII from "../components/resources/ResourcesII";
import ResourcesIII from "../components/resources/ResourcesIII";

import Header from "../components/Header";

export default function Resources() {
  return (
    <>
      <NavBar />
      <Header title="Resources"/>
      <ResourcesII />
      <ResourcesIII />
      <Footer showAdminLogin={true} />
    </>
  );
}

