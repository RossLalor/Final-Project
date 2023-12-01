// Button.tsx
import Link from 'next/link';

const Button = () => {
  return (
    <Link href="butts">
      <button className="text-gray-700 text-center bg-red-400 hover:-translate-y-0 hover:scale-90 duration-100">SDG Goals</button>
    </Link>
  );
};

export default Button;