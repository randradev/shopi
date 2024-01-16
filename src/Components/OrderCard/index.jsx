// OrderCard.js
import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = (props) => {
  const { id, title, imageUrl, price } = props;

  return (
    <div className='flex justify-between items-center mb-3'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img
            className='w-full h-full rounded-lg object-cover checkout-image'
            src={imageUrl}
            alt={title}
          />
        </figure>
        {/* <div className='overflow-hidden'> */}
          <p className='text-sm font-light' style={{ maxWidth: '150px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</p>
        {/* </div> */}
      </div>

      <div className='flex'>
        <p className='text-lg font-medium'>{price}</p>
        <XMarkIcon className='h-6 w-6 text-black-500 cursor-pointer'></XMarkIcon>
      </div>
    </div>
  );
};

export default OrderCard;
