import Marquee from '../ui/Marquee/Marquee';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import CategoriesPage from './CategoriesPage';
import SponsersPage from './SponsersPage';

export default function LandingPage() {
  return (
    <div>
      <div className="max-w-[1400px]  mx-auto flex flex-col items-center  space-y-4 mt-16">
        <h1 className=" text-4xl font-extrabold tracking-tight lg:text-5xl">
          SHOP TILL YOU DROP
        </h1>
        <Button className="" asChild>
          <Link to="/allproducts">View Items</Link>
        </Button>
        <Marquee />
        <SponsersPage/>
      </div>
      <CategoriesPage />
    </div>
  );
}
