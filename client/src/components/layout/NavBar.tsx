import { Link } from 'react-router-dom';
import { IoIosCart } from 'react-icons/io';

export default function NavBar() {
  return (
    <div>
      <div className="flex justify-between p-4 ">
        <Link to='/'>
         <h1 className="font-bold text-[#2563eb] text-lg">DUKANI</h1>
        </Link>
       

        {/*  */}
        <Link to="/cart">
          <IoIosCart size={30} />
        </Link>
      </div>
    </div>
  );
}
