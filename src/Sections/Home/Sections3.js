import React from "react";
import RatingStars from "../../Components/RatingStars";
import {FiUsers as Users} from "react-icons/fi"
// import {FiLocation as Location} from "react-icons/fi"

const Sections3 = () => {
  return (
    <>
      <div className="mx-[5%] bg-[#F9FAFB] rounded-[16px] border-[1px] border-[#EAECF0]  my-5">
        <div className="flex items-center gap-[24px] p-3">
          <div>
            <img
              src={require("../../assests/images/Logomark.svg").default}
            />
          </div>
          <div className="flex gap-[24px]">
            <div>
              <h6 className="text-[20px] font-semibold font-serif mb-2">
                AGENCY NAME
              </h6>
              <p className="text-[16px] font-normal font-serif leading-[24px] text-black mb-3">
              Lorem ipsum dolor sit amet consectetur. Commodo aliquam posuere arcu sed neque hac suscipit faucibus. Nibh vulputate nullam proin risus magna nulla. Ultrices s uspendisse elementum nibh nibh nulla tortor.  
              </p>
           
              <div className="flex justify-center bg-[#3364F7] items-center gap-[8px] h-[38px] pr-[9px] max-w-fit ">
                <p className="text-[18px] uppercase font-bold text-[#FFF] italic rounded-tl-xl rounded-bl-md">ANDROID DEVELOPMENT</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={require("../../assests/images/layer.png")}
              />
            </div>
          </div>
        </div>
        <div className="border-t-[1px]">
          <div className="grid grid-cols-12 justify-between">
            <div className="flex justify-center col-span-3  border-r-[1px] border-[#EAECF0] px-2 py-2">
              <p className="text-[14px] font-semibold">
                Avg. Monthly Retainer : $50 - $99{" "}
              </p>
            </div>
            <div className="col-span-2 border-r-[1px] border-[#EAECF0] px-2 py-2">
              <p className="text-[14px] font-semibold flex justify-center items-center gap-1">
               <Users/> 50-100
              </p>
            </div>
            <div className="flex justify-center col-span-2 border-r-[1px] border-[#EAECF0] px-2 py-2">
              <p className="text-[14px] font-semibold flex justify-center items-center gap-1">
                New York, USA
              </p>
            </div>
            <div className="flex justify-center col-span-2 border-r-[1px] border-[#EAECF0] px-2 py-2">
              <p className="text-[14px] font-semibold">
               Total Reviews : 300
              </p>
            </div>
            <div className="flex items-center justify-center col-span-3 px-2 py-2">
              <RatingStars/> <span className="text-[16px] font-bold">4.9</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sections3;
