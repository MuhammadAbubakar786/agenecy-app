import React from "react";

const Section5 = () => {
  return (
    <>
      <div className="mx-[5%] xl:mx-auto max-w-[1216px] mt-10">
        <h5 className="text-[16px] font-montserrat font-semibold mb-2 flex items-center justify-center text-center min-w-[400px]">
          Create Password
        </h5>
        <p className="text-[14px] font-medium text-[#667085] font-montserrat flex items-center justify-center text-center min-w-[400px]">
          This email address and password will be used to login to your account
        </p>
        <div className="flex flex-col mx-auto min-w-[350px] sm:w-[450px] ">
        <div className="w-[400px] sm:w-[450px] mx-auto mt-5">
          <label
            htmlFor="email"
            className="block mb-1 text-[14px]  font-normal text-black dark:text-white font-montserrat"
          >
            Email
          </label>
          <input
            id="email"
            placeholder="Enter your primary email"
            className="block w-full px-2 py-3 text-gray-900 border border-[#D0D5DD] rounded-[8px] sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="w-[400px] sm:w-[450px] mx-auto mt-5">
          <label
            htmlFor="password"
            className="block mb-1 text-[14px]  font-normal text-black dark:text-white font-montserrat"
          >
            Password
          </label>
          <input
            id="password"
            placeholder="********"
            className="block w-full px-2 py-3 text-gray-900 border border-[#D0D5DD] rounded-[8px] sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="w-[400px] sm:w-[450px] mx-auto mt-5">
          <label
            htmlFor="cpassword"
            className="block mb-1 text-[14px]  font-normal text-black dark:text-white font-montserrat"
          >
            Confirm Password
          </label>
          <input
            id="cpassword"
            placeholder="********"
            className="block w-full px-2 py-3 text-gray-900 border border-[#D0D5DD] rounded-[8px] sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        </div>
      </div>
    </>
  );
};

export default Section5;
