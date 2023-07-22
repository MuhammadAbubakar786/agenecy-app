import React from "react";
import { FiUsers as Users } from "react-icons/fi";
import { Link } from "react-router-dom";
import RatingStars from "../../Components/RatingStars";
// import {FiLocation as Location} from "react-icons/fi"

const Sections3 = () => {
  return (
    <>
      <Link to={"/AgencyDetails"}>
      <div className="mx-[5%] xl:mx-auto bg-[#F9FAFB] rounded-[16px] border border-[#EAECF0] max-w-[1216px]  my-5">
        <div className="flex items-center gap-[24px] pt-5 pr-5">
          <div className="pl-5">
            <img alt="" src={require("../../assets/images/Logomark.svg").default} />
          </div>
          <div className="flex gap-[24px]">
            <div>
              <h6 className="text-[22px] font-bold uppercase font-babas tracking-[0.44px] mb-2">
                AGENCY NAME
              </h6>
              <p className="text-[14px] font-normal font-montserrat leading-[20px] text-black mb-3">
                Lorem ipsum dolor sit amet consectetur. Commodo aliquam posuere
                arcu sed neque hac suscipit faucibus. Nibh vulputate nullam
                proin risus magna nulla. Ultrices s uspendisse elementum nibh
                nibh nulla tortor.
              </p>
              <div className="flex items-center gap-[8px] mb-5">
                <div className="flex justify-center bg-[#3364F7] items-center gap-[8px] h-[38px] pr-[9px] max-w-fit rounded-tl-xl rounded-bl-md rounded-tr-md rounded-br-xl">
                  <p className="text-[18px] uppercase font-bold text-[#FFF] italic px-[2px]">
                    ANDROID DEVELOPMENT
                  </p>
                </div>
                <div className="flex justify-center bg-[#3364F7] items-center gap-[8px] h-[38px] pr-[9px] max-w-fit rounded-tl-xl rounded-bl-md rounded-tr-md rounded-br-xl">
                  <p className="text-[18px] uppercase font-bold text-[#FFF] italic px-[2px]">
                    Graphic design{" "}
                  </p>
                </div>
                <div className="flex justify-center bg-[#3364F7] items-center gap-[8px] h-[38px] pr-[9px] max-w-fit rounded-tl-xl rounded-bl-md rounded-tr-md rounded-br-xl">
                  <p className="text-[18px] uppercase font-bold text-[#FFF] italic px-[2px]">
                    ui/ux design
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <img alt="" src={require("../../assets/images/layer.png")} />
            </div>
          </div>
        </div>
        <div className="border-t-[1px]">
          <div className="grid grid-cols-12 justify-between">
            <div className="flex items-center justify-center col-span-3  border-r border-[#EAECF0] px-2 py-2 h-[56px]">
              <p className="text-[14px] font-semibold font-montserrat">
                Avg. Monthly Retainer : $50 - $99{" "}
              </p>
            </div>
            <div className="col-span-2 flex justify-center items-center border-r border-[#EAECF0] px-2 py-2 h-[56px]">
              <p className="text-[14px] font-semibold font-montserrat flex justify-center items-center gap-1">
                <Users /> 50-100
              </p>
            </div>
            <div className="flex justify-center col-span-2 border-r border-[#EAECF0] px-2 py-2 h-[56px]">
              <p className="text-[14px] font-semibold font-montserrat flex justify-center items-center gap-1">
                <img
                alt=""
                  className="w-[16px] h-[16px]"
                  src={require("../../assets/images/location.svg").default}
                />{" "}
                New York, USA
              </p>
            </div>
            <div className="flex items-center justify-center col-span-2 border-r border-[#EAECF0] px-2 py-2 h-[56px]">
              <p className="text-[14px] font-semibold font-montserrat">
                Total Reviews : 300
              </p>
            </div>
            <div className="flex items-center justify-center col-span-3 px-2 py-2 h-[56px]">
              <RatingStars rating={3}/> <span className="text-[16px] font-bold">4.9</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
    </>
  );
};

export default Sections3;
