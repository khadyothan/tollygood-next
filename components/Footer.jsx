import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 w-full mt-36 py-10 shadow-lg">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold" style={{ color: "orange" }}>
          tollygood.com
        </p>
        <div className="mt-2">
          <Link href="/" className="text-gray-600 hover:text-orange-500 mx-2">
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-orange-500 mx-2"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-orange-500 mx-2"
          >
            Contact
          </Link>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
