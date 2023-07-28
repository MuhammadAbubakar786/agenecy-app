import React from "react";

const Section3 = () => {
  const Data = [
    {
      heading: "Services",
      paragraph: "What services do you offer? Select up to 3.",
      tags: [
        "Full Service",
        "Social Ads ",
        "Search Ads ",
        "SEO ",
        "CRO ",
        "Email ",
        "PR ",
        "Lead Gen ",
        "Amazon ",
        "Content ",
        "Ghostwriting ",
        "Branding ",
        "Influencer ",
        "Recruiting ",
      ],
      redline:
        " No more than three services can be chosen. Please deselect a service before adding a new one.",
    },
    {
      heading: "Industries",
      paragraph: "What are you an expert in? Select up to 3.",
      tags: [
        "All",
        "E-Comm ",
        "SaaS",
        "Personal Brands ",
        "Retail ",
        "Non-profit ",
        "Logistics ",
        "Real Estate ",
        "Politics/Government ",
        "Medical ",
        "Local Business ",
        "Cannabis ",
        "Legal ",
        "Hospitality/travel ",
        "Financial Services ",
        "Education ",
        "Dental ",
        "Entertainment ",
      ],
      redline:
        " No more than three industries can be chosen. Please deselect an industry before adding a new one.",
    },
    {
      heading: "Minority Owned (Optional)",
      paragraph:
        "We value and celebrate diversity. Do any of these apply to your organization ?",
      tags: [
        "LGBTQ Owned",
        "Woman Owned",
        "Black Owned",
        "Asian Owned ",
        "Vateran Owned ",
      ],
      redline:
        " No more than three services can be chosen. Please deselect a service before adding a new one.",
      checkbox: (
        <div className="flex items-center justify-center mt-5">
       
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-checkbox"
            className="ml-2 text-[14px]  font-normal text-black dark:text-white font-montserrat"
          >
            Not Applicable
          </label>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="mx-[5%] xl:mx-auto max-w-[1216px] mt-10">
        <div className="grid grid-cols-12">
        {Data?.map((item) => {
          return (
            <>
            <div className="col-span-12 min-w-[400px] flex justify-center mx-auto ">
              <div className="my-5">
                <h5 className="text-[16px] font-montserrat font-semibold mb-2 flex items-center justify-center text-center">
                  {item?.heading}
                </h5>
                <p className="text-[14px] font-medium text-[#667085] font-montserrat flex items-center justify-center text-center">
                  {item?.paragraph}
                </p>
                <div className="flex items-center justify-center flex-wrap gap-[8px] mt-[30px] mx-[5%] lg:mx-[12%]">
                  {item?.tags.map((text) => {
                    return (
                      <>
                        <button className="text-[14px] font-inter font-medium px-2 py-1 border border-[#D0D5DD] rounded-[8px] hover:border-[#85A2FA] hover:text-[#3364F7] hover:bg-[#EFF3FF]">
                          {text}
                        </button>
                      </>
                    );
                  })}
                </div>
                <p className="text-[#F04438] font-montserrat text-[14px] font-medium text-center mt-2">
                  {item?.redline}
                </p>
                <div>{item?.checkbox}</div>
              </div>
        </div>
            </>
          );
        })}

        </div>
      </div>
    </>
  );
};

export default Section3;
