import Link from "next/link";
import Image from "next/image";
import Logo from "../images/thelantern1.png";

export default function NavBar() {
  return (
    <div className="flex flex-col items-center">
      <center>
        <ul
          className="flex flex-col md:flex-row space-x-16 text-blue-50 bg-lantern-blue text-xl
          w-screen w-full pb-14 font-kiona"
        >
          <li className="pl-20 pr-40">
            <Link href="/" className="hover:underline">
              <Image src={Logo} height={250} width={250} alt="lantern logo" />
            </Link>
          </li>
          <li className="pt-14">
            <Link href="/Magazine" className="hover:underline">
              Magazine
            </Link>
          </li>
          <li className="pt-14">
            <Link href="/Events" className="hover:underline">
              Events
            </Link>
          </li>
          <li className="pt-14">
            <Link href="/AboutUs" className="hover:underline">
              About Us
            </Link>
          </li>
          <li className="pt-14">
            <Link href="/ContactUs" className="hover:underline">
              Contact Us
            </Link>
          </li>
          <li className="pt-14">
            <Link href="/Resources" className="hover:underline">
              Resources
            </Link>
          </li>
        </ul>
     </center>
    </div>
  );
}
