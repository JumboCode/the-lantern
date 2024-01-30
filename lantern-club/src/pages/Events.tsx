import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import handler from "/api/content/Events";

export default function Events() {
  return (
    <>
      <NavBar />
      <p>
      EVENT PAGE!
      </p>

      try {
            await fetch('/api/events', {
            method: 'GET'
        })
      } catch (Error) {
        console.error(Error)
      }
      <Footer showAdminLogin={false} />
    </>
  );
}
