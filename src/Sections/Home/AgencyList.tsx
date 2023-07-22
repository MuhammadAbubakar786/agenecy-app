import React from 'react'
import Product from '../../types/Product'
import AgencyListCard from '../../Components/AgencyListCard'

function AgencyList() {
    const products: Product[] = [
        {
          name: 'Product 1',
          description: 'Description of Product 1',
          image: 'https://example.com/product1.jpg',
          tags: ['full services', 'Social Ads', 'Search Ads'],
        },
        {
          name: 'Product 2',
          description: 'Description of Product 2',
          image: 'https://example.com/product2.jpg',
          tags: ['andiod development', 'graphic design', 'UI/UX design'],
        },
      ];
  return (
    <React.Fragment>
        <div className='container mx-auto px-4 sm:px-0 grid grid-cols-1'>
            {/* py-4 is temprary */}
            <div className='grid grid-cols-1 gap-8 py-8'>
                {/* <AgencyListCard />
                <AgencyListCard /> */}
                {products.map((product, index) => (
                    <AgencyListCard key={index} product={product} />
                ))}
            </div>
        </div>
    </React.Fragment>
  )
}
export default AgencyList
