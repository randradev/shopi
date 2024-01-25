// ProductDetail.js

// Importa useState para gestionar el estado de la clase de superposición
import React, { useContext, useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import './styles.css';
import { ShoppingCartContext } from '../../Context';

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  // Estado para controlar la clase de superposición
  const [overlayClass, setOverlayClass] = useState('');

  // Efecto para actualizar la clase de superposición cuando cambia el estado de isProductDetailOpen
  useEffect(() => {
    setOverlayClass(context.isProductDetailOpen ? 'overlay' : '');
  }, [context.isProductDetailOpen]);

  return (
    <div className={overlayClass}>
      <aside
        className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 rounded-lg bg-white overflow-auto`}
      >
        {/* Contenido del detalle del producto */}

        <div className='flex justify-between items-center p-6'>
          <h2 className='font-medium text-xl'>Detail</h2>
          <div>
            <XMarkIcon
              className='h-6 w-6 text-black-500 cursor-pointer'
              onClick={() => context.closeProductDetail()}
            ></XMarkIcon>
          </div>
        </div>
        <figure className='px-6'>
          <img
            className='w-full h-full rounded-lg'
            src={context.productToShow.image}
            alt={context.productToShow.title}
          />
        </figure>
        <p className='flex flex-col p-6'>
          <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
          <span className='font-medium text-md'>${context.productToShow.title}</span>
          <span className='font-light text-sm'>${context.productToShow.description}</span>
        </p>
      </aside>
    </div>
  );
};

export default ProductDetail;
