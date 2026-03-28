import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "FAQ", path: "/" },
  { name: "Changelog", path: "/" },
  { name: "Blog", path: "/" },
  { name: "Download", path: "/" },
  { name: "Contact", path: "/" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="text-xl font-bold text-gray-800">
            CS Ticket System
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-gray-600 hover:text-black transition duration-200 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}

            {/* CTA Button */}
            <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition">
              + New Ticket
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 pb-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="block text-gray-600 hover:text-black text-sm font-medium"
              >
                {link.name}
              </a>
            ))}

            <button className="w-full bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition">
              + New Ticket
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;