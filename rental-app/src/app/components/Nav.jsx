import Link from 'next/link';
import SearchBar from './SearchBar'; // adjust the path as needed

export default function Nav() {
  return (
    <nav className="sm:px-2 md:p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
      {/* Left Section: Logo + Links */}
      <div className="w-full md:w-2/5 2xl:w-[25%] flex items-center justify-between md:justify-start">
        <a href="/" className="mr-[30px]">
          <span
            className="material-icons"
            style={{
              fontSize: "40px",
              marginRight: "30px",
              marginLeft: "15px",
            }}
          >
            travel_explore
          </span>
        </a>
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

      {/* Right Section: SearchBar */}
      <div className="w-full md:w-[60%] 2xl:w-[65%]">
        <SearchBar />
      </div>
    </nav>
  );
}
