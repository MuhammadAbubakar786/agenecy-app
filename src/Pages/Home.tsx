import React from 'react'
// import Section2 from '../Sections/Home/Section2'
import Pagination from '../Sections/Home/Pagination/Pagination'
import Footer from '../Sections/Home/Footer/Footer'
import AgencyList from '../Sections/Home/AgencyList'
import Sections3 from '../Sections/Home/Sections3'

function Home() {
  return (
    <React.Fragment>
      {/* <Section2 /> */}
      <Sections3 />
      <AgencyList />
      <Pagination />
      <Footer />
    </React.Fragment>
  )
}

export default Home