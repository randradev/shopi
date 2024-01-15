import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import'./styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    return(
        <aside
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 rounded-lg border-2 border-black bg-gray-200 overflow-auto`}
            >
            <div className='flex justify-between items-center p-6 '>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon
                        className='h-6 w-6 text-black-500 cursor-pointer'
                        onClick={() => context.closeCheckoutSideMenu()}>    
                    </XMarkIcon>
                </div>               
            </div>
        </aside>
    )
}

export default CheckoutSideMenu