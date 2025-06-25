import Link from "next/link";

const Header = () => (
  <header className="mb-8">
    <nav className="flex items-center justify-between rounded-full border border-gray-200 p-2">
      <Link href="/" className="pl-4">
        <div className="flex items-center">
          <div className="h-8 w-8 relative">
            {/* Logo - Two overlapping circles */}
            <div className="absolute h-6 w-6 rounded-full border-2 border-black left-0"></div>
            <div className="absolute h-6 w-6 rounded-full border-2 border-black left-2"></div>
          </div>
        </div>
      </Link>
      <div className="hidden md:flex space-x-8 text-sm">
        <Link href="/agency" className="hover:underline">
          Agency
        </Link>
        <Link href="/our-works" className="hover:underline">
          Our Works
        </Link>
        <Link href="/services" className="hover:underline">
          Services
        </Link>
        <Link href="/testimonials" className="hover:underline">
          Testimonials
        </Link>
      </div>
      <Link
        href="/contact"
        className="bg-black text-white px-6 py-2 rounded-full text-sm"
      >
        Contact
      </Link>
    </nav>
  </header>
);
export default Header;
