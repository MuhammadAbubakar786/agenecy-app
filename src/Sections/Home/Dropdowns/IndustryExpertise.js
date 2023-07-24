import React from "react";

const IndustryExpertise = () => {
  const ExpertiesData = [
    {
      buttonText: "E-comm"
    },
    {
      buttonText: "SaaS"
    },
    {
      buttonText: "Personal Brands"
    },
    {
      buttonText: "Retail"
    },
    {
      buttonText: "Non-profit"
    },
    {
      buttonText: "Logistics"
    },
    {
      buttonText: "Real Estate"
    },
    {
      buttonText: "Politics/Government "
    },
    {
      buttonText: "Medical "
    },
    {
      buttonText: "Local Business "
    },
    {
      buttonText: "Cannabis "
    },
    {
      buttonText: "Legal "
    },
    {
      buttonText: "Hospitality/Travel "
    },
    {
      buttonText: "Financial Services "
    },
    {
      buttonText: "Education "
    },
    {
      buttonText: "Dental "
    },
    {
      buttonText: "Entertainment "
    },

  ]
  return (
    <>
      <div
        className="absolute mx-auto xl:mx-0 mt-[1000px] sm:mt-[550px] md:mt-[400px] xl:right-[18%] z-10 lg:mt-[300px] w-[80%] lg:w-[80%] xl:w-[800px] p-10 origin-top-right rounded-[8px] bg-white border border-whiteColor py-1 card-shadow ring-black ring-opacity-5 bg-whiteColor"
        role="menu"
        aria-orientation="vertical"
      >
        <div className="grid grid-cols-12 gap-x-5 gap-y-2 py-2  justify-items-center md:justify-items-start">
        {
          ExpertiesData?.map((item)=>{
            return <>
            <div className="col-span-full sm:col-span-6 md:col-span-4 w-full">
            <button className="hover:bg-[#F9FAFB] text-[14px] font-montserrat font-medium w-full flex items-center justify-start p-1 rounded-[6px] text-[#344054] py-1">
              {item.buttonText}
            </button>
          </div>
            </>
          })
        }
         
          
        </div>
      </div>
    </>
  );
};

export default IndustryExpertise;
