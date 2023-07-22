import React from "react";

const Section2 = () => {
  return (
    <>
      <div  className="mx-[5%] xl:mx-auto  max-w-[1216px] mt-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-2">
            <div className="w-[70px] h-[70px]">
              <img src={require("../../assets/images/Logomark.svg").default} />
            </div>
              <h6 className="text-[22px] font-bold uppercase font-babas tracking-[0.44px] mb-2">
                Layers company
              </h6>
          </div>
          <div className="w-[70px] h-[70px]">
                <img src={require("../../assets/images/layer.png")}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
