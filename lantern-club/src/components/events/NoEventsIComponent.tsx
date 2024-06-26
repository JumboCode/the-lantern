import { EventType } from "@/types/event";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Session } from "next-auth";

interface EventsIProps {
    events?: EventType[];
    session?: Session | null;
    setShowAddModal: (value: boolean) => void;
  }
  
  
// Component for no events scenario
const NoEventsComponent = ({ session, setShowAddModal }: EventsIProps) => (
    <>
      <div className="-mt-20 pb-0 pt-40 md:py-40 px-20 h-auto flex flex-col bg-gradient-to-t from-contact-g2 to-g-yellow1" style={{ minHeight: "700px" }}>
        <div className="flex flex-col md:flex-row mb-10 md:mb-20">
          <h1 className={"font-coolvetica md:text-8xl text-6xl flex items-end"}>
            {session?.user.isAdmin ? "Edit Upcoming Events" : "Upcoming Events"}
            
          </h1>
          {session?.user.isAdmin && (
              <div className="flex items-center ml:0 md:ml-auto">
                <FontAwesomeIcon onClick={() => setShowAddModal(true)} icon={faCirclePlus} className="text-7xl cursor-pointer transition-all duration-500 hover:text-orange-400" />
              </div>
          )}
        </div>
        <div className="flex justify-between items-center px-10 py-10">
          <div className="relative">
            <div className="flex-col md:flex-row md:grid orange mellow-yellow-border font-nunito text-md rounded-3xl p-6 shadow-md max-w-md border border-solid border-#94BBE3">
              <div className="flex flex-col justify-center items-center text-center">
                <p> We don't currently have any upcoming events. </p>
              </div>
  
              <div className="absolute right-0 w-[46px] h-[96px] sm:w-[92px] sm:h-[192px] hidden md:flex items-center mr-[-100px] pb-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 108 216"
                  fill="none"
                >
                  <path
                    //   d="M2.4165 1.93115C29.0221 1.93115 49.5194 14.4388 62.9936 37.5376C73.3201 55.24 74.3398 76.3712 69.8375 95.8026C67.4766 105.992 56.2213 142.988 38.6703 133.305C33.0337 130.195 29.9604 123.096 32.9363 117.259C37.2471 108.803 46.1708 105.395 54.9013 103.109C63.865 100.761 77.6779 99.7789 85.6523 105.143C94.6506 111.197 97.7599 123.193 98.785 133.444C100.045 146.048 99.4784 159.731 96.8891 172.102C95.4991 178.743 92.7931 185.978 92.3111 192.726C91.9974 197.118 89.4752 201.339 89.0279 205.812C88.8528 207.563 88.283 214.16 87.2707 209.604C86.7472 207.248 84.112 204.769 83.9875 202.529C83.8729 200.466 82.885 198.048 81.9066 196.287C80.7687 194.238 77.687 184.373 79.0396 190.46C80.0134 194.842 82.7542 198.837 83.9413 202.992C84.4953 204.931 84.1818 206.934 85.4673 208.541C87.1784 210.68 84.5925 214.194 88.9817 211.87C92.2525 210.139 95.311 206.651 97.9526 204.009C99.3854 202.576 100.82 200.875 102.716 200.032C103.68 199.604 107.615 196.288 105.166 198.737C99.7613 204.143 93.0032 211.732 85.6523 214.182"
                    d="M2 2C28.6056 2 49.1029 14.5077 62.5771 37.6064C72.9036 55.3089 73.9233 76.4401 69.421 95.8714C67.0601 106.061 55.8048 143.057 38.2538 133.374C32.6172 130.264 29.5439 123.165 32.5198 117.328C36.8306 108.872 45.7543 105.464 54.4848 103.178C63.4485 100.83 77.2614 99.8478 85.2357 105.212C94.2341 111.266 97.3434 123.261 98.3685 133.512C99.6289 146.117 99.0619 159.8 96.4726 172.171C95.0826 178.812 94.8018 182.252 94.3198 189C94.0061 193.392 92.5 196.902 91 202C90.824 202.598 88.5 216.5 86.8542 209.673C86.3307 207.317 83.6955 204.838 83.571 202.598M76.0983 184.968C77.0721 189.35 79.8129 193.345 81 197.5M88.1489 211.351C92.9321 207.851 93.8945 207.141 96.5361 204.5C97.9689 203.067 101.5 199 103 197.5C104.201 194.899 110 187 108 190.529"
                    stroke="black"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="10 10"
                    transform="translate(-2,0)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center px-10 py-20">
          <div className="flex-col md:flex-row md:grid blue font-nunito text-md text-white rounded-3xl p-5 shadow-md border border-solid blue-border">
            <div className="flex flex-col justify-center items-center text-center">
              <p>
                {" "}
                Follow us on our Instagram, <b>@thelanterntufts</b>, to get our
                most up-to-date flyers and endeavors!{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20 w-full flex mellow-yellow" id="triangle"></div>
    </>
); export default NoEventsComponent;