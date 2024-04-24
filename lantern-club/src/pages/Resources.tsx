import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResourcesII from "@/components/resources/ResourcesII";
import ResourcesIII from "@/components/resources/ResourcesIII";
import Head from 'next/head';


import Header from "@/components/Header";

export default function Resources() {
  return (
    <>
      <NavBar />
      <Head>
        <title>Resources | The Lantern</title>
      </Head>
      <Header title="Resources"/>
      <ResourcesII />
      <ResourcesIII />
      <Footer showAdminLogin={false} />
    </>
  );
}

