import Link from "next/link";

export default function NavBar() {
  return (
    <div class="navbar">
      <center>
        <ul className="flex space-x-24 text-blue-50 bg-red-700 font-serif text-lg
         text-center w-screen relative py-3 pl-8">
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
      </center>
    </div>
  );
}
