import Image from "next/image";
import Logo from "../images/lanternicon1.png";
import Email from "../images/email.png";
import Insta from "../images/insta.png";

export interface showAdminLogin {
  state: boolean;
}

export default function Footer({
  showAdminLogin,
}: {
  showAdminLogin: boolean;
}) {
  return (
    <div className="flex grid grid-cols-3 w-full">
      {/* image column div */}
      <div className="ml-10 text-left inline-flex">
        <Image
          src={Logo} // Route of the image file
          height={197} // Desired size with correct aspect ratio
          width={192} // Desired size with correct aspect ratio
          alt="Lantern Club Logo"
        />
        <div className="self-center ml-20">
          <p className="py-1">Magazine</p>
          <p className="py-1">Events</p>
          <p className="py-1">About Us</p>
          <p className="py-1">Contact Us</p>
          <p className="py-1">Resources</p>
        </div>
      </div>
      {/* empty column div */}
      <div className="text-left justify-self-left self-center"></div>
      {/* contact/button column div */}
      <div className="text-left justify-self-end self-center mr-10">
        <div>
          <div className="inline-flex indent-2">
            <a href="mailto:ststhinkthank@gmail.com">
              <Image src={Email} height={48} width={48} alt="email icon" />
            </a>
            <p className="py-3">ststhinktank@gmail.com</p>
          </div>
        </div>
        <div>
          <div className="ml-1 inline-flex indent-3">
            <a
              href="https://www.instagram.com/thelanterntufts/"
              target="_blank"
            >
              <Image src={Insta} height={40} width={41} alt="instagram icon" />
            </a>
            <p className="py-2"> thelanterntufts</p>
          </div>
        </div>
        <div>
          {showAdminLogin && (
            <button className="inline-flex items-center hover:underline">
              {" "}
              Admin Login{" "}
            </button>
          )}
        </div>
      </div>
    </div> // return div
  );
}
