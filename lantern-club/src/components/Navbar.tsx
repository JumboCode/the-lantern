import Link from "next/link";
import Image from "next/image";
import Logo from "../images/thelantern1.png";
                

export default function NavBar() {
  return (
    <div class="navbar" >
      <center>
        <ul className="flex space-x-20 text-blue-50 bg-lantern-blue text-xl
          w-screen pb-12 font-Kiona">
          <li className="pl-20 pr-34">
            <Link href="/" className="hover:underline">
              <Image src={Logo} height={250} width={250} alt="lantern logo" />
            </Link>
          </li>
          <li className="pl-20 pt-12">
            <Link href="/Magazine" className="hover:underline">
              Magazine
            </Link>
          </li>
          <li className="pt-12">
            <Link href="/Events" className="hover:underline">
              Events
            </Link>
          </li>
          <li className="pt-12">
            <Link href="/AboutUs" className="hover:underline">
              About Us
            </Link>
          </li>
          <li className="pt-12">
            <Link href="/ContactUs" className="hover:underline">
              Contact Us
            </Link>
          </li>
          <li className="pt-12">
            <Link href="/Resources" className="hover:underline">
              Resources
            </Link>
          </li>
        </ul>
      </center>
    </div>
  );
}
