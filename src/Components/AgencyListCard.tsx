import React from 'react'
import Product from '../types/Product'
import Varification from '../assests/Icons/Varification.svg'
import Employees from '../assests/Icons/Employees.svg'
import Location from '../assests/Icons/Location.svg'
import Star from '../assests/Icons/star.svg'
import StarOutline from '../assests/Icons/start_outline.svg'

const AgencyListCard: React.FC<{ product: Product }> = ({ product }) => {
    const Tag: React.FC<{ tag: string }> = ({ tag }) => {
        return (
            // leading-[20.59px] px-[9px]
          <span className="bg-tagsColor px-[9px] gap-2 font-babas italic text-lg text-whiteColor tracking-[0.0002em] rounded-lg">
            {tag}
          </span>
        );
      };
  return (
    <React.Fragment>
        <div className='grid grid-cols-1 sm:grid-rows-[1fr_auto] bg-AgencyCardColor rounded-t-lg'>
            <div className='grid grid-cols-1 sm:grid-cols-[130px_1fr_auto] py-6 sm:py-8 sm:px-8 gap-6'>
                <div className='grid grid-cols-1 relative sm:py-4 sm:items-center sm:justify-items-center'>
                    <img src="https://th.bing.com/th/id/R.38aabe0613c4f17945cee40327ac367e?rik=mt2VM9zlD1xy%2bg&riu=http%3a%2f%2forig10.deviantart.net%2f6d95%2ff%2f2015%2f247%2fb%2f9%2fgoogle_2015_logo_high_resolution_png_by_jovicasmileski-d98chn1.png&ehk=lG6D9pljW2Xelus7LJtZjwHHjImg8kBuSVK6TAdwRhk%3d&risl=&pid=ImgRaw&r=0" alt="Company name" className='w-full object-contain' />
                </div>
                <div className='grid grid-cols-1 gap-4'>
                    <small className='relative underline sm:hidden grid grid-cols-[auto_auto] justify-start gap-1'>
                        <img src={Location} alt='Location' className='w-4' />
                        <span>NewYork</span>
                        <div className='sm:hidden absolute top-0 right-0'>
                            <img src={Varification} alt='Varificating badge' className='w-7/12 ml-auto'/>
                        </div>
                    </small>
                    <h4 className='font-babas font-bold text-[22px] leading-[26.4px] text-gray700'>Agency Name</h4>
                    <p className='font-montserrat font-medium text-sm text-gray700'>Lorem ipsum dolor sit amet consectetur. Commodo aliquam posuere arcu sed neque hac suscipit faucibus. Nibh vulputate nullam proin risus magna nulla. Ultrices s uspendisse elementum nibh nibh nulla tortor.</p>
                    {/* <div className='grid grid-cols-AgencyListTags gap-2 justify-start'>
                        <small className='bg-tagsColor px-[9px] rounded-lg text-sm'>full services</small>
                        <small className='bg-tagsColor px-[9px] rounded-lg text-sm'>Social Ads</small>
                        <small className='bg-tagsColor px-[9px] rounded-lg text-sm'>Search Ads</small>
                    </div> */}
                    {/* font-babas uppercase font-bold italic text-lg gap-4 text-whiteColor */}
                    <div className="flex flex-wrap gap-1">
                        {product.tags.map((tag, index) => (
                            <Tag key={index} tag={tag} />
                        ))}
                    </div>
                </div>
                <div className='hidden sm:block'>
                    <img src={Varification} alt='Varificating badge' className='w-full'/>
                </div>
            </div>
            {/* AgencyListTags  -- flex flex-wrap justify-between --  grid grid-cols-1 sm:grid-cols-[auto_auto] md:grid-cols-[auto_auto_auto] lg:grid-cols-[auto_auto_auto_auto] xl:grid-cols-[auto_auto_auto_auto_auto] xl: */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[auto_auto_auto_auto] lg:grid-cols-[auto_auto_auto_auto_auto] sm:justify-items-start lg:justify-items-center gap-1 sm:gap-2 md:gap-0 font-montserrat border border-grayBorder1 rounded-b-lg'>
                <div className='order-1 text-sm font-semibold leading-5 py-3 text-center sm:pl-4 md:order-5 md:col-span-4 md:justify-self-center md:border-t-[1px] md:border-l-[1px] md:border-r-[1px] md:pr-4 border-grayBorder1 lg:col-span-1 lg:self-center lg:py-5 lg:border-t-0 lg:border-r-0'>Avg. Monthely Retainer: <span>$50 - $99</span></div>
                <div className='order-2 text-sm font-semibold leading-5 py-3 text-center  grid grid-cols-[auto_auto] justify-center gap-2 sm:border-l-[1px] border-grayBorder1 sm:pl-4 md:order-2 md:pr-4 md:self-center'><img src={Employees} alt='Employees' className='w-5 ' /> <span>50-100</span></div>
                <div className='order-3 hidden sm:grid text-sm font-semibold text-center leading-5 py-3  grid-cols-[auto_auto] justify-center gap-2 border-l-[1px] sm:border-l-0 border-grayBorder1 sm:pl-4 md:order-3 md:pr-4 md:self-center md:border-l-[1px]'><img src={Location} alt='Location' className='w-4' /> <span>Neywork</span></div>
                <div className='order-4 text-sm font-semibold leading-5 py-3 text-center border-grayBorder1 sm:border-l-[1px] sm:pl-4 md:order-1 md:pr-4 md:self-center md:border-l-0'>Total Reviews: 300</div>
                <div className='order-5 text-sm font-semibold leading-5 lg:leading-none py-3 text-center sm:border-l-[1px] sm:border-t-[1px] sm:border-r-[1px] border-grayBorder1 flex flex-nowrap justify-self-center gap-2 sm:col-span-2 sm:p-4 md:col-span-1 md:order-4 md:border-r-0 md:border-t-0 md:py-0 lg:py-0'>
                    <div className='flex flex-wrap gap-2 lg:leading-5'>
                        <img src={Star} alt='Ratting' className='w-5'/>
                        <img src={Star} alt='Ratting' className='w-5'/>
                        <img src={Star} alt='Ratting' className='w-5'/>
                        <img src={Star} alt='Ratting' className='w-5'/>
                        <img src={StarOutline} alt='Ratting' className='w-5'/>
                    </div>
                    <span className='font-montserrat font-semibold text-2xl leading-[30px] md:self-center md:leading-none lg:leading-5'>4.9</span>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default AgencyListCard