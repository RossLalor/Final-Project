"use client";
import Link from 'next/link';
const Footer = () => {
 return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-bold text-lg mb-2">Navigation</h3>
            <ul className="list-none">
              <li className="mb-1 "><Link href="/"><span className="text-white hover:text-gray-300 cursor-pointer">Home</span></Link></li>
              <li className="mb-1 "><Link href="electricCars"><span className="text-white hover:text-gray-300 cursor-pointer">SDG Goals</span></Link></li>
              <li className="mb-1"><Link href="/charts"><span className="text-white hover:text-gray-300 cursor-pointer">Charts</span></Link></li>
              <li className="mb-1"><Link href="/wander"><span className="text-white hover:text-gray-300 cursor-pointer">3D Model Viewer</span></Link></li>
              <li className="mb-1"><Link href="/Research"><span className="text-white hover:text-gray-300 cursor-pointer">Research</span></Link></li>
              <li className="mb-1"><Link href="/userPage"><span className="text-white hover:text-gray-300 cursor-pointer">User Diary Page</span></Link></li>
              <li className="mb-1"><Link href="/electric"><span className="text-white hover:text-gray-300 cursor-pointer">Electric Cars</span></Link></li>
              <li className="mb-1"><Link href="/hvo"><span className="text-white hover:text-gray-300 cursor-pointer">HVO</span></Link></li>
              <li className="mb-1"><Link href="/safety"><span className="text-white hover:text-gray-300 cursor-pointer">Safety</span></Link></li>
              <li className="mb-1"><Link href="/about"><span className="text-white hover:text-gray-300 cursor-pointer">About</span></Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-bold text-lg mb-2">Social Media</h3>
            <ul className="list-none">
              <li className="mb-1"><span className="text-white hover:text-gray-300 cursor-pointer" onClick={() => window.open('https://github.com/RossLalor', '_blank')}>Github</span></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-bold text-lg mb-2">Contact</h3>
            <p className="mb-1">Student email: B00137935@outlook.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 my-6"></div>
        <p className="text-center text-sm">&copy; {new Date().getFullYear()} Ross Lalor B00137935.</p>
      </div>
    </footer>
 );
};

export default Footer;
