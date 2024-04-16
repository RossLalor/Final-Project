import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { IoHomeSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="px-4 py-4 bg-slate-900">
    <nav className="flex items-center rounded justify-between bg-gradient-to-r from-green-600 via-blue-400 to-blue-600 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        {/* Place for a logo or title if needed */}
      </div>
      <div className="flex gap-8 text-white text-xl">
        <Link href="/">
          <div className="hover:text-gray-300 flex-row flex transition duration-300 cursor-pointer left-10 text-3xl absolute"><div><IoHomeSharp /></div><div className="px-4">Leccy Cars</div></div>
        </Link>
        <Link href="/charts">
          <div className="hover:text-gray-300 transition duration-300 cursor-pointer">Charts</div>
        </Link>

        <Link href="/electricCars">
          <div className="hover:text-gray-300 transition duration-300 cursor-pointer">SDG Page</div>
        </Link>

        <Link href="/Research">
          <div className="hover:text-gray-300 transition duration-300 cursor-pointer">Research</div>
        </Link>

        <Link href="/userPage">
          <div className="hover:text-gray-300 transition duration-300 cursor-pointer">User Page</div>
        </Link>

        <Link href="/about">
          <div className="hover:text-gray-300 transition duration-300 cursor-pointer">About</div>
        </Link>
        
        <div className="hover:text-gray-300 transition duration-300 cursor-pointer">
          <UserButton />
        </div>

      </div>
    </nav>
  </div>
  );
};

export default Navbar;