import React from 'react'

const Sorting = () => {
  const SortingData = [
    {
      buttonText:"Ranking "
    },
    {
      buttonText:"Trending "
    },
    {
      buttonText:"Review count "
    },
    {
      buttonText:"Popularity "
    },
    {
      buttonText:"Near me "
    },
  ]
  return (
    <>
        <div
          className="absolute mx-auto lg:mx-0 mt-[370px] sm:mt-72 lg:right-0 z-10 lg:mt-64 w-48 p-2 origin-top-right rounded-[8px] bg-white border border-whiteColor py-1 card-shadow ring-black ring-opacity-5 bg-whiteColor"
          role="menu"
          aria-orientation="vertical"
        >
        {
          SortingData?.map((item)=> {
            return <>
          <button className="hover:bg-[#F9FAFB] text-[14px] font-montserrat font-medium w-full flex items-center justify-start p-1 rounded-[6px] text-[#344054] mb-1 py-1">{item?.buttonText}</button>

            </>
          })
        }
          
        </div>
    </>
  )
}

export default Sorting
