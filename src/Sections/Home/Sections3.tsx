import React from "react";
import { FiUsers as Users } from "react-icons/fi";
import { Link } from "react-router-dom";
import RatingStars from "../../Components/RatingStars";
const Sections3 = () => {
  const data = [
    {
      agencyName: "NetSole",
      agencyDescription: ` Lorem ipsum dolor sit amet consectetur. Commodo aliquam posuere
      arcu sed neque hac suscipit faucibus. Nibh vulputate nullam
      proin risus magna nulla. Ultrices s uspendisse elementum nibh
      nibh nulla tortor.`,
      agencyServices: [
        {
          serviceName: "ANDROID DEVELOPMENT",
        },
        {
          serviceName: "Graphic design",
        },
        {
          serviceName: "ui/ux design",
        },
      ],
      agencyBadgeLogo: "../../assets/images/layer.png",
      monthlyRetainer: "Avg. Monthly Retainer : $50 - $99",
      users: "50-100",
      location: "New York, USA",
      reviews: "300",
      rating: 3,
      avgRating: 4.9,
    },
    {
      agencyName: "NetSole",
      agencyDescription: ` Lorem ipsum dolor sit amet consectetur. Commodo aliquam posuere
      arcu sed neque hac suscipit faucibus. Nibh vulputate nullam
      proin risus magna nulla. Ultrices s uspendisse elementum nibh
      nibh nulla tortor.`,
      agencyServices: [
        {
          serviceName: "ANDROID DEVELOPMENT",
        },
        {
          serviceName: "Graphic design",
        },
        {
          serviceName: "ui/ux design",
        },
      ],
      agencyBadgeLogo: "../../assets/images/layer.png",
      monthlyRetainer: "Avg. Monthly Retainer : $50 - $99",
      users: "50-100",
      location: "New York, USA",
      reviews: "300",
      rating: 3,
      avgRating: 4.9,
    },
    {
      agencyName: "NetSole",
      agencyDescription: ` Lorem ipsum dolor sit amet consectetur. Commodo aliquam posuere
      arcu sed neque hac suscipit faucibus. Nibh vulputate nullam
      proin risus magna nulla. Ultrices s uspendisse elementum nibh
      nibh nulla tortor.`,
      agencyServices: [
        {
          serviceName: "ANDROID DEVELOPMENT",
        },
        {
          serviceName: "Graphic design",
        },
        {
          serviceName: "ui/ux design",
        },
      ],
      agencyBadgeLogo: "../../assets/images/layer.png",
      monthlyRetainer: "Avg. Monthly Retainer : $50 - $99",
      users: "50-100",
      location: "New York, USA",
      reviews: "300",
      rating: 3,
      avgRating: 4.9,
    },
    {
      agencyName: "NetSole",
      agencyDescription: ` Lorem ipsum dolor sit amet consectetur. Commodo aliquam posuere
      arcu sed neque hac suscipit faucibus. Nibh vulputate nullam
      proin risus magna nulla. Ultrices s uspendisse elementum nibh
      nibh nulla tortor.`,
      agencyServices: [
        {
          serviceName: "ANDROID DEVELOPMENT",
        },
        {
          serviceName: "Graphic design",
        },
        {
          serviceName: "ui/ux design",
        },
      ],
      agencyBadgeLogo: "../../assets/images/layer.png",
      monthlyRetainer: "Avg. Monthly Retainer : $50 - $99",
      users: "50-100",
      location: "New York, USA",
      reviews: "300",
      rating: 3,
      avgRating: 4.9,
    },
    {
      agencyName: "NetSole",
      agencyDescription: ` Lorem ipsum dolor sit amet consectetur. Commodo aliquam posuere
      arcu sed neque hac suscipit faucibus. Nibh vulputate nullam
      proin risus magna nulla. Ultrices s uspendisse elementum nibh
      nibh nulla tortor.`,
      agencyServices: [
        {
          serviceName: "ANDROID DEVELOPMENT",
        },
        {
          serviceName: "Graphic design",
        },
        {
          serviceName: "ui/ux design",
        },
      ],
      agencyBadgeLogo: "../../assets/images/layer.png",
      monthlyRetainer: "Avg. Monthly Retainer : $50 - $99",
      users: "50-100",
      location: "New York, USA",
      reviews: "300",
      rating: 3,
      avgRating: 4.9,
    },
  ];
  return (
    <>
        {data?.map((item, index) => {
          return (
            <>
              <div className="mx-[5%] xl:mx-auto bg-[#F9FAFB] rounded-[16px] border border-[#EAECF0] max-w-[1216px] my-5">
            <Link to={"/AgencyDetails"}>
                <div className="flex items-center justify-between mx-5 mt-5 lg:hidden">
                <img
                      className="w-[80px] h-[80px]"
                      alt=""
                      src={require("../../assets/images/Logomark.svg").default}
                    />
                      <img
                       className="w-[80px] h-[80px]"
                        alt=""
                        src={require("../../assets/images/layer.png")}
                      />
                </div>
                <div className="flex items-center gap-[24px] pt-5 pr-5">
                  <div className="pl-5 hidden lg:block">
                    <img
                      className="w-[80px] h-[80px]"
                      alt=""
                      src={require("../../assets/images/Logomark.svg").default}
                    />
                  </div>
                  <div className="flex gap-[10px] lg:gap-[24px] -mt-[5%] lg:-mt-0">
                    <div className="p-5 lg:p-0 mx-[10%] lg:mx-0">
                      <h6 className="text-[22px] font-bold uppercase font-babas tracking-[0.44px] mb-2">
                        {item.agencyName}
                      </h6>
                      <p className="text-[12px] xl:text-[14px] font-normal font-montserrat leading-[20px] text-black mb-3">
                        {item.agencyDescription}
                      </p>
                      <div className="flex items-center flex-wrap lg:flex-nowrap gap-[8px] mb-5">
                        {item.agencyServices.map(
                          (serviceItem, serviceIndex) => {
                            return (
                              <div
                                key={serviceIndex}
                                className="flex justify-center bg-[#3364F7] items-center gap-[8px] h-[38px] pr-[9px] max-w-fit rounded-tl-xl rounded-bl-md rounded-tr-md rounded-br-xl"
                              >
                                <p className="text-[14px] sm:text-[18px] uppercase font-bold text-[#FFF] italic px-[2px]">
                                  {serviceItem.serviceName}
                                </p>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    <div className="mt-5 hidden lg:block">
                      <img
                        alt=""
                        src={require("../../assets/images/layer.png")}
                      />
                    </div>
                  </div>
                </div>
                <div className="border-t-[1px] border-[#EAECF0]">
                  <div className="grid grid-cols-12 justify-between">
                    <div className="flex items-center justify-center col-span-6 lg:col-span-3 border-b lg:border-b-0  border-r border-[#EAECF0] px-2 py-2 h-[56px]">
                      <p className="text-[12px] xl:text-[14px] font-semibold font-montserrat">
                        {item.monthlyRetainer}
                      </p>
                    </div>
                    <div className="col-span-6 lg:col-span-2 flex justify-center items-center border-b lg:border-b-0 lg:border-r border-[#EAECF0] px-2 py-2 h-[56px]">
                      <p className="text-[12px] xl:text-[14px] font-semibold font-montserrat flex justify-center items-center gap-1">
                        <Users />
                        {item.users}
                      </p>
                    </div>
                    <div className="flex justify-center col-span-6 lg:col-span-2 border-b lg:border-b-0 border-r border-[#EAECF0] px-2 py-2 h-[56px]">
                      <p className="text-[12px] xl:text-[14px] font-semibold font-montserrat flex justify-center items-center gap-1">
                        <img
                          alt=""
                          className="w-[16px] h-[16px]"
                          src={
                            require("../../assets/images/location.svg").default
                          }
                        />
                        {item.location}
                      </p>
                    </div>
                    <div className="flex items-center justify-center col-span-6 lg:col-span-2 border-b lg:border-b-0 lg:border-r border-[#EAECF0] px-2 py-2 h-[56px]">
                      <p className="text-[12px] xl:text-[14px] font-semibold font-montserrat">
                        Total Reviews : {item.reviews}
                      </p>
                    </div>
                    <div className="flex items-center justify-center col-span-12 lg:col-span-3 px-2 py-2 h-[56px]">
                      <RatingStars rating={item.rating} />{" "}
                      <span className="text-[16px] font-bold">
                        {item.avgRating}
                      </span>
                    </div>
                  </div>
                </div>
            </Link>
              </div>
            </>
          );
        })}
    </>
  );
};

export default Sections3;
