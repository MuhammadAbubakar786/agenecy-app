import React from "react";

const Section6 = () => {
  return (
    <>
      <div id="reviews" className="flex items-center justify-between mx-[5%] xl:mx-auto  max-w-[1216px] mt-10">
        <div className="flex items-center gap-2">
          <div>
          <h6 className="text-[24px] font-semibold  font-inter tracking-[0.44px] mb-2">
              Reviews
            </h6>
          </div>
        </div>
        <div className="flex items-center gap-3">
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
          <div>
          <button className="bg-[#329BFA] px-[16px] py-[8px] rounded-[8px] text-[#FFFFFF] flex items-center justify-center text-[14px] font-montserrat font-semibold" type="submit">
                  Submit a review
                </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section6;
