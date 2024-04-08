import image12 from '/image12.jpg';

import image14 from '/image14.jpg';
import image15 from '/image15.jpg';
import women from '/wommen.jpg'
import { Link } from 'react-router-dom';

export default function CategoriesPage() {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 md:mt-28 pb-8">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">BELIEVE THE HYPE</h1>
      <p className='text-sm text-muted-foreground'>Find your style and browse from our different categories</p>

      {/* our grids */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="relative w-36 md:w-42 h-52 ">
          <Link to="/electronics">
            <div className='w-full h-full'>
              <img
                src={image14}
                alt=""
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
            <div className="absolute bottom-1 left-1 bg-white p-2 rounded text-sm text-muted-foreground">
              <p>electronics</p>
            </div>
          </Link>
        </div>

        <div className="relative  w-36 md:w-42 h-52 ">
          <Link to="/jewelery">
            <div className='w-full h-full'>
              <img
                src={image15}
                alt=""
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
          </Link>
          <div className="absolute bottom-1 left-1 bg-white p-2 rounded text-sm text-muted-foreground">
            <p>jewelery</p>
          </div>
        </div>

        <div className=" relative w-36 md:w-42 h-52">
          <Link to="/men clothing">
            <div className=' w-full h-full'>
              <img
                src={image12}
                alt=""
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            <div className="absolute bottom-1 left-1 bg-white p-2 rounded text-sm text-muted-foreground">
              <p>men's</p>
            </div>
          </Link>
        </div>

        <div className=" relative w-36 md:w-42 h-52  ">
          <Link to="/womens clothing">
            <div className='w-full h-full'>
              <img
                src={women}
                alt=""
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            <div className="absolute bottom-1 left-1 bg-white p-2 rounded text-sm text-muted-foreground">
              <p>womens</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
