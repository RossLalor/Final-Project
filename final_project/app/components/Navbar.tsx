import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

const Navbar = () => {
  return (
    <nav className="flex items-center h-18 justify-between flex-wrap bg-gradient-to-r from-blue-500 from-90% to-orange-700 p-6">

      <div className="flex gap-5">
        {/* Corrected Link usage */}
        <div className="absolute inset-y-5 right-5"><UserButton /></div>
        <Link href="/" >Home
        </Link>
        <div>
        <Link className="hover: hover:text-neon-green duration-300" href="/charts">Charts
        </Link>
        </div>
        <div>
        <Link className="hover: hover:text-neon-green duration-300" href="/about">About
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
