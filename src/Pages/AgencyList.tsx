import React from "react";
import Sections3 from "../Sections/Home/Sections3";
import Section2 from "../Sections/Home/Section2";
import Pagination from "../Components/Pagination/Pagination";
import Footer from "../Sections/Footer/Footer";
function AgencyList() {
  return (
    <>
      <Section2 />
      <Sections3 />
       <Pagination/>
       <Footer />
    </>
  );
}
export default AgencyList;
