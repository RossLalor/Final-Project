"use client";
import Link from "next/link";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { IoHomeSharp, IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="px-4 py-4 bg-slate-900">
      <nav className="flex items-center justify-between bg-gradient-to-r from-green-600 via-blue-400 to-blue-600 p-6 rounded">
        <div className="flex items-center">
          <button
            className="text-3xl text-white lg:hidden"
            onClick={toggleMenu}
          >
            {isOpen ? <IoClose /> : <IoMenu />}
          </button>
          <Link href="/">
            <div className="text-3xl text-white hover:text-gray-300 transition duration-300 cursor-pointer hover:scale-150 ml-4 lg:ml-0">
              <IoHomeSharp />
            </div>
          </Link>
        </div>

        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row gap-8 text-white text-xl w-full lg:w-auto justify-end items-center px-4`}
        >
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
          <Link href="/safety">
            <div className="hover:text-gray-300 transition duration-300 cursor-pointer">
              Safety
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
        </div>

        <div className="lg:justify-end items-center scale-125 hover:scale-150 transition duration-1000">
          <UserButton />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
