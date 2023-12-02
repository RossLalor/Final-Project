// Button.tsx
import Link from 'next/link';

const Button = () => {
  return (
    <Link href="signin">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Sign In</button>
    </Link>
  );
};

export default Button;