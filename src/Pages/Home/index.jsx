import { useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {

    const context = useContext(ShoppingCartContext)

    return (
        <Layout>
          <div className='flex items-center justify-center relative w-80 mb-8'>
            <h1 className='font-medium text-xl mt-6'>Exclusive Products</h1>
          </div>
          <input
            type='text'
            placeholder='Search a product'
            className='rounded-lg border border-black w-80 p-2 mb-6 focus:outline-none'
            onChange={(event) => context.setSearchByTitle(event.target.value)}
          />
          {context.filteredItems ? (
            // Cards
            <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-screen-lg'>
              {context.filteredItems.map((item) => (
                <Card key={item.id} data={item}/>
              ))}
            </div>
          ) : (
            // Skeleton loader
            <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-screen-lg'>
              {Array.from({ length: 8 }, (_, index) => (
                <div key={index} className='bg-gradient-to-br from-gray-200 to-gray-300 p-4 rounded-lg animate-gradient'>
                  <div className="h-56 rounded-lg overflow-hidden relative">
                    <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-300 animate-bg-gradient" />
                  </div>
                </div>
              ))}
            </div>
          )}
          <ProductDetail />
        </Layout>
    )
}

export default Home;
