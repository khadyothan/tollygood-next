import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white w-full mt-36 py-10">
      <div className="container mx-auto text-center">
        <p className="text-lg" style={{ color: "orange" }}>
          tollygood.com
        </p>
        <div className="mt-2">
          <Link href="/" className="text-gray-400 hover:text-white mx-2">
            Home
          </Link>
          <Link href="/about" className="text-gray-400 hover:text-white mx-2">
            About
          </Link>
          <Link href="/contact" className="text-gray-400 hover:text-white mx-2">
            Contact
          </Link>
        </div>
        <p className="text-sm mt-4">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
