import React from "react";
import RatingStars from "../../Components/RatingStars";

const Section5 = () => {
  return (
    <>
      <div id="snapshot" className="mx-[5%] xl:mx-auto  max-w-[1216px] mt-10">
        <h6 className="text-[24px] font-semibold  font-inter tracking-[0.44px] mb-2">
          Snapshot
        </h6>
        <div className="grid grid-cols-12 gap-[15px]">
          <div className="col-span-12 md:col-span-6 lg:col-span-3  bg-[#F2F4F7] rounded-[8px] flex justify-center py-10">
            <div className="flex flex-col gap-2">
              <span className="text-[14px] capitalize font-montserrat font-semibold tracking-[0.44px] flex justify-center">
                Verfied client reviews
              </span>
              <span className="text-[24px] font-inter font-semibold tracking-[0.44px] flex justify-center">
                235
              </span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3  bg-[#F2F4F7] rounded-[8px] flex justify-center py-10">
            <div className="flex flex-col gap-2">
              <span className="text-[14px] capitalize font-montserrat font-semibold tracking-[0.44px] flex justify-center">
                Overall rating
              </span>
              <div className="flex items-center justify-center gap-1 h-[24px]">
              <span className="text-[24px] font-inter font-semibold">4.9</span> <RatingStars rating={5}/> 
            </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3  bg-[#F2F4F7] rounded-[8px] flex justify-center py-10">
            <div className="flex flex-col gap-2">
              <span className="text-[14px] capitalize font-montserrat font-semibold tracking-[0.44px] flex justify-center">
                Average monthly retainer
              </span>
              <span className="text-[24px] font-inter font-semibold tracking-[0.44px] flex justify-center">
              $10,000 to $49,000
              </span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3  bg-[#F2F4F7] rounded-[8px] flex justify-center py-10">
            <div className="flex flex-col gap-2">
              <span className="text-[14px] capitalize font-montserrat font-semibold tracking-[0.44px] flex justify-center">
                last updated
              </span>
              <span className="text-[24px] font-inter font-semibold tracking-[0.44px] flex justify-center">
              June 13, 2023
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
