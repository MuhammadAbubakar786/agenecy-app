import React from "react";

const Section2 = () => {
  return (
    <>
    
      <div className="flex items-center justify-between mx-[5%] xl:mx-auto  max-w-[1216px] mt-10">
        <div className="flex items-center gap-2">
          <div>
            <button className="flex items-center justify-between rounded-lg border px-2 py-1 border-gray-700 text-black text-[14px] font-samibold font-inter">
              Services:
              <svg
                sidebar-toggle-item
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-[8px]">
                <div className="flex justify-center bg-[#3364F7] items-center gap-[8px] px-2 py-1 h-[38px]  max-w-fit rounded-tl-xl rounded-bl-md rounded-tr-md rounded-br-xl">
                  <p className="text-[14px] uppercase font-bold text-[#FFF] italic flex items-center justify-between">
                    Full service <span className="w-[14px] h-[14px] bg-[#FFF] rounded-full flex items-center justify-center p-1 text-black ml-3"> <img src={require("../../assets/images/cross-black.svg").default}/> </span>
                  </p>
                </div>
                <div className="flex justify-center bg-[#3364F7] items-center gap-[8px] px-2 py-1 h-[38px]  max-w-fit rounded-tl-xl rounded-bl-md rounded-tr-md rounded-br-xl">
                  <p className="text-[14px] uppercase font-bold text-[#FFF] italic flex items-center justify-between">
                    Social ads <span className="w-[14px] h-[14px] bg-[#FFF] rounded-full flex items-center justify-center p-1 text-black ml-3"> <img src={require("../../assets/images/cross-black.svg").default}/> </span>
                  </p>
                </div>
              </div>
        </div>
        <div className="flex items-center gap-3">
        <div>
            <button className="flex items-center justify-between rounded-lg border px-2 py-1 border-gray-700 text-black text-[14px] font-samibold font-inter">
              Industry experties
              <svg
                sidebar-toggle-item
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div>
            <button className="flex items-center justify-between rounded-lg border px-2 py-1 border-gray-700 text-black text-[14px] font-samibold font-inter">
              Ownership
              <svg
                sidebar-toggle-item
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div>
            <button className="flex items-center justify-between rounded-lg border px-2 py-1 border-gray-700 text-black text-[14px] font-samibold font-inter">
             Sort by
              <svg
                sidebar-toggle-item
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="border-t my-10 max-w-[1216px] border-[#EAECF0] mx-[5%] xl:mx-auto "></div>
    </>
  );
};

export default Section2;
