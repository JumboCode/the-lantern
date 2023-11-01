import NavBar from "../components/Navbar";  

export default function HomePage() {
  return (
    <div>
      {" "}
      <header className="flex flex-col h-screen items-center">
        <NavBar />{" "}
        <p className="flex flex-col h-screen justify-center items-center">
           HOME PAGE! </p>
      </header>
    </div>
  );
}
