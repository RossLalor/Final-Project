import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { IoHomeSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="px-4 py-4 bg-slate-900">
      <nav className="flex rounded  bg-gradient-to-r from-green-600 via-blue-400 to-blue-600 p-6">
        <Link className="w-8 flex " href="/">
          <div className="hover:text-gray-300 flex-row flex transition duration-300 cursor-pointer left-10 text-3xl items-center hover:scale-150 transition duration-500">
            <IoHomeSharp />
          </div>
        </Link>
        <Link
          className="w-64 flex hidden md:block"
          href="/"
        >
          <div className="hover:text-gray-300 flex-row flex transition duration-300 cursor-pointer left-10 text-3xl ">
            <div className="px-4 hidden md:block ">Leccy Cars</div>
          </div>
        </Link>
        <div className="flex gap-8 text-white text-xl w-full flex-wrap justify-end items-center">
          <Link href="/charts">
            <div className="hover:text-gray-300 transition duration-300 cursor-pointer">
              Air Quality Measuring
            </div>
          </Link>

          <Link href="/electricCars">
            <div className="hover:text-gray-300 transition duration-300 cursor-pointer">
              SDG Page
            </div>
          </Link>

          <Link href="/Research">
            <div className="hover:text-gray-300 transition duration-300 cursor-pointer">
              Research
            </div>
          </Link>

          <Link href="/userPage">
            <div className="hover:text-gray-300 transition duration-300 cursor-pointer">
              User Page
            </div>
          </Link>

          <Link href="/wander">
            <div className="hover:text-gray-300 transition duration-300 cursor-pointer">
              Model Viewer
            </div>
          </Link>

          <Link href="/hvo">
            <div className="hover:text-gray-300 transition duration-300 cursor-pointer">
              HVO
            </div>
          </Link>

          <Link href="/electric">
            <div className="hover:text-gray-300 transition duration-300 cursor-pointer">
              Electric Cars
            </div>
          </Link>

          <Link href="/about">
            <div className="hover:text-gray-300 transition duration-300 cursor-pointer">
              About
            </div>
          </Link>
          <div></div>
        </div>
        <div className="flex justify-end items-center scale-125 hover:scale-150 transition duration-1000">
          <UserButton />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
