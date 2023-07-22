import React from "react";

const Section3 = () => {
  return (
    <>
      <div id="highlights" className="mx-[5%] xl:mx-auto  max-w-[1216px] mt-10">
        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-20 lg:gap-[10%]">
          <div className="w-full lg:w-[45%]">
            <h6 className="text-[24px] font-semibold  font-inter tracking-[0.44px] mb-2">
              Highlights
            </h6>
            <p className="text-[14px] font-normal font-montserrat leading-[20px] text-black mt-5">
              Lorem ipsum dolor sit amet consectetur. Id lorem eget magna risus
              sit. Nibh vulputate nullam proin risus magna nulla. Ultrices s
              uspendisse elementum nibh nibh nulla tortor. Quis sit dictum
              pretium congue et blandit. Augue pretium quis ac adipiscing in.
              Sed in maecenas scelerisque vestibulum adipiscing non. Eu
              pellentesque sit molestie donec.l
            </p>
            <div className="flex items-center gap-[8px] mt-10">
              <div className="flex justify-center bg-[#3364F7] items-center h-[30px] pr-[9px] max-w-fit rounded-tl-xl rounded-bl-md rounded-tr-md rounded-br-xl">
                <p className="text-[14px] uppercase font-bold text-[#FFF] italic px-[2px]">
                  Agency review
                </p>
              </div>
              <div className="flex justify-center bg-[#3364F7] items-center h-[30px] pr-[9px] max-w-fit rounded-tl-xl rounded-bl-md rounded-tr-md rounded-br-xl">
                <p className="text-[14px] uppercase font-bold text-[#FFF] italic px-[2px]">
                  Agency review
                </p>
              </div>
              <div className="flex justify-center bg-[#3364F7] items-center h-[30px] pr-[9px] max-w-fit rounded-tl-xl rounded-bl-md rounded-tr-md rounded-br-xl">
                <p className="text-[14px] uppercase font-bold text-[#FFF] italic px-[2px]">
                  Agency review
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[45%]">
            <h6 className="text-[24px] font-semibold  font-inter tracking-[0.44px] mb-2">
              Get in Touch
            </h6>
            <form>
              <div className="flex items-center gap-[10%]">
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block mb-1 text-sm font-normal text-gray-900 dark:text-white"
                  >
                    Email <span className="text-[#F04438]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full p-2 text-gray-900 border border-[#D0D5DD] rounded-[8px] sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="phone"
                    className="block mb-1 text-sm font-normal text-gray-900 dark:text-white"
                  >
                    Phone <span className="text-[#F04438]">*</span>
                  </label>
                  <input
                    type="number"
                    id="phone"
                    className="block p-2 w-full text-gray-900 border border-[#D0D5DD] rounded-[8px] sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="w-full mt-5">
                <label
                  htmlFor="website"
                  className="block mb-1 text-sm font-normal text-gray-900 dark:text-white"
                >
                  Website <span className="text-[#F04438]">*</span>
                </label>
                <input
                  type="text"
                  id="website"
                  className="block p-2 w-full text-gray-900 border border-[#D0D5DD] rounded-[8px] sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="w-full mt-5">
                <label
                  htmlFor="website"
                  className="block mb-1 text-sm font-normal text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  type="text"
                  id="website"
                  className="block p-2 w-full min-h-[100px] text-gray-900 border border-[#D0D5DD] rounded-[8px] sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex items-center justify-end mt-10">
                <button className="w-[144px] bg-[#329BFA] px-[16px] py-[10px] rounded-[8px] text-[#FFFFFF] flex items-center justify-center text-[14px] font-montserrat font-semibold" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
