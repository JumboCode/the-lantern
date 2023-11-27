import Link from "next/link";
import headerlogo from '../images/header.png';

export default function NavBar() {
  return (
    // There was an error in the line below where the code was originally class="navbar" so the fix to the error was className, what was your intention with the line below?
    <div className="navbar">
      <nav>
        <ul className="container flex space-x-24 text-blue-50 bg-red-700 font-serif text-lg
         text-center w-screen relative py-3 pl-8">
          <li>
          <img src={headerlogo.src} className="absolute h-20"/>
          </li>
          <li>
            <Link href="/Home" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/Magazine" className="hover:underline">
              Magazine
            </Link>
          </li>
          <li>
            <Link href="/Events" className="hover:underline">
              Events
            </Link>
          </li>
          <li>
            <Link href="/AboutUs" className="hover:underline">
              About Us - Mission & History
            </Link>
          </li>
          <li>
            <Link href="/ContactUs" className="hover:underline">
              Contact Us - Current E-Board
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
