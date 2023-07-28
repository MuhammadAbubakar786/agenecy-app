import React, { useState } from "react";
import Section2 from "../Sections/CreateAgency/Section2";
import Section3 from "../Sections/CreateAgency/Section3";
import Section4 from "../Sections/CreateAgency/Section4";
import Section5 from "../Sections/CreateAgency/Section5";
import { useNavigate } from "react-router-dom";
import Step1 from "../Sections/CreateAgency/Steps/Step1";
import Step2 from "../Sections/CreateAgency/Steps/Step2";
import Step3 from "../Sections/CreateAgency/Steps/Step3";
import Step4 from "../Sections/CreateAgency/Steps/Step4";

const CreateAgency = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  return (
    <>
      <div className="mx-[5%] xl:mx-auto  max-w-[1100px]">
        <div className="grid grid-cols-12">
          <h4 className="text-[24px] font-montserrat font-semibold mb-5 min-w-[400px] col-span-12 flex justify-center">
            Create your Agency Listing
          </h4>
        </div>
      </div>
      {step === 1 && (
        <>
          <Step1 />
          <Section2 />
        </>
      )}
      {step === 2 && (
        <>
          <Step2 />
          <Section3 />
        </>
      )}
      {step === 3 && (
        <>
          <Step3 />
          <Section4 />
        </>
      )}
      {step === 4 && (
        <>
          <Step4 />
          <Section5 />
        </>
      )}
      <div className="border-t my-10 max-w-[1216px] border-[#EAECF0] mx-[5%] xl:mx-auto "></div>
      <div className="my-10 md:max-w-[1216px] sm:mx-[5%] xl:mx-auto min-w-[400px] col-span-12 flex justify-center items-center gap-20 sm:justify-between">
        {step <= 1 ? (
          <>
            <button
              className="w-[144px]  px-[16px] py-[10px] rounded-[8px] border border-[#EAECF0] flex items-center justify-center text-[14px] font-montserrat font-semibold"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              className="w-[144px]  px-[16px] py-[10px] rounded-[8px] border border-[#EAECF0] flex items-center justify-center text-[14px] font-montserrat font-semibold"
              onClick={() => setStep((state) => state - 1)}
            >
              Back
            </button>
          </>
        )}
        {step >= 3 ? (
          <>
            <button
              className="w-[144px] bg-[#329BFA] px-[16px] py-[10px] rounded-[8px] text-[#FFFFFF] flex items-center justify-center text-[14px] font-montserrat font-semibold"
              onClick={() => setStep((state) => state + 1)}
            >
              Submit
            </button>
          </>
        ) : (
          <>
            <button
              className="w-[144px] bg-[#329BFA] px-[16px] py-[10px] rounded-[8px] text-[#FFFFFF] flex items-center justify-center text-[14px] font-montserrat font-semibold"
              onClick={() => setStep((state) => state + 1)}
            >
              Next
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default CreateAgency;
