import React from "react";
import RatingStars from "../../Components/RatingStars";
import Collapse from "../../Components/Collapse/Collapse";

const Section7 = () => {
  return (
    <>
      <div className="mx-[5%] xl:mx-auto bg-[#F9FAFB] rounded-[8px] border border-[#EAECF0] max-w-[1216px] mt-10 mb-5">
        <div className="flex items-center justify-between h-[30px] p-3 mt-5">
          <div className="flex items-center gap-2">
            <div>
              <h6 className="text-[16px] font-semibold  font-montserrat tracking-[0.44px]">
                December 26, 2018
              </h6>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center gap-1 h-[24px]">
              <RatingStars rating={4} />{" "}
              <span className="text-[24px] font-inter font-semibold">4.9</span>
            </div>
          </div>
        </div>
        <div className="border-t max-w-[1216px] mt-5 border-[#EAECF0] mx-[5%] xl:mx-auto "></div>
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-6 xl:col-span-8 border-r border-[#EAECF0]">
            <div className="p-3">
              <h6 className="text-[16px] font-semibold  font-montserrat tracking-[0.44px]">
                Pros
              </h6>
              <p className="text-[14px] font-normal font-montserrat leading-[20px] text-black">
              Lorem ipsum dolor sit amet consectetur. Commodo aliquam posuere
                arcu sed neque hac suscipit faucibus. Nibh vulputate nullam
                proin risus magna nulla. Ultrices s uspendisse elementum nibh
                nibh nulla tortor.
              <Collapse>
                Lorem ipsum dolor sit amet consectetur. Commodo aliquam posuere
                arcu sed neque hac suscipit faucibus. Nibh vulputate nullam
                proin risus magna nulla. Ultrices s uspendisse elementum nibh
                nibh nulla tortor.
              </Collapse>
              </p>
            </div>
            <div className="p-3 mt-5">
              <h6 className="text-[16px] font-semibold  font-montserrat tracking-[0.44px]">
                Cons
              </h6>
              <p className="text-[14px] font-normal font-montserrat leading-[20px] text-black">
                Lorem ipsum dolor sit amet consectetur. Commodo aliquam posuere
                arcu sed neque hac suscipit faucibus. Nibh vulputate nullam
                proin risus magna nulla. Ultrices s uspendisse elementum nibh
                nibh nulla tortor.
                <Collapse>
                Lorem ipsum dolor sit amet consectetur. Commodo aliquam posuere
                arcu sed neque hac suscipit faucibus. Nibh vulputate nullam
                proin risus magna nulla. Ultrices s uspendisse elementum nibh
                nibh nulla tortor.
              </Collapse>
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 xl:col-span-4 p-3">
            <p className="text-[14px] font-semibold font-montserrat flex justify-center items-center gap-1 my-10">
              <img
                alt=""
                className="w-[16px] h-[16px]"
                src={require("../../assets/images/location.svg").default}
              />{" "}
              Jacksonville, Georgia
            </p>
            <div className="flex items-center justify-between ml-10 mt-3">
              <span className="text-[14px] font-montserrat font-medium text-[#667085]">
                Value
              </span>
              <RatingStars rating={4} />
            </div>
            <div className="flex items-center justify-between ml-10 mt-3">
              <span className="text-[14px] font-montserrat font-medium text-[#667085]">
                Communication
              </span>
              <RatingStars rating={4} />
            </div>
            <div className="flex items-center justify-between ml-10 mt-3">
              <span className="text-[14px] font-montserrat font-medium text-[#667085]">
                Domain knowledge
              </span>
              <RatingStars rating={4} />
            </div>
            <div className="flex items-center justify-between ml-10 mt-3">
              <span className="text-[14px] font-montserrat font-medium text-[#667085]">
                Would Recommend
              </span>
              <RatingStars rating={4} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section7;
