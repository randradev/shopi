import { useContext } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

function Home() {

    const context = useContext(ShoppingCartContext)

    return (
        <Layout>
          <div className='flex items-center justify-center relative w-80 mb-4'>
            <h1 className='font-medium text-xl'>Exclusive Products</h1>
          </div>
          <input
            type='text'
            placeholder='Search a product'
            className='rounded-lg border border-black w-80 p-2 mb-6 focus:outline-none'
            onChange={(event) => context.setSearchByTitle(event.target.value)}
          />
          {context.filteredItems?.length > 0 ? (
            <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-screen-lg'>
              {context.filteredItems?.map((item) => (
                <Card key={item.id} data={item}/>
              ))}
            </div>
          ) : (
            <div className='flex items-center justify-center'>
                <div className='text-center'>
                    <div className='flex items-center justify-center mb-4'>
                        <MagnifyingGlassIcon className='h-16 w-16 text-gray-500'/>
                    </div>
                    <h2 className='font-medium text-xl'>Sorry</h2>
                    <p className='text-gray-500'>No matches were found, try again</p>
                </div>
            </div>
          )}
          <ProductDetail />
        </Layout>
      )
}

export default Home