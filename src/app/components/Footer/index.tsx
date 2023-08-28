import Link from "next/link";

const Footer = () => {
  return (
    <nav className="bg-gray-100 p-7 border-t">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-orange-500 font-bold text-lg border-b-4 border-orange-500 "
        >
          Utils
        </Link>
      </div>
    </nav>
  );
};

export default Footer;
