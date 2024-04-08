import { Link } from 'react-router-dom';
import { IoIosStar } from 'react-icons/io';


export default function ProductsCard({
  products,
}: {
  products: {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    rating: { rate: number };
  };
}) {
  function shortenText(text: string, maxLength: number): string {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength - 3) + '...';
  }

  return (
    <Link to={`/${products.id}`}>
      <div className="w-40 md:w-48 h-60 rounded-md border overflow-hidden">
        <div className="flex flex-col space-y-1.5 p-2">
          <div className="w-36 h-36">
            <img
              src={products.image}
              alt="product image"
              className="rounded-xl w-full h-full object-contain"
            />
          </div>

          <p className="text-xs font-medium leading-none">{shortenText(products.title, 25)}</p>
          <p className="text-xs">${products.price}</p>
          <div className="flex space-x-1 items-center">
            <IoIosStar />
            <p className="text-xs">{products.rating.rate}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
