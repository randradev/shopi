import Layout from "../../Components/Layout"
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

function NotFound() {
    return (
      <Layout>
          <div className='flex items-center justify-center mt-6'>
                <div className='text-center'>
                    <div className='flex items-center justify-center mb-4'>
                        <MagnifyingGlassIcon className='h-16 w-16 text-gray-500'/>
                    </div>
                    <h2 className='font-medium text-xl'>Sorry</h2>
                    <p className='text-gray-500'>Page not found, try again</p>
                </div>
            </div>
      </Layout>
    )
  }
  
export default NotFound