import React from "react";

const Section4 = () => {
  return (
    <>
      <div id="portfolio" className="mx-[5%] xl:mx-auto  max-w-[1216px] mt-10">
        <h6 className="text-[24px] font-normal  font-inter tracking-[0.44px] mb-2">
          Portfolio
        </h6>
        <div className="grid grid-cols-12 gap-[20px]">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="w-full h-[298px] relative">
              <div className="absolute z-10 bg-[#000] bg-opacity-25 h-[40px] w-full bottom-[38px] flex items-center justify-center">
                <span className="flex items-center justify-center text-[#FFFFFF] font-montserrat font-normal text-[16px]">
                  Title
                </span>
              </div>
              <img
                className="object-cover rounded-[8px]"
                src={require("../../assets/images/portfolio-1.jpg")}
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="w-full h-[298px] relative">
              <div className="absolute z-10 bg-[#000] bg-opacity-25 h-[40px] w-full bottom-[38px] flex items-center justify-center">
                <span className="flex items-center justify-center text-[#FFFFFF] font-montserrat font-normal text-[16px]">
                  Title
                </span>
              </div>
              <img
                className="object-cover rounded-[8px]"
                src={require("../../assets/images/portfolio-2.jpg")}
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="w-full h-[298px] relative">
              <div className="absolute z-10 bg-[#000] bg-opacity-25 h-[40px] w-full bottom-[38px] flex items-center justify-center">
                <span className="flex items-center justify-center text-[#FFFFFF] font-montserrat font-normal text-[16px]">
                  Title
                </span>
              </div>
              <img
                className="object-cover rounded-[8px]"
                src={require("../../assets/images/portfolio-3.jpg")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
