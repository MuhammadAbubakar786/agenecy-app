import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-start max-w-[1216px] h-[100px] mx-[5%] xl:mx-auto">
        <Link to={"/"}>
          <img src={require("../../assets/images/logo.png")} />
        </Link>
      </div>
      <div className="border-t mb-10 max-w-[1216px] border-[#EAECF0] mx-[5%] xl:mx-auto "></div>
    </>
  );
};

export default Header;
