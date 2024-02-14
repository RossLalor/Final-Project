import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      {/* ... other navbar content ... */}
      <div className="text-sm lg:flex-grow">
        {/* Corrected Link usage */}
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
