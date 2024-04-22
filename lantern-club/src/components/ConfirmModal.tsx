import { useRef, useState } from "react";
import React from "react";

interface ConfirmProps {
    isVisible: boolean;
    onClose: () => void;
    onDelete: () => void;
}

const ConfirmModal = ({ isVisible, onClose, onDelete }: ConfirmProps) => {
    if (!isVisible) return null;

    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="flex fixed backdrop-blur-sm inset-0 justify-center items-center" style={{ zIndex: 999}}>
          <div className="bg-white p-8 text-center rounded-3xl border-[#f79838] border-8">
            <h3 className="text-xl font-nunito mb-4 break-want">
              Are you sure you want to delete?
            </h3>
            <div className="flex justify-center mt-6 gap-6">
              <button
                onClick={onDelete}
                className={
                  isLoading
                    ? "flex bg-[#4279bc] text-white border-[#94bbe3] border-2 font-bold py-2 pl-4 rounded-3xl"
                    : "flex bg-[#4279bc] text-white border-[#94bbe3] border-2 font-bold py-2 px-8 rounded-3xl hover:bg-white hover:text-[#4279bc] "
                }
              >
                <div className={isLoading ? "pr-2" : ""}>{"Delete"}</div>
                {isLoading && (
                  <svg
                    className="animate-spin h-5 w-5 mr-3 "
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
              </button>
              <a
                href="#"
                className="font-nunito underline text-l mt-3 ml-3"
                onClick={onClose}
              >
                Cancel
              </a>
            </div>
          </div>
        </div>
    );
}

export default ConfirmModal;