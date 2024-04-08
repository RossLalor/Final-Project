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
              <li className="mb-1"><Link href="/about"><span className="text-white hover:text-gray-300 cursor-pointer">About</span></Link></li>
              <li className="mb-1"><Link href="/contact"><span className="text-white hover:text-gray-300 cursor-pointer">Contact</span></Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-bold text-lg mb-2">Social Media</h3>
            <ul className="list-none">
              <li className="mb-1"><span className="text-white hover:text-gray-300 cursor-pointer" onClick={() => window.open('https://github.com/RossLalor', '_blank')}>Github</span></li>
              <li className="mb-1"><span className="text-white hover:text-gray-300 cursor-pointer" onClick={() => window.open('https://www.instagram.com/ross.lalor/', '_blank')}>Instagram</span></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-bold text-lg mb-2">Contact</h3>
            <p className="mb-1">Email: Carpathia808@gmail.com</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-bold text-lg mb-2">Legal</h3>
            <ul className="list-none">
              <li className="mb-1"><Link href="/privacy-policy"><span className="text-white hover:text-gray-300 cursor-pointer">Privacy Policy</span></Link></li>
              <li className="mb-1"><Link href="/terms-of-service"><span className="text-white hover:text-gray-300 cursor-pointer">Terms of Service</span></Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 my-6"></div>
        <p className="text-center text-sm">&copy; {new Date().getFullYear()} Rossellini Enterprises.</p>
      </div>
    </footer>
 );
};

export default Footer;
