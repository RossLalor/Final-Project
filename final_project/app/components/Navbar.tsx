import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { IoHomeSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-6">
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
        <Link href="/about">
          <div className="hover:text-gray-300 transition duration-300 cursor-pointer">About</div>
        </Link>

        <Link href="/userPage">
          <div className="hover:text-gray-300 transition duration-300 cursor-pointer">User Page</div>
        </Link>
        
        <div className="hover:text-gray-300 transition duration-300 cursor-pointer">
          <UserButton />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;