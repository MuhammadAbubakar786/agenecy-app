import React from "react";

const Section4 = () => {
  const Data = [
    {
      heading: "Item 1",
      file: "Click to upload File",
      thumbnail: "Click to upload Thumbnail",
      filetype: "PDF",
      thumbnailtype: "PNG or JPG",
    },
    {
        heading: "Item 2",
        file: "Click to upload File",
        thumbnail: "Click to upload Thumbnail",
        filetype: "PDF",
        thumbnailtype: "PNG or JPG",
      },
      {
        heading: "Item 3",
        file: "Click to upload File",
        thumbnail: "Click to upload Thumbnail",
        filetype: "PDF",
        thumbnailtype: "PNG or JPG",
      },
  ];
  return (
    <>
      <div className="mx-[5%] xl:mx-auto max-w-[1216px] mt-10">
        <h5 className="text-[16px] font-montserrat min-w-[400px] font-semibold mb-2 flex items-center justify-center text-center">
          Add up to 3 examples of your work
        </h5>
        <p className="text-[14px] font-medium text-[#667085] font-montserrat flex items-center justify-center text-center min-w-[380px]">
          These can be case studies, portfolio works, or anything you would like
          to showcase.
        </p>
        <div className="grid grid-cols-12 gap-5 mx-[5%] mt-5">
          {Data?.map((item) => {
            return (
              <>
                <div className="col-span-12 w-[350px] md:w-full mx-auto md:col-span-4">
                  <span className="text-[14px] font-montserrat font-semibold text-[#000] flex items-center justify-center mb-2">
                    {item?.heading}
                  </span>
                  <input
                    id="name"
                    placeholder="Add title"
                    className="block w-full px-2 py-2 text-gray-900 border border-[#D0D5DD] rounded-[8px] sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <div className="flex items-center justify-center mt-5">
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
                          <p className="text-[14px] font-semibod font-montserrat mt-3 text-center">
                            <span className="text-[14px] font-semibod text-[#329BFA] font-montserrat">
                              {item?.file}
                            </span>
                            <br />
                            {item?.filetype}
                          </p>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="flex items-center justify-center mt-5">
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
                          <p className="text-[14px] font-semibod font-montserrat mt-3 text-center">
                            <span className="text-[14px] font-semibod text-[#329BFA] font-montserrat">
                              {item?.thumbnail}
                            </span>
                            <br />
                            {item?.thumbnailtype}
                          </p>
                        </div>
                      </div>
                    </label>
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

export default Section4;
