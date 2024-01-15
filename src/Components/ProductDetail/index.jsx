import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import'./styles.css'
import { ShoppingCartContext } from '../../Context'

const ProductDetail = () => {

    const context = useContext(ShoppingCartContext)

    return(
        <aside
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 rounded-lg border-2 border-black bg-gray-200`}
            >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <XMarkIcon className='h-6 w-6 text-black-500'></XMarkIcon>
                </div>
            </div>
        </aside>
    )
}

export default ProductDetail