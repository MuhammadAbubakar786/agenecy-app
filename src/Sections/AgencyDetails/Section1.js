import React from "react";
import { HashLink } from "react-router-hash-link";
const Section1 = () => {
  return (
    <>
      <div className="mx-[5%] xl:mx-auto  max-w-[1216px] mt-10">
        <div className="flex items-center justify-center gap-5">
          <HashLink
            to="/AgencyDetails/#highlights"
            activeClassName="selected"
            smooth 
          >
            <span className="text-[16px] font-inter font-semibold text-[#475467]">
              Highlights
            </span>
          </HashLink>
          <HashLink
            to="/AgencyDetails/#portfolio"
            activeClassName="selected"
            smooth 
          >
            <span className="text-[16px] font-inter font-semibold text-[#475467]">
            Portfolio
            </span>
          </HashLink>
          <HashLink
            to="/AgencyDetails/#snapshot"
            activeClassName="selected"
          >
            <span className="text-[16px] font-inter font-semibold text-[#475467]">
            Snapshot
            </span>
          </HashLink>
          <HashLink
            to="/AgencyDetails/#reviews"
            activeClassName="selected"
          >
            <span className="text-[16px] font-inter font-semibold text-[#475467]">
            Reviews
            </span>
          </HashLink>
          
        </div>
      </div>
    </>
  );
};

export default Section1;
