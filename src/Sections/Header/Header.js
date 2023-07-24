import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between max-w-[1216px] h-[100px] mx-[5%] xl:mx-auto">
      <div>
        <Link to={"/"}>
          <img src={require("../../assets/images/logo.png")} />
        </Link>
      </div>
        <div className="flex items-center justify-end">
                <button className="w-[144px] bg-[#329BFA] px-[16px] py-[10px] rounded-[8px] text-[#FFFFFF] flex items-center justify-center text-[14px] font-montserrat font-semibold" type="submit">
                  Agency Login
                </button>
              </div>
      </div>
      <div className="border-t mb-10 max-w-[1216px] border-[#EAECF0] mx-[5%] xl:mx-auto "></div>
    </>
  );
};

export default Header;
