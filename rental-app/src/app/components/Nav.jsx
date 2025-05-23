import Link from 'next/link';

export default function Nav() {
  return (
    <nav className=" sm:px-2 md:p-4 flex justify-between items-center">
      <div className="w-2/5 2xl:w-[25%] mr-auto flex justify-between items-center">
        <div className="space-x-6 hidden md:block">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/listings" className="hover:underline">
            Listings
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/faq" className="hover:underline">
            FAQ
          </Link>
        </div>
      </div>
    </nav>
  );
}
