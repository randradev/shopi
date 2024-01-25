// CheckoutSideMenu.js

import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../utils';
import './styles.css';

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  // Estado para controlar la clase de superposición
  const [overlayClass, setOverlayClass] = useState('');

  // Efecto para actualizar la clase de superposición cuando cambia el estado de isCheckoutSideMenuOpen
  useEffect(() => {
    setOverlayClass(context.isCheckoutSideMenuOpen ? 'overlay' : '');
  }, [context.isCheckoutSideMenuOpen]);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter((product) => product.id !== id);
    context.setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: '01.02.2024',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.setSearchByTitle(null);
  };

  return (
    <div className={overlayClass}>
      <aside
        className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 rounded-lg bg-white overflow-auto`}
      >
        <div className='flex justify-between items-center p-6 '>
          <h2 className='font-medium text-xl'>My Order</h2>
          <div>
            <XMarkIcon
              className='h-6 w-6 text-black-500 cursor-pointer'
              onClick={() => context.closeCheckoutSideMenu()}
            ></XMarkIcon>
          </div>
        </div>

        <div className='px-6 overflow-y-scroll flex-1'>
          {context.cartProducts.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
              handleDelete={handleDelete}
            />
          ))}
        </div>

        <div className='px-6 mb-6'>
          <p className='flex justify-between items-center mb-2'>
            <span className='font-light'>Total:</span>
            <span className='font-medium text-2xl'>${totalPrice(context.cartProducts).toFixed(2)}</span>
          </p>
          <Link to='/my-orders/last'>
            <button
              className='w-full bg-black py-3 text-white rounded-lg'
              onClick={() => handleCheckout()}
            >
              Checkout
            </button>
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default CheckoutSideMenu;