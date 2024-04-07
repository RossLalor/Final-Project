import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">

      <div className="text-sm lg:flex-grow">
        {/* Corrected Link usage */}
        <div className="absolute inset-y-5 right-5"><UserButton /></div>
        <Link href="signin" >Sign-in
        </Link>
        <Link href="/about">ARSE
        </Link>

        {/* Add more links as needed */}
      </div>
    </nav>
  );
};

export default Navbar;
