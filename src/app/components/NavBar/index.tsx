import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 p-7 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="/"
          className="text-orange-500 font-bold text-lg border-b-4 border-orange-500 "
        >
          Utils
        </a>
        <ul className="flex space-x-4">
          <li>
            <a
              href="/"
              className="text-orange-500 font-bold border border-orange-500 rounded-md w-32 p-2"
            >
              Clima
            </a>
          </li>
          <li>
            <Link
              href="/cep"
              className="text-orange-500 font-bold border border-orange-500 rounded-md w-32 p-2"
            >
              CEP
            </Link>
          </li>
          <li>
            <a
              href="/contact"
              className="text-orange-500 font-bold border border-orange-500 rounded-md w-32 p-2"
            >
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
