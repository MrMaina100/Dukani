import { useGetSingleProductQuery } from '@/apis/fakeStoreApi';
import { useParams } from 'react-router-dom';
import { Button } from '../ui/button';

import { useAppDispatch } from '@/app/hooks';
import { addToCart } from '@/features/cart/cartSlice';
import Pacman from '../ui/Pacman';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const { data, isError, isLoading } = useGetSingleProductQuery(Number(id));
  const dispatch = useAppDispatch();

  if (isLoading) {
    return <Pacman/>
  }

  if (isError || !data) {
    return <p>Whoops somethig on our end..lol</p>;
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col  space-y-4 items-center md:flex-row md:space-y-0 md:justify-center md:space-x-44  p-2">
        <div className="w-52 h-64">
          <img
            src={data.image}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col space-y-4 p-4">
          <h1>{data.title}</h1>
          <p className="max-w-lg text-muted-foreground">{data.description}</p>
          {/* quantity will go here */}
          <div className=" flex flex-col md:w-[400px] space-y-2">
            <Button onClick={() => dispatch(addToCart(data))}>
              Add to Cart
            </Button>

            
          </div>
        </div>
      </div>
    </div>
  );
}
