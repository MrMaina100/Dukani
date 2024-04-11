import { useAppSelector, useAppDispatch } from '@/app/hooks';
import {
  addNumberOfItemsInCart,
  deleteNumberOfItemsInCart,
  removeItemsFromCart,
  getTheTotalSumInCart,
} from '@/features/cart/cartSlice';
import {
  selectAllcartProducts,
  selectCartTotal,
} from '@/features/cart/cartSlice';

import { GoTrash } from 'react-icons/go';
import { FiMinus } from 'react-icons/fi';
import { FaPlus } from 'react-icons/fa6';
import { Button } from '../ui/button';
import { MdOutlineCancel } from 'react-icons/md';
import { useEffect } from 'react';

export default function CartPage() {
  const dispatch = useAppDispatch();
  const cartproducts = useAppSelector(selectAllcartProducts);
  const total = useAppSelector(selectCartTotal);

  useEffect(() => {
    dispatch(getTheTotalSumInCart());
  }, [cartproducts, dispatch]);

  const handlePaymentIntent = async () => {
    try {
      const res = await fetch('https://dukani-production.up.railway.app/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cartproducts,
        }),
        credentials:'include'
      });

      if (res.ok) {
        const { url } = await res.json();
        window.location = url;
      } else {
        console.log('something went wrong');
      }
    } catch (error) {
      console.log('error creating checkout session', error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-2.5 ">
      <div className="flex flex-col items-center space-y-2">
        {cartproducts.map((products) => (
          <div
            key={products.id}
            className="relative border-2 rounded-xl flex items-center justify-between w-[370px] md:w-1/2  h-52 p-1.5"
          >
            <button
              onClick={() => dispatch(removeItemsFromCart(products.id))}
              className="absolute top-2 right-2"
            >
              <MdOutlineCancel />
            </button>
            <div className="flex space-x-2">
              <div className="w-32 h-32">
                <img
                  src={products.image}
                  alt="product image"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <h2 className="max-w-xs">{products.title}</h2>

                <div className="flex justify-between bg-gray-100 rounded-md p-2.5 w-28">
                  <button
                    onClick={() =>
                      dispatch(deleteNumberOfItemsInCart(products.id))
                    }
                  >
                    {products.quantity < 1 ? <GoTrash /> : <FiMinus />}
                  </button>
                  <p>{products.quantity}</p>
                  <button
                    onClick={() =>
                      dispatch(addNumberOfItemsInCart(products.id))
                    }
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>

            <p>${products.price}</p>
          </div>
        ))}

        {cartproducts.length === 0 ? (
          <div>
            <h2>Your cart is empty </h2>
          </div>
        ) : (
          <div className="flex justify-between space-x-8">
            <p>The subtotal is</p>

            <p>${total}</p>
          </div>
        )}
      </div>

      <Button
        disabled={cartproducts.length === 0}
        onClick={handlePaymentIntent}
      >
        Procced to checkout
      </Button>
    </div>
  );
}
