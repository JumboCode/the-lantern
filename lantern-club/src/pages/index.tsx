import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div>
      <header className="flex flex-col h-screen justify-center items-center">
        <p>
          Hi Lantern Club!! This is the default page aka homepage of the website
        </p>
        <NavBar />
      </header>

      <footer className="flex items-center">
        <Footer showAdminLogin={true} />
      </footer>
    </div>
  );
}
