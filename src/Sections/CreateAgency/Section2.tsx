import React, { useState } from "react";

const Section2 = () => {
  const [employee, setEmployee] = useState(false);
  const [retainer, setRetainer] = useState(false);
  const Employees = [
    { number: "365 - 365" },
    { number: "365 - 365" },
    { number: "365 - 365" },
    { number: "365 - 365" },
    { number: "365 - 365" },
  ];
  const Retainer = [
    { number: "365" },
    { number: "354" },
    { number: "354" },
    { number: "287" },
    { number: "275" },
  ];
  return (
    <>
      <div className="mx-[5%] xl:mx-auto  lg:max-w-[1216px] mt-10">
        <div className="grid grid-cols-12 gap-x-10">
          <div className="col-span-12 md:col-span-6">
            <div className="w-[300px] md:w-full mx-auto">
              <label
                htmlFor="name"
                className="block mb-1 text-[14px]  font-normal text-black dark:text-white font-montserrat"
              >
                Company Name <span className="text-[#F04438]">*</span>
              </label>
              <input
                id="name"
                className="block w-full px-2 py-3 text-gray-900 border border-[#D0D5DD] rounded-[8px] sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="w-[300px] md:w-full mx-auto mt-5">
              <label
                htmlFor="website"
                className="block mb-1 text-[14px]  font-normal text-black dark:text-white font-montserrat"
              >
                Company Website <span className="text-[#F04438]">*</span>
              </label>
              <input
                type="text"
                id="website"
                className="block px-2 py-3 w-full text-gray-900 border border-[#D0D5DD] rounded-[8px] sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="w-[300px] md:w-full mx-auto mt-5">
              <label
                htmlFor="employees"
                className="block mb-1 text-[14px]  font-normal text-black dark:text-white font-montserrat"
              >
                Numnber of Employees <span className="text-[#F04438]">*</span>
              </label>
              <button
                type="button"
                className="relative flex items-center justify-between bg-gray-50 border border-[#D0D5DD] text-[#667085] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onClick={() => {
                  setEmployee(!employee);
                  setRetainer(false);
                }}
              >
                Select number of employees
                <svg
                  sidebar-toggle-item
                  className={employee ? "w-6 h-6 rotate-180": "w-6 h-6"}
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
              {employee && (
                <div>
                  <div className="flex flex-col rounded-lg  mt-2 bg-whiteColor">
                    <ul>
                      {Employees.map((item, index) => {
                        return (
                          <>
                            <li
                              key={index}
                              className="block px-4 py-2 hover:bg-[#F9FAFB]text-[14px] text-gray-700 rounded-t-lg hover:cursor-pointer hover:text-blue-500 focus:outline-none focus:text-blue-500 transition duration-150 ease-in-out font-montseorrat w-full"
                            >
                              {item?.number}
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <div className="w-[300px] md:w-full mx-auto mt-5">
              <label
                htmlFor="tagline"
                className="block mb-1 text-[14px]  font-normal text-black dark:text-white font-montserrat"
              >
                Tagline <span className="text-[#F04438]">*</span>
              </label>
              <input
                id="tagline"
                className="block px-2 py-3 w-full text-gray-900 border border-[#D0D5DD] rounded-[8px] sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="w-[300px] md:w-full mx-auto mt-5">
              <label
                htmlFor="bio"
                className="block mb-1 text-[14px]  font-normal text-black dark:text-white font-montserrat"
              >
                Company Bio
              </label>
              <textarea
                id="bio"
                className="block px-2 py-3 w-full min-h-[130px]  text-gray-900 border border-[#D0D5DD] rounded-[8px] sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="w-[300px] md:w-full mx-auto ">
              <label
                htmlFor="website"
                className="block mb-1 text-[14px]  font-normal text-black dark:text-white font-montserrat"
              >
                Company Logo
              </label>
              <div className="flex items-center justify-center">
                <input
                  type="file"
                  id="imageslist"
                  // onChange={uploadFile}
                  accept="image/*"
                  className="cursor-pointer hidden"
                />

                <label
                  role="button"
                  htmlFor="imageslist"
                  className="h-[130px] w-full border border-[#D0D5DD] rounded-[8px] pt-5 flex justify-center"
                >
                  <div>
                    <div className="flex justify-center">
                      <span className="shadow-md border border-[#D0D5DD]  rounded-[8px] h-[40px] w-[40px] flex justify-center items-center">
                        <img
                          className="w-[20px] h-[20px]"
                          src={
                            require("../../assets/images/upload-icon.svg")
                              .default
                          }
                        />
                      </span>
                    </div>
                    <div className="flex justify-center">
                      <p className="text-[14px] font-semibod font-montserrat mt-3 ml-5">
                        <span className="text-[14px] font-semibod text-[#329BFA] font-montserrat">
                          Click to upload
                        </span>{" "}
                        or drag and drop <br />
                        SVG, PNG, or JPG (max. 800x800px){" "}
                      </p>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div className="w-[300px] md:w-full mx-auto mt-5">
              <label
                htmlFor="email"
                className="block mb-1 text-[14px]  font-normal text-black dark:text-white font-montserrat"
              >
                Sales Email <span className="text-[#F04438]">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="block w-full px-2 py-3 text-gray-900 border border-[#D0D5DD] rounded-[8px] sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="w-[300px] md:w-full mx-auto mt-5">
              <label
                htmlFor="size"
                className="block mb-1 text-[14px]  font-normal text-black dark:text-white font-montserrat"
              >
                Typical Retainer Size <span className="text-[#F04438]">*</span>
              </label>
              <button
                type="button"
                className="relative flex items-center justify-between bg-gray-50 border border-[#D0D5DD] text-[#667085] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onClick={() => {
                  setRetainer(!retainer);
                  setEmployee(false);
                }}
              >
                Select retainer size
                <svg
                  sidebar-toggle-item
                  className={retainer ? "w-6 h-6 rotate-180": "w-6 h-6"} 
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
              {retainer && (
                <div>
                  <div className="flex flex-col rounded-lg mt-2  bg-whiteColor">
                    <ul>
                      {Retainer.map((item, index) => {
                        return (
                          <>
                            <li
                              key={index}
                              className="block px-4 py-2 hover:bg-[#F9FAFB]text-[14px] text-gray-700 rounded-t-lg hover:cursor-pointer hover:text-blue-500 focus:outline-none focus:text-blue-500 transition duration-150 ease-in-out font-montseorrat w-full"
                            >
                              {item?.number}
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <div className="w-[300px] md:w-full mx-auto mt-5">
              <label
                htmlFor="address"
                className="block mb-1 text-[14px]  font-normal text-black dark:text-white font-montserrat"
              >
                Headquarters Address
              </label>
              <textarea
                id="address"
                className="block px-2 py-3 w-full min-h-[130px]  text-gray-900 border border-[#D0D5DD] rounded-[8px] sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
